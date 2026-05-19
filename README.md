# RevStream Capital

**Hạ tầng tokenization receivable financing cho B2B service SMEs Việt Nam.**

> Phiên bản 2.0 | Tháng 5/2026 | Đội Xplorators 2026

---

## Tổng quan

RevStream Capital kết nối B2B service SMEs với nhà đầu tư tổ chức thông qua quyền nhận dòng tiền được tokenize. Dragon Capital ($5B AUM) giữ junior tranche, chịu tổn thất đầu tiên, và quản lý rủi ro pool tổng thể.

**Vấn đề cần giải quyết:** B2B service SMEs tại Việt Nam (IT outsourcing, digital agency, kế toán, pháp lý, HR) có receivable ổn định từ corporate clients lớn nhưng không tiếp cận được tín dụng ngân hàng. Các fintech hiện tại tính 18-24% APR với quy trình thẩm định từng invoice riêng lẻ, không scale được.

**Giải pháp:** Revolving facility được duyệt sẵn — SME rút vốn theo từng invoice, trả lại khi corporate client thanh toán, platform giám sát liên tục.

---

## Demo

**Live:** [https://nnplinggg.github.io/revstream-blockchain-finance-engine/](https://nnplinggg.github.io/revstream-blockchain-finance-engine/)

Prototype bao gồm **SME Portal** và **Investor Portal**.

---

## Sản phẩm cốt lõi

### Revolving Receivable Facility

| Tham số | Chi tiết |
|---|---|
| Loại | Revolving credit facility 24 tháng |
| Quy mô mỗi SME | $200,000 – $300,000 |
| Advance rate | 80–90% giá trị invoice |
| Kỳ hạn | Theo điều khoản NET invoice (tối đa 60 ngày) |
| APR quy đổi | 15–22% |
| SLA duyệt tự động | < 2 giờ (P95) |

### Cấu trúc Tranche

| Tranche | % Pool | Yield | Nhà đầu tư |
|---|---|---|---|
| Senior | 65% | 9.5% | Tổ chức (bảo hiểm, quỹ hưu trí) |
| Mezzanine | 20% | 14% | HNWI (từ Q4 2027) |
| Junior | 15% | Target 20% IRR | Dragon Capital + HNWI chọn lọc |

---

## Kiến trúc hệ thống

```
SME Portal        Corporate Portal        Investor Portal
     |                   |                      |
     +------------- API Gateway ----------------+
                         |
            +------------+-------------+
            |            |             |
      Core Engine    Monitoring    Settlement
      (Facility)    (Credit AI)   (Blockchain)
            |            |             |
            +------------+-------------+
                         |
                  PostgreSQL + IPFS
```

### Tech Stack

| Tầng | Công nghệ |
|---|---|
| Frontend | React + TypeScript + Vite |
| UI | shadcn/ui + Tailwind CSS |
| Backend | Node.js / Python |
| Database | PostgreSQL |
| Blockchain | Polygon (ERC-1400) |
| Document storage | IPFS |
| Cloud | AWS Vietnam |

---

## Blockchain Settlement Layer

Blockchain không phải sản phẩm — là hạ tầng back-end. SME không bao giờ tiếp xúc với lớp này.

**Ba lý do cụ thể chọn blockchain** (không phải vì trend):

1. **Audit trail cho cơ quan quản lý** — Luật Công nghiệp Công nghệ số 2025 yêu cầu hồ sơ bất biến. On-chain record không thể giả mạo.
2. **Niềm tin nhà đầu tư** — Tự xác minh số dư và lịch sử thanh toán mà không cần tin vào báo cáo platform.
3. **Secondary market 2029** — Atomic settlement Mezzanine token không cần central counterparty.

### Tại sao ERC-1400 thay vì ERC-20?

| Chuẩn | Vấn đề |
|---|---|
| ERC-20 | Không có transfer restriction — bất kỳ ví nào cũng nhận được. Không enforce whitelist hay accredited investor. Không tuân thủ security token. |
| ERC-3643 | Ít implementation đã kiểm toán, developer community nhỏ hơn tại Việt Nam. Rủi ro triển khai không đáng đánh đổi ở Phase 0-1. |
| **ERC-1400** | Chuẩn trưởng thành, nhiều audit (Polymath, Tokeny), transfer restriction module sẵn có, hỗ trợ partition riêng cho Senior / Mezzanine / Junior. |

### Smart Contracts

| Contract | Chức năng |
|---|---|
| `RevStreamToken.sol` | ERC-1400 token. Ba partition: `SENIOR`, `MEZZANINE`, `JUNIOR`. Transfer restriction qua whitelist registry. |
| `WhitelistRegistry.sol` | Quản lý địa chỉ ví nhà đầu tư được phép. Chỉ admin Dragon Capital thêm/xóa. |
| `WaterfallController.sol` | Nhận USDC từ settlement, thực thi phân phối theo thứ tự: Senior → Mezzanine → Junior. |
| `InvoiceRegistry.sol` | On-chain record mỗi invoice: hash PDF (IPFS), giá trị, hash obligor, due date, trạng thái. |
| `PoolLedger.sol` | Theo dõi pool state: receivable outstanding, tranche balances, phân phối tích lũy. |

### Luồng Settlement

```
Corporate client thanh toán vào virtual account
        ↓
Webhook ngân hàng đối tác (< 15 phút)
        ↓
Ops team chuyển đổi sang USDC (Phase 1 thủ công, Phase 2 tự động)
        ↓
USDC gửi đến WaterfallController.sol
        ↓
Smart contract thực thi waterfall: Senior → Mezzanine → Junior
        ↓
Phân phối ghi on-chain → nhà đầu tư xem trên Polygonscan
```

**Polygon** được chọn vì gas cost < $0.01/giao dịch (so với $5–50 trên Ethereum mainnet), tương thích EVM, và custodian tổ chức đã hỗ trợ (Fireblocks, Ledger Enterprise).

**Custody:** Fireblocks MPC (không có người nắm khóa duy nhất) + multisig 3-of-5 cho admin operations.

**Security audit** bắt buộc trước khi deploy mainnet: Quantstamp / CertiK / Trail of Bits, $40K–60K cho 5 core contracts. Bug bounty $5K–$50K theo severity sau audit.

---

## Credit Monitoring Engine

Triết lý: **cảnh báo sớm, không phải dự báo** — phát hiện dấu hiệu 30–60 ngày trước khi xảy ra default để đội vận hành can thiệp kịp.

### Năm 1–2: Rule-Based (2026–2027)

Bốn rule chính chạy liên tục:

| Signal | Ngưỡng cảnh báo | Hành động |
|---|---|---|
| Invoice volume drop | Giảm > 20% so với 90-day average | Gắn cờ cho credit analyst trong 48h |
| Client concentration drift | Một obligor chiếm > 40% doanh thu SME | Tự động chặn drawdown mới với obligor đó |
| DSO tăng | Days Sales Outstanding tăng > 7 ngày so với baseline | Thêm vào watch list |
| Revenue vs baseline | Giảm > 20% trong 2 tháng liên tiếp, hoặc > 35% bất kỳ một tháng | Kích hoạt performance adjustment (+0.5–1.0% fee) |

SME thấy Revenue Health Monitor ngay trên dashboard của họ — minh bạch chủ động, không chỉ dùng nội bộ.

### Năm 2: Cohort Default Modeling (2027)

Khi Pool 1 có 12+ tháng dữ liệu từ 15 SMEs: nhóm theo sub-sector, quy mô facility, cấu trúc obligor → điểm Watch List 1–10 cho từng SME. Hỗ trợ phán đoán con người, không tự động quyết định.

### Năm 3+: ML Predictive (2028, có điều kiện)

Chỉ triển khai khi đủ: 200+ SME-tháng dữ liệu + 20+ default event quan sát. Dự báo doanh thu 4–6 tuần trước, cảnh báo covenant breach 60 ngày trước. Không thay thế phán đoán chuyên viên tín dụng, không tự động hóa approval.

---

## Structural Receivable Lock

Receivable của SME được chuyển nhượng hợp pháp sang SPV do Dragon Capital kiểm soát theo BLDS Điều 365–371 — chuyển nhượng hoàn toàn, không phải cầm cố. Nếu SME mất khả năng thanh toán, Dragon Capital thu hồi thẳng từ corporate client.

Triển khai theo 3 giai đoạn để giảm ma sát onboarding:

| Stage | Cơ chế | Phí |
|---|---|---|
| 1 – Soft assignment | SME direct payment, không cần corporate consent | +0.5% discount fee |
| 2 – Notification-only | Thông báo cho corporate, không cần ký lại | Baseline |
| 3 – Full assignment | Corporate acknowledgment, thanh toán thẳng vào virtual account RevStream | –0.3% discount fee |

Pricing rẻ dần khi lock chặt hơn tạo động cơ tự nhiên cho cả SME (tiết kiệm phí) và platform (kiểm soát pháp lý mạnh hơn) để đẩy nhanh sang Stage 3.

Mỗi invoice được gán một **virtual account riêng** — tài khoản phụ của tổng account tại ngân hàng đối tác. Ngân hàng nhận diện thanh toán thuộc invoice nào và webhook về RevStream trong 15 phút.

---

## Lộ trình

| Phase | Năm | Mục tiêu |
|---|---|---|
| **Phase 0** – Xây nền | 2026 | Pháp lý, MVP platform, pilot 2-3 SMEs |
| **Phase 1** – Pilot Pool | 2027 | Pool 1 ($4M, 15 SMEs), token issuance |
| **Phase 2** – Mở rộng | 2028 | 3 pools, $13.5M tổng facility |
| **Phase 3** – Thanh khoản | 2029 | 6 pools, secondary market, retail access |
| **Phase 4** – Trưởng thành | 2030 | 10 pools, $50M facility |

**Break-even:** Giữa 2027. **ROI 5 năm:** 71%. **IRR:** 28–32%.

---

## Cấu trúc repo

```
revstream-blockchain-finance-engine/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions: build + deploy tự động
├── docs/
│   └── PRD.md                # Tài liệu yêu cầu sản phẩm đầy đủ
├── RevStream/                # Frontend app (React + Vite)
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/   # UI components (shadcn + custom)
│   │   │   ├── pages/        # Dashboard, Facility, Documents, ...
│   │   │   └── routes.tsx
│   │   └── styles/
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
└── README.md
```

---

## Chạy local

```bash
cd RevStream
pnpm install
pnpm dev
```

Mở [http://localhost:5173](http://localhost:5173).

---

## Thị trường mục tiêu

- **~45,000–60,000** B2B service SMEs tại Việt Nam
- **~8,000–12,000** đủ điều kiện vào pool (doanh thu tối thiểu 500 triệu VND/tháng)
- **$2.5–4 tỷ USD** working capital gap ước tính

---

*Trạng thái: Prototype demo cho Xplorators Round 02. Không phân phối ra bên ngoài.*
