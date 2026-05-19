# RevStream Capital — Product Description

> Tài liệu này mô tả các tính năng **đã được implement** trong prototype,\
> dùng làm nền cho slides giới thiệu sản phẩm.

---

## 1. Vấn đề

B2B service SMEs Việt Nam — IT outsourcing, digital agency, kế toán, pháp lý, HR — đang bị kẹt bởi một nghịch lý đơn giản:

**Có hợp đồng ổn định với FPT, VNG, Techcombank. Không có tiền trả lương.**

| Thực tế | Số liệu |
|---|---|
| Phải đợi thu tiền | NET 30–60 ngày |
| Phải trả lương | Ngày mùng 5 hàng tháng |
| Fintech hiện tại tính | 18–24% APR, duyệt từng invoice |
| Ngân hàng yêu cầu | Tài sản thế chấp cố định (SME không có) |
| Thị trường chưa được phục vụ | ~8,000–12,000 SMEs đủ điều kiện |

Không có giải pháp nào cho phép SME **rút vốn linh hoạt, nhanh, với hạn mức được duyệt sẵn.**

---

## 2. Giải pháp: Revolving Receivable Facility

RevStream là **hạn mức tín dụng luân hồi được duyệt sẵn**, gắn với receivable từ corporate clients đã được xác minh.

```
SME nộp invoice  →  Nhận tiền trong ngày  →  Trả lại khi corporate client thanh toán
```

Ba điểm khác biệt cốt lõi so với thị trường:

| | Ngân hàng truyền thống | Fintech (Validus, FS) | **RevStream** |
|---|---|---|---|
| Yêu cầu tài sản thế chấp | Có | Không | Không |
| Hạn mức sẵn sàng | Không | Không | **Có — duyệt trước** |
| Tốc độ giải ngân | Tuần | 1–2 ngày | **Trong ngày** |
| APR | 8–12% | 18–24% | **15–22%** |
| Duyệt từng invoice | Có | Có | **Không — tự động** |

---

## 3. Hành trình người dùng — SME Portal

### 3.1 Dashboard: Toàn cảnh tài chính trong một màn hình

Màn hình đầu tiên SME thấy sau khi đăng nhập cho biết ngay ba thứ quan trọng nhất:

- **Hạn mức:** Đã dùng bao nhiêu, còn bao nhiêu (ring chart visual)
- **Cảnh báo:** Invoice nào sắp đến hạn, cái nào đang khẩn cấp
- **Sức khỏe tín dụng:** Doanh thu đang ở đâu so với baseline — không cần hỏi

Không cần gọi điện cho nhân viên tín dụng để biết facility đang ở trạng thái nào.

---

### 3.2 Nộp Invoice: 4 bước, dưới 3 phút

**Bước 1 — Upload**
Kéo thả file PDF invoice. Không cần nhập tay.

**Bước 2 — OCR tự động trích xuất**
Hệ thống đọc PDF và tự điền: số invoice, tên doanh nghiệp, ngày phát hành, ngày đáo hạn, giá trị. SME chỉ cần xác nhận hoặc sửa nếu cần. Obligor status hiện ngay — "VNG Corporation — Đã được phê duyệt · Tier A · Lịch sử thanh toán: Đúng hạn."

**Bước 3 — Cấu hình ứng trước**
Slider chọn tỷ lệ ứng trước 50–90% (mặc định 80%). Mọi con số được tính live:

```
Giá trị invoice:     $28,500
Tỷ lệ ứng trước:        80%
Số tiền ứng trước:   $22,800
Phí chiết khấu:        - $479
Phí cam kết:            - $33
────────────────────────────
Thực nhận:           $22,288
```

Virtual account được tạo riêng cho invoice này — SME copy số tài khoản gửi cho VNG Corporation.

**Bước 4 — Xác nhận**
"Yêu cầu tài trợ đã được duyệt · Tự động duyệt · 14:34 hôm nay." Timeline trực quan: Đã nộp → Đã duyệt → Đang xử lý → Giải ngân. Dự kiến trước 17:00 hôm nay.

---

### 3.3 Revenue Health: Giám sát tín dụng — minh bạch với SME

Hầu hết fintech theo dõi sức khỏe tài chính của SME để ra quyết định nội bộ mà SME không biết. RevStream hiển thị thông tin này **ngay trên dashboard của SME** — như một tính năng, không phải công cụ kiểm soát.

**Bốn chỉ số SME thấy theo thời gian thực:**

| Chỉ số | Ý nghĩa |
|---|---|
| **Xu hướng doanh thu vs. Baseline** | So với mức doanh thu khi được cấp facility. Tăng hay giảm bao nhiêu %. |
| **Tập trung khách hàng** | Một khách hàng chiếm bao nhiêu % doanh thu. Cảnh báo khi vượt 40%. |
| **DSO (Days Sales Outstanding)** | Corporate client đang thanh toán nhanh hay chậm hơn bình thường. |
| **Mức ổn định invoice** | Tần suất và giá trị invoice có đều không. Score 0–100. |

