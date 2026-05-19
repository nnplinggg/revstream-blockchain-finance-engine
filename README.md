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