**Cơ chế điều chỉnh phí minh bạch:**
Nếu doanh thu dưới 80% baseline trong 2 tháng liên tiếp → phí tăng 0.5–1.0%. SME biết trước ngưỡng này. Hiện tại doanh thu đang 128% baseline → phí giữ nguyên ở mức thấp nhất.

> *"Giám sát không phải để hạn chế — mà để bảo vệ khả năng tiếp cận vốn của bạn."*

---

### 3.4 Quản lý Hạn mức: Facility là tài sản có thể phát triển

Facility không phải con số cố định. SME thấy rõ **ba hành động cụ thể có thể tăng hạn mức:**

- Duy trì DSO < 30 ngày → tiềm năng +$50,000
- Thêm 2 khách hàng B2B mới → tiềm năng +$100,000
- Doanh thu tăng trưởng 15% → tiềm năng +$75,000

Lịch sử hạn mức là timeline trực quan: cấp ban đầu $200,000 (01/01/2026) → nâng lên $500,000 (15/05/2026) nhờ doanh thu tốt. Phí hiện tại ở mức thấp nhất vì sức khỏe tài chính "Tốt."

Bảng khách hàng được phê duyệt: VNG Corporation (sub-limit $200K, advance 85%), Masan Group ($150K, 80%), FPT Software ($150K, 85%).

---

### 3.5 Theo dõi Hoàn trả: Không bao giờ bị bất ngờ

- **Tổng dư nợ hiện tại** — $320,500 trên 5 invoice đang mở
- **Sắp đến hạn 7 ngày** — $42,000, highlight màu vàng cảnh báo
- **Đã hoàn trả tháng này** — $115,000, tỷ lệ đúng hạn 100%

**Lịch thanh toán 30 ngày** là bar chart theo từng ngày — xanh (đã trả), vàng (sắp đến hạn), xám (tương lai). Hover vào từng cột thấy tên khách hàng và số tiền cụ thể.

---

## 4. Kiến trúc vận hành ẩn phía sau

Những gì SME không thấy, nhưng tạo ra trải nghiệm đó:

### Virtual Account — Tự động định tuyến thanh toán

Mỗi invoice có một **số tài khoản ảo riêng** tại Techcombank. Corporate client chuyển tiền vào đó. Hệ thống nhận diện invoice nào và tự động phân bổ: gốc → phí → hạn mức khả dụng phục hồi. SME không phải đối chiếu gì.

### Auto-Approval Engine

Invoice tự động duyệt khi thoả hết:
- Obligor đã whitelist
- Trong hạn mức còn lại
- Không vi phạm concentration limit
- Không có duplicate hash
- Không có overdue đang hoạt động

SLA: dưới 2 giờ (P95). Nếu không thoả → chuyển thủ công 24 giờ.

### Blockchain Settlement (Back-end, SME không thấy)

Waterfall phân phối tự động qua smart contract: Senior → Mezzanine → Junior. Lịch sử on-chain trên Polygon, nhà đầu tư tự xác minh trên Polygonscan.

---

## 5. Góc nhìn Nhà đầu tư

Nhà đầu tư Senior Tranche (tổ chức) thấy:

- **Pool overview**: số SMEs đang hoạt động, tổng receivable outstanding, weighted average days to maturity
- **Default metrics**: tỷ lệ default 90 ngày, concentration alerts
- **Token holding**: số dư ERC-1400, NAV ước tính, link Polygonscan
- **Báo cáo hàng tháng**: pool composition, collections, yield đã chi trả

Yield 9.5% có tài sản cơ sở là receivable từ FPT, VNG, Techcombank — cao hơn trái phiếu chính phủ (6–7%) và tiền gửi ngân hàng (5–6%).

---

## 6. Tóm tắt cho Slides

### Slide: Vấn đề
> SME có hợp đồng với FPT, VNG, Techcombank. Phải đợi 30–60 ngày để thu tiền. Phải trả lương ngày mùng 5. Không có tài sản thế chấp. Ngân hàng từ chối. Fintech tính 18–24% APR và duyệt từng invoice một.

### Slide: Giải pháp
> Hạn mức tín dụng luân hồi được duyệt sẵn, gắn với receivable từ corporate clients lớn. Nộp invoice → nhận tiền trong ngày → trả lại khi khách hàng thanh toán.

### Slide: Sản phẩm (3 điểm)
> 1. **Facility revolving** — hạn mức sẵn, không cần xin từng lần
> 2. **Auto-approval** — OCR + rule engine, dưới 2 giờ
> 3. **Revenue monitoring minh bạch** — SME thấy sức khỏe tín dụng của chính mình

### Slide: Bảo vệ nhà đầu tư (4 lớp)
> 1. Revenue Coverage Ratio 1.3x khi vào pool
> 2. Performance adjustment tự động khi SME yếu
> 3. Reserve account 3–5%
> 4. Junior tranche 15% first-loss (Dragon Capital chịu trước)

### Slide: Traction / Roadmap
> 2026: Foundation + pilot 2–3 SMEs | 2027: Pool 1 ($4M, 15 SMEs) | 2028: 3 pools $13.5M | 2030: $50M, 80–100 SMEs

---

*Dựa trên features thực tế đã implement trong prototype — tháng 5/2026.*
