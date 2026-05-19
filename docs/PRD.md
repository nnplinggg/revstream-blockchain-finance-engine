# **RevStream Capital**

## **Tài liệu Yêu cầu Sản phẩm (PRD)**

**Phiên bản 2.0 | Tháng 5/2026** **Chủ sở hữu: Product & Tech Lead, Đội Xplorators 2026**

---

## **Mục lục**

1. [Tổng quan sản phẩm](https://claude.ai/chat/e119e05e-3a17-421f-a6f1-fe2168cfa18f#1-t%E1%BB%95ng-quan-s%E1%BA%A3n-ph%E1%BA%A9m)  
2. [Vấn đề cần giải quyết](https://claude.ai/chat/e119e05e-3a17-421f-a6f1-fe2168cfa18f#2-v%E1%BA%A5n-%C4%91%E1%BB%81-c%E1%BA%A7n-gi%E1%BA%A3i-quy%E1%BA%BFt)  
3. [Người dùng mục tiêu](https://claude.ai/chat/e119e05e-3a17-421f-a6f1-fe2168cfa18f#3-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-m%E1%BB%A5c-ti%C3%AAu)  
4. [Kiến trúc hệ thống](https://claude.ai/chat/e119e05e-3a17-421f-a6f1-fe2168cfa18f#4-ki%E1%BA%BFn-tr%C3%BAc-h%E1%BB%87-th%E1%BB%91ng)  
5. [Sản phẩm cốt lõi: Revolving Receivable Facility](https://claude.ai/chat/e119e05e-3a17-421f-a6f1-fe2168cfa18f#5-s%E1%BA%A3n-ph%E1%BA%A9m-c%E1%BB%91t-l%C3%B5i-revolving-receivable-facility)  
6. [Yêu cầu SME Portal](https://claude.ai/chat/e119e05e-3a17-421f-a6f1-fe2168cfa18f#6-y%C3%AAu-c%E1%BA%A7u-sme-portal)  
7. [Yêu cầu Investor Portal](https://claude.ai/chat/e119e05e-3a17-421f-a6f1-fe2168cfa18f#7-y%C3%AAu-c%E1%BA%A7u-investor-portal)  
8. [Yêu cầu Corporate Client Portal](https://claude.ai/chat/e119e05e-3a17-421f-a6f1-fe2168cfa18f#8-y%C3%AAu-c%E1%BA%A7u-corporate-client-portal)  
9. [Cơ chế Structural Receivable Lock](https://claude.ai/chat/e119e05e-3a17-421f-a6f1-fe2168cfa18f#9-c%C6%A1-ch%E1%BA%BF-structural-receivable-lock)  
10. [Hệ thống Credit Monitoring](https://claude.ai/chat/e119e05e-3a17-421f-a6f1-fe2168cfa18f#10-h%E1%BB%87-th%E1%BB%91ng-credit-monitoring)  
11. [Hạ tầng Blockchain Settlement](https://claude.ai/chat/e119e05e-3a17-421f-a6f1-fe2168cfa18f#11-h%E1%BA%A1-t%E1%BA%A7ng-blockchain-settlement)  
12. [Vận hành & Back-Office](https://claude.ai/chat/e119e05e-3a17-421f-a6f1-fe2168cfa18f#12-v%E1%BA%ADn-h%C3%A0nh--back-office)  
13. [Khung quản trị rủi ro](https://claude.ai/chat/e119e05e-3a17-421f-a6f1-fe2168cfa18f#13-khung-qu%E1%BA%A3n-tr%E1%BB%8B-r%E1%BB%A7i-ro)  
14. [Tuân thủ pháp lý](https://claude.ai/chat/e119e05e-3a17-421f-a6f1-fe2168cfa18f#14-tu%C3%A2n-th%E1%BB%A7-ph%C3%A1p-l%C3%BD)  
15. [Lộ trình theo giai đoạn 2026-2030](https://claude.ai/chat/e119e05e-3a17-421f-a6f1-fe2168cfa18f#15-l%E1%BB%99-tr%C3%ACnh-theo-giai-%C4%91o%E1%BA%A1n-2026-2030)  
16. [Dự báo tài chính](https://claude.ai/chat/e119e05e-3a17-421f-a6f1-fe2168cfa18f#16-d%E1%BB%B1-b%C3%A1o-t%C3%A0i-ch%C3%ADnh)  
17. [Chỉ số đo lường thành công](https://claude.ai/chat/e119e05e-3a17-421f-a6f1-fe2168cfa18f#17-ch%E1%BB%89-s%E1%BB%91-%C4%91o-l%C6%B0%E1%BB%9Dng-th%C3%A0nh-c%C3%B4ng)  
18. [Câu hỏi mở & Quyết định cần chốt](https://claude.ai/chat/e119e05e-3a17-421f-a6f1-fe2168cfa18f#18-c%C3%A2u-h%E1%BB%8Fi-m%E1%BB%9F--quy%E1%BA%BFt-%C4%91%E1%BB%8Bnh-c%E1%BA%A7n-ch%E1%BB%91t)

---

## **1\. Tổng quan sản phẩm**

RevStream Capital là hạ tầng tokenization receivable financing, kết nối B2B service SMEs với nhà đầu tư tổ chức thông qua quyền nhận dòng tiền được tokenize. Dragon Capital ($5B AUM) giữ junior tranche, chịu tổn thất đầu tiên, và quản lý rủi ro pool tổng thể.

Sản phẩm lấp đầy một khoảng trống thực tế: B2B service SMEs tại Việt Nam có receivable ổn định từ corporate clients lớn nhưng không tiếp cận được tín dụng ngân hàng (thiếu tài sản thế chấp cố định) và không đủ điều kiện phát hành trái phiếu hay cổ phiếu (quy mô quá nhỏ, chưa có rating). Các fintech cho vay hiện tại (Validus, Funding Societies) tính 18-24% APR với quy trình thẩm định từng invoice riêng lẻ, không scale được.

RevStream cung cấp revolving facility được duyệt sẵn, rút vốn theo từng invoice, kèm giám sát liên tục thay vì quyết định tín dụng tại một thời điểm.

**Phạm vi platform (2026-2030):** Ba portal (SME, Investor, Corporate Client), engine credit monitoring, lớp settlement bằng smart contract, và back-office vận hành. Giai đoạn pilot (2026-2028) phục vụ B2B service SMEs. Từ 2029 mở rộng hạ tầng ra các sector có receivable-based financing khác.

**Phạm vi Figma prototype (cho demo):** SME portal và Investor portal.

---

## **2\. Vấn đề cần giải quyết**

### **Phía SME**

B2B service SMEs tại Việt Nam (IT outsourcing, digital agency, kế toán/thuế, pháp lý, HR) ký hợp đồng với corporate clients nhưng phải đợi NET 30-45 ngày để thu tiền, trong khi phải trả lương trước. Net margin trung bình 15-30% đủ để chịu cost of capital 15-22%, nhưng các kênh vốn hiện tại không phục vụ họ:

* Ngân hàng chỉ phục vụ top-tier qua factoring quy mô nhỏ (\~$300M tổng thị trường), yêu cầu tài sản thế chấp cố định  
* Fintech (Validus, Funding Societies) tính 18-24% APR, thẩm định từng invoice, không có revolving structure  
* Không có hạn mức được duyệt sẵn cho phép SME rút linh hoạt khi cần

Quy mô thị trường: \~45,000-60,000 B2B service SMEs tại Việt Nam, trong đó \~8,000-12,000 đủ điều kiện vào pool (doanh thu tối thiểu 500 triệu VND/tháng). Tổng working capital gap ước tính $2.5-4 tỷ USD.

### **Phía nhà đầu tư**

Nhà đầu tư tổ chức và HNWI thiếu công cụ sinh lợi ngắn hạn với tài sản cơ sở minh bạch:

* Trái phiếu chính phủ: yield 6-7%, kỳ hạn dài  
* Tiền gửi ngân hàng: 5-6%  
* Góp vốn trực tiếp vào công ty chưa niêm yết: kém thanh khoản, thiếu minh bạch

Senior tranche yield 9.5% có tài sản cơ sở là receivable từ các obligor tầm Techcombank, VNG, FPT lấp đầy khoảng trống này.

### **Ràng buộc pháp lý**

Luật Việt Nam cấm quỹ đầu tư cho vay trực tiếp. Dragon Capital chỉ được đầu tư qua chứng khoán hoặc tài sản đủ điều kiện khác. SMEs không đủ điều kiện phát hành cổ phiếu hay trái phiếu. Tokenize quyền nhận dòng tiền từ receivable tạo công cụ đủ điều kiện, giải quyết ràng buộc này.

---

## **3\. Người dùng mục tiêu**

### **3.1 Founder SME (Người dùng chính)**

**Profile A: Founder IT Outsourcing / Software Services**

* 15-50 kỹ sư, doanh thu $800K-$3M/năm  
* Corporate clients: FPT, VNG, Techcombank, ngân hàng nước ngoài  
* Điểm đau: lương phải trả ngày mùng 5, invoice được thanh toán ngày 40  
* Độ quen công nghệ: cao, thành thạo SaaS tools  
* Nhu cầu cốt lõi: nộp invoice, nhận tiền trong ngày, trả lại khi client thanh toán

**Profile B: Chủ Digital Agency**

* 10-30 nhân sự, doanh thu $400K-$2M/năm  
* Clients: thương hiệu tiêu dùng, chuỗi bán lẻ, nhóm F\&B  
* Điểm đau: phải ứng vốn cho milestone dự án trước khi client trả  
* Độ quen công nghệ: trung bình-cao  
* Nhu cầu cốt lõi: rút vốn linh hoạt theo giai đoạn dự án

**Profile C: Founder Kế toán / Pháp lý / HR**

* 5-20 nhân sự, doanh thu $200K-$800K/năm  
* Clients: doanh nghiệp FDI, công ty tầm trung  
* Điểm đau: phí retainer NET 45, chi phí nhân sự phải trả hàng tháng  
* Độ quen công nghệ: trung bình  
* Nhu cầu cốt lõi: biết facility luôn sẵn sàng, chỉ rút khi thực sự cần

### **3.2 Nhà đầu tư tổ chức (Senior Tranche)**

* Công ty bảo hiểm, quỹ hưu trí, family office  
* Ticket size: $500K-$2M  
* Nhu cầu: thu nhập cố định với tài sản cơ sở minh bạch, báo cáo hàng quý, audit trail on-chain  
* Tiêu chí quyết định: chất lượng obligor, hiệu lực pháp lý của assignment, lịch sử default  
* Kênh tiếp cận: mạng lưới quan hệ sẵn có của Dragon Capital (70% AUM là institutional)

### **3.3 HNWI (Mezzanine & phần Junior, từ Q4 2027\)**

* Tài sản ròng $2M+, đủ tiêu chuẩn accredited investor  
* Ticket size: $100K-$500K  
* Nhu cầu: yield cao hơn tiền gửi, có thanh khoản qua secondary market từ 2029  
* Tiêu chí quyết định: đa dạng hóa danh mục, track record pool 1  
* Lưu ý: Junior tranche \- Dragon Capital giữ 5-10%, phần còn lại là HNWI được chọn lọc, tối đa 25 nhà đầu tư/pool

### **3.4 Retail (từ 2029, gián tiếp)**

* Tiếp cận qua cấu trúc mutual fund wrapper (DCDS), không phải direct investment  
* Không được phép direct access trong Phase 0-2

### **3.5 Corporate Client (Đối tác thanh toán, không phải khách hàng)**

* Doanh nghiệp lớn Việt Nam và FDI: FPT, VNG, Masan, VPBank, Techcombank, MoMo, Tiki, The Coffee House, Vinamilk, Vingroup và tương đương  
* Vai trò: nhận thông báo chuyển nhượng receivable, chuyển hướng thanh toán sang virtual account  
* Cần giảm thiểu: gánh nặng tuân thủ, phức tạp ERP, xáo trộn quan hệ với nhà cung cấp (SME)  
* Mục tiêu: pre-sign 15 master vendor agreements trước khi Pool 1 launch (Q3-Q4 2026\)

### **3.6 Đội ngũ vận hành nội bộ (Dragon Capital)**

* Chuyên viên tín dụng: thẩm định facility, đặt hạn mức, giám sát liên tục  
* Vận hành: đối soát virtual account, xử lý ngoại lệ, báo cáo nhà đầu tư  
* Tuân thủ: báo cáo NHNN, giám sát AML/KYC, quản lý token registry

---

## **4\. Kiến trúc hệ thống**

### **4.1 Các thành phần hệ thống**

SME Portal          Corporate Portal        Investor Portal  
     |                     |                      |  
     \+-------------- API Gateway \----------------+  
                           |  
              \+------------+-------------+  
              |            |             |  
        Core Engine    Monitoring    Settlement  
        (Quản lý       (Credit       (Blockchain  
         Facility)     Scoring)      Layer)  
              |            |             |  
              \+------------+-------------+  
                           |  
                    Lớp lưu trữ dữ liệu  
                    (PostgreSQL \+ IPFS)

### **4.2 Điểm tích hợp**

| Hệ thống | Loại tích hợp | Độ ưu tiên |
| ----- | ----- | ----- |
| Virtual account (ngân hàng đối tác) | API \- định tuyến thanh toán | P0 |
| Nhà cung cấp KYB/AML (Trusting Social hoặc tương đương) | API \- onboarding | P0 |
| ERP doanh nghiệp (SAP/MISA) | Webhook \- thông báo thanh toán | P1 |
| Hệ thống báo cáo NHNN | File export | P1 |
| CIC Việt Nam | API \- lịch sử tín dụng | P1 |
| Custodian token (VPS hoặc SSI) | API \- quản lý token | P1 |
| Secondary market (2029) | Smart contract \- on-chain | P2 |

### **4.3 Technology Stack**

| Tầng | Công nghệ | Lý do chọn |
| ----- | ----- | ----- |
| Frontend | React \+ TypeScript | Năng lực team, tái sử dụng prototype |
| Backend | Node.js / Python | Linh hoạt cho ML pipeline (Python) |
| Database | PostgreSQL | Audit trail, cấu trúc quan hệ |
| Blockchain | Polygon (tương thích EVM) | Gas cost thấp, hỗ trợ ERC-1400 |
| Chuẩn smart contract | ERC-1400 | Tuân thủ security token, hạn chế chuyển nhượng |
| Lưu trữ tài liệu | IPFS | Lưu invoice/hợp đồng bất biến |
| Cloud | AWS khu vực Việt Nam | Yêu cầu lưu trữ dữ liệu trong nước |
| Monitoring | Datadog \+ dashboard tùy chỉnh | Quan sát vận hành |

---

## **5\. Sản phẩm cốt lõi: Revolving Receivable Facility**

### **5.1 Cấu trúc Facility**

| Tham số | Chi tiết |
| ----- | ----- |
| Loại facility | Revolving credit facility 24 tháng |
| Quy mô facility mỗi SME | $200,000 \- $300,000 (avg $267K) |
| Drawn balance trung bình | $80,000 \- $150,000 |
| Điều kiện drawdown | Theo từng invoice nộp |
| Advance rate | 80-90% giá trị invoice |
| Invoice tối đa mỗi lần | 25% hạn mức facility |
| Kỳ hạn mỗi lần rút | Theo điều khoản NET invoice (tối đa 60 ngày) |
| Đơn vị tiền tệ | USD (2026-2027), VND bổ sung từ Q1 2027 |
| Revenue Coverage Ratio tối thiểu khi vào pool | 1.3x |

### **5.2 Cơ cấu phí (SME)**

| Loại phí | Mức | Thời điểm thu |
| ----- | ----- | ----- |
| Invoice discount fee | 1.8-2.4% mỗi invoice (NET 30-45) | Khấu trừ khi giải ngân |
| Facility commitment fee | 1.5%/năm trên phần chưa sử dụng | Hàng tháng |
| Origination fee | 1.5% một lần | Khi duyệt facility |
| Performance adjustment | \+0.5-1.0% | Khi doanh thu SME xuống dưới 80% baseline |
| Phạt trả chậm | 0.1%/ngày quá hạn | Tính trên phần thiếu hụt |

Chi phí quy đổi hàng năm: 15-22% APR trên drawn balance trung bình. Cạnh tranh với Validus/Funding Societies (18-24%). Cao hơn ngân hàng (8-12%) nhưng ngân hàng không phục vụ phân khúc này.

### **5.3 Nguồn thu platform**

| Nguồn | Mức | Tính chất |
| ----- | ----- | ----- |
| Origination fee | 1.5% facility size | Một lần |
| Facility commitment fee | 1.5%/năm | Hàng tháng |
| Servicing fee | 1.0%/năm AUM | Hàng tháng |
| Net interest spread | 2-3% drawn balance | Hàng tháng |
| Performance fee | 15% phần Junior vượt 20% IRR | Hàng năm |
| Secondary market fee | 0.3%/giao dịch | Từ 2029 |

### **5.4 Cấu trúc Pool và Tranche**

**Quy mô pool theo năm:**

| Pool | Năm | Quy mô | Số SMEs | Avg ticket |
| ----- | ----- | ----- | ----- | ----- |
| Pool 1 | 2027 | $4M | 15 | $267K |
| Pool 3 | 2028 | $5.5M | 18 | $306K |
| Pool 6 | 2029 | $7M | 20 | $350K |

**Cấu trúc tranche:**

| Tranche | % Pool | Yield | Nhà đầu tư | Lock period |
| ----- | ----- | ----- | ----- | ----- |
| Senior | 65% | 9.5% (floor 8%) | Tổ chức (bảo hiểm, quỹ hưu trí, family office) | 24 tháng |
| Mezzanine | 20% | 14% | HNWI từ Q4 2027 | 18 tháng |
| Junior | 15% | Target 20% IRR, không floor | Dragon Capital 5-10% \+ HNWI chọn lọc (tối đa 25/pool) | 24 tháng |

Pool 1 (2027): chỉ mở Senior cho institutional và Junior cho Dragon Capital. Mezzanine mở cho HNWI sau Q3 2027 khi Pool 1 có 6 tháng track record. Retail access từ 2029 qua DCDS mutual fund wrapper, không phải direct investment.

### **5.5 Giới hạn tập trung (Concentration Limits)**

| Giới hạn | Ngưỡng | Lý do |
| ----- | ----- | ----- |
| Một SME đơn lẻ | 8% pool | Default 1 SME: tổn thất tối đa 8%, Junior 15% đủ hấp thụ |
| Một corporate client (cross-SME) | 15% doanh thu pool | Tránh VNG default \= nhiều SMEs cùng bị ảnh hưởng |
| Một sub-sector | 30% pool | Tránh IT-sector concentration |
| SMEs có doanh thu USD | 40% pool | Yêu cầu FX hedge ở cấp pool |

**Phân bổ sub-sector trong pool:**

| Sub-sector | % pool mục tiêu | Gross margin |
| ----- | ----- | ----- |
| IT outsourcing / software services | 30-35% | 35-50% |
| Digital agency (creative \+ media) | 20-25% | 35-45% |
| Accounting / tax / compliance | 20-25% | 40-55% |
| Legal / consulting | 15-20% | 45-60% |
| HR outsourcing / recruitment | 5-10% | 20-30% |

### **5.6 Bốn lớp bảo vệ Senior Yield**

| Lớp | Cơ chế | Tác dụng |
| ----- | ----- | ----- |
| 1 | Revenue Coverage Ratio 1.3x tại entry | Buffer tự nhiên ngay từ đầu |
| 2 | Performance adjustment: tự động tăng discount fee khi SME yếu | Định giá động theo rủi ro thực tế |
| 3 | Reserve account 3% (tích lũy lên 5% năm 3\) | Lớp hấp thụ tổn thất đầu tiên |
| 4 | Junior tranche 15% first-loss | Lớp hấp thụ tổn thất thứ hai |

Tổng khả năng hấp thụ tổn thất: 18-20% pool trước khi Senior bị ảnh hưởng. Expected loss thực tế: 1.0-2.0% pool (dựa trên benchmark B2B service sector và loss given default 30-40%).

### **5.7 Quy trình drawdown**

1. SME nộp invoice qua portal (PDF \+ thông tin có cấu trúc)  
2. Hệ thống xác thực: obligor trong danh sách trắng, định dạng invoice, hạn mức còn lại, concentration limit  
3. Kiểm tra gian lận: hash invoice trùng, giá trị bất thường, obligor concentration drift  
4. Tự động duyệt nếu: obligor đã whitelist, trong hạn mức, không anomaly, không overdue invoice  
5. Chuyển sang xét duyệt thủ công nếu: obligor mới, invoice \>25% hạn mức, có monitoring alert  
6. SLA: tự động 2 tiếng, thủ công 24 tiếng (cả hai ở percentile 95\)  
7. Giải ngân vào tài khoản SME: trong ngày làm việc sau khi duyệt  
8. Tạo virtual account riêng cho mỗi invoice

### **5.8 Quy trình thu hồi vốn**

1. Corporate client thanh toán vào virtual account gán cho invoice đó  
2. Webhook ngân hàng đối tác kích hoạt trong 15 phút  
3. Hệ thống phân bổ: thu hồi gốc \+ phí \+ waterfall  
4. Smart contract thực thi waterfall: Senior → Mezzanine → Junior  
5. SME được thông báo hoàn tất  
6. Hạn mức khả dụng phục hồi bằng phần gốc vừa thu hồi

### **5.9 Xử lý ngoại lệ**

| Tình huống | Hành động hệ thống | Hành động vận hành |
| ----- | ----- | ----- |
| Corporate chuyển nhầm tài khoản | Gắn cờ, không tự xử lý | Ops liên hệ bộ phận AP trong 24h |
| Nhận thanh toán một phần | Phân bổ phần nhận, ghi nhận còn thiếu | Thông báo SME, ân hạn 5 ngày |
| Trễ 15+ ngày | Chuyển thu hồi nhẹ, tạm dừng drawdown mới | Chuyên viên tín dụng xem xét |
| Trễ 45+ ngày | Thu hồi cứng, gửi thông báo pháp lý | Khởi động quy trình pháp lý, thông báo nhà đầu tư |
| Facility hết hạn | Chặn drawdown mới, invoice hiện tại chạy đến đáo hạn | Đề nghị gia hạn 60 ngày trước khi hết |

---

## **6\. Yêu cầu SME Portal**

### **6.1 Onboarding / KYB**

**Màn hình 1: Hồ sơ doanh nghiệp**

* Các trường: tên công ty, mã số thuế, ngày thành lập, lĩnh vực (dropdown: IT/Phần mềm, Digital Agency, Kế toán/Thuế, HR, Pháp lý, Khác)  
* Tải lên: Giấy chứng nhận đăng ký kinh doanh, đăng ký thuế  
* Xác thực: định dạng mã số thuế đối chiếu với Tổng cục Thuế

**Màn hình 2: Hồ sơ tài chính**

* Doanh thu 12 tháng gần nhất (sao kê ngân hàng hoặc xuất từ phần mềm kế toán)  
* 5 corporate clients lớn nhất theo doanh thu (tên, giá trị hợp đồng ước tính)  
* Nghĩa vụ nợ hiện tại  
* Revenue Coverage Ratio tự động tính khi nhập đủ thông tin

**Màn hình 3: Xác thực danh tính founder**

* Upload CCCD/hộ chiếu  
* Selfie trực tiếp (liveness check bên thứ ba)  
* Khai báo chủ sở hữu hưởng lợi cuối cùng

**Màn hình 4: Đề nghị cấp Facility**

* Hạn mức đề nghị (gợi ý tự động: thấp hơn giữa $300K và 20% trailing 12M revenue)  
* Mục đích sử dụng chính  
* Tần suất drawdown dự kiến hàng tháng

**Trạng thái KYB:** Đã nộp / Cần bổ sung tài liệu / Được duyệt / Từ chối (nộp lại sau 90 ngày)

SLA: 5 ngày làm việc.

### **6.2 Dashboard chính**

**Thẻ tổng quan Facility**

* Tổng hạn mức, số dư đã sử dụng, số dư khả dụng  
* Thanh tiến trình utilization (xanh \<60%, vàng 60-80%, đỏ \>80%)  
* Số ngày và số tiền kỳ trả gần nhất  
* CTA chính: "Nộp Invoice Mới"

**Bảng Invoice đang được tài trợ**

* Cột: Mã invoice, Corporate client, Giá trị invoice, Số tiền tài trợ, Ngày còn lại, Phí, Trạng thái  
* Trạng thái: Đang hoạt động / Sắp đến hạn (\<7 ngày, vàng) / Quá hạn (đỏ) / Đã tất toán (xám, 30 ngày gần nhất)  
* Sắp xếp theo: Ngày còn lại, Giá trị, Tên client

**Timeline hoàn trả 30 ngày**

* Biểu đồ cột theo tuần  
* Màu theo mức: bình thường / cần chú ý / khẩn cấp

**Revenue Health Monitor**

* Biểu đồ doanh thu 6 tháng so với baseline (đặt khi cấp facility)  
* Badge trạng thái: Tốt / Cần theo dõi / Cảnh báo  
* Label: "Giám sát Tín dụng Liên tục" kèm tooltip giải thích  
* Hiển thị cho SME như tính năng minh bạch, không chỉ dùng nội bộ

### **6.3 Quy trình nộp Invoice**

**Bước 1:** Kéo thả PDF, OCR tự điền số invoice, ngày, giá trị, ngày đáo hạn, tên người phát hành. Cho phép chỉnh sửa thủ công.

**Bước 2:** Xác nhận/chỉnh sửa OCR. Chọn corporate client từ dropdown (đã whitelist) hoặc thêm mới (kích hoạt manual review). Chọn advance amount: slider 50%-90% (mặc định 80%).

**Bước 3:** Xem lại tóm tắt: giá trị invoice, số tiền giải ngân, phí khấu trừ, số tiền thực nhận, ngày hoàn trả, số virtual account để gửi cho corporate client.

**Bước 4:** Ký số / OTP. Thời gian giải ngân dự kiến. Tải PDF xác nhận.

### **6.4 Theo dõi hoàn trả**

* Danh sách tất cả drawdown đang hoạt động với trạng thái thu hồi  
* Banner cảnh báo nếu có khoản quá hạn \>5 ngày  
* Tùy chọn tải chứng từ thanh toán nếu corporate chuyển nhầm tài khoản

### **6.5 Trung tâm tài liệu**

* Hợp đồng facility, xác nhận giải ngân từng invoice, sao kê hàng tháng, hóa đơn phí, thư thông báo assignment gửi corporate clients

### **6.6 Thông báo**

| Sự kiện | Kênh |
| ----- | ----- |
| Invoice được duyệt / giải ngân | Trong app \+ Email \+ SMS |
| Còn 7 ngày đến hạn hoàn trả | Email \+ SMS |
| Còn 2 ngày đến hạn hoàn trả | SMS |
| Nhận thanh toán từ corporate | Trong app \+ Email |
| Cảnh báo quá hạn | Email \+ SMS \+ Banner trong app |
| Cảnh báo credit monitoring (doanh thu bất thường) | Trong app \+ Email |
| Mở cửa sổ gia hạn facility (60 ngày trước hết hạn) | Email |

### **6.7 Yêu cầu Mobile**

* Tất cả luồng chính (dashboard, nộp invoice, theo dõi hoàn trả) phải hoạt động trên mobile browser  
* Không có native app trong Phase 0-1  
* Upload PDF qua camera mobile  
* Xác nhận OTP qua SMS

---

## **7\. Yêu cầu Investor Portal**

### **7.1 Onboarding**

* Xác minh accredited investor (cho Mezzanine/Junior)  
* KYC đầy đủ: hộ chiếu \+ bằng chứng địa chỉ \+ chứng minh tài sản  
* Ký số thỏa thuận đăng ký tham gia tranche  
* Hướng dẫn chuyển khoản vốn cam kết

### **7.2 Dashboard Danh mục**

**Thẻ tóm tắt Tranche**

* Loại tranche, vốn cam kết, vốn đã triển khai (% trên tổng), yield đã nhận tích lũy  
* Ngày và số tiền phân phối dự kiến tiếp theo

**Tổng quan sức khỏe Pool**

* Số SMEs đang hoạt động, tổng receivable outstanding, số ngày đến đáo hạn trung bình có trọng số  
* Tỷ lệ default 90 ngày, cảnh báo concentration (SME đơn lẻ, obligor đơn lẻ)  
* Reserve account balance (% pool)

**Nắm giữ Token**

* Số dư token ERC-1400, địa chỉ token trên Polygon  
* Lịch sử giao dịch (link Polygonscan)  
* NAV ước tính mỗi token

### **7.3 Báo cáo hiệu suất**

* Hàng tháng: pool composition, collections, default, yield chi trả, phí. PDF tải về \+ xem trong portal.  
* Hàng quý: pool tape kiểm toán (dữ liệu SME ẩn danh, danh sách obligor, aging analysis)  
* On-chain: sổ cái thanh toán liên tục, truy xuất qua hàm đọc smart contract

### **7.4 Secondary Market (Phase 3, từ 2029\)**

* Chỉ áp dụng cho Mezzanine token  
* Niêm yết token để bán, hiển thị spread mua/bán  
* Thanh toán: atomic swap on-chain, tiền mặt T+1  
* Hạn chế chuyển nhượng enforced bởi ERC-1400 (chỉ ví nhà đầu tư đã whitelist)

---

## **8\. Yêu cầu Corporate Client Portal**

### **8.1 Phạm vi**

Corporate clients là đối tác thanh toán, không phải khách hàng. Portal được xây dựng trong Phase 1 (2027) sau khi đã có 15 master vendor agreements ký trước (Phase 0 dùng email/PDF). Portal giảm thiểu ma sát cho ba việc:

1. Nhận và xác nhận thông báo chuyển nhượng receivable  
2. Xác nhận điểm đến thanh toán (virtual account)  
3. Xem nghĩa vụ với các nhà cung cấp đang sử dụng RevStream

### **8.2 Onboarding**

* Kích hoạt khi SME nộp invoice với corporate client mới  
* Platform gửi email cho đầu mối AP kèm link đăng ký  
* Đăng ký: tên công ty, mã số thuế, thông tin AP  
* KYB cơ bản: xác minh mã số thuế \+ kiểm tra tên giám đốc  
* Một portal cho tất cả nhà cung cấp của họ dùng RevStream

### **8.3 Tính năng chính**

**Xem Invoice Nhà cung cấp**

* Danh sách invoice từ vendor dùng RevStream, trạng thái, virtual account từng invoice  
* Export CSV để import vào ERP

**Thông báo Assignment**

* Ký số xác nhận thư chuyển nhượng receivable (có giá trị pháp lý theo Luật Giao dịch điện tử)  
* Audit trail về thời điểm xác nhận

**Xác nhận Thanh toán**

* Upload ủy nhiệm chi để đối chiếu trong trường hợp ngoại lệ

---

## **9\. Cơ chế Structural Receivable Lock**

### **9.1 Cơ sở pháp lý**

Chuyển nhượng khoản phải thu theo Bộ luật Dân sự Điều 365-371. Khoản phải thu của SME được chuyển nhượng hợp pháp sang SPV do Dragon Capital kiểm soát. Đây là chuyển nhượng hoàn toàn, không phải cầm cố hay bảo lãnh. Nếu SME mất khả năng thanh toán, Dragon Capital có quyền đòi nợ trực tiếp từ corporate client.

Legal opinion từ YKVN hoặc Vilaf trước khi launch.

### **9.2 Triển khai theo 3 giai đoạn**

| Stage | Cơ chế | Thời điểm | Pricing |
| ----- | ----- | ----- | ----- |
| 1 \- Soft assignment | SME direct payment, không cần corporate consent | Tháng 1-6 | \+0.5% discount fee (mức cao nhất) |
| 2 \- Notification-only | Thông báo cho corporate, không cần ký lại | Tháng 4-12 | Baseline |
| 3 \- Full assignment | Corporate acknowledgment, thanh toán thẳng vào virtual account RevStream | Tháng 9-18 | \-0.3% discount fee |

Giảm dần pricing premium khi lock chặt hơn tạo động cơ cho cả SME (phí thấp hơn) và platform (kiểm soát pháp lý mạnh hơn) để đẩy nhanh sang Stage 3\.

### **9.3 Kiến trúc Virtual Account**

Mỗi invoice được gán một virtual account riêng. Tất cả là tài khoản phụ của tài khoản tổng tại ngân hàng đối tác. Ngân hàng nhận diện thanh toán thuộc invoice nào và webhook về RevStream trong 15 phút.

Yêu cầu ngân hàng đối tác:

* Phát hành virtual account qua API  
* Webhook thanh toán đầu vào thời gian thực  
* Đa tiền tệ (USD \+ VND)  
* Được NHNN cấp phép, sẵn sàng ký thỏa thuận ba bên

### **9.4 Cấu trúc SPV**

* SPV thành lập tại Việt Nam (công ty TNHH một thành viên thuộc Dragon Capital)  
* SPV là bên nhận chuyển nhượng hợp pháp của tất cả receivable  
* SPV phát hành notes cho pool đầu tư (Senior, Mezzanine, Junior)  
* Notes được tokenize thành ERC-1400 security token  
* Dragon Capital nắm junior và điều hành SPV

---

## **10\. Hệ thống Credit Monitoring**

### **10.1 Triết lý thiết kế**

Mục tiêu là cảnh báo sớm, không phải dự báo. Phát hiện dấu hiệu suy giảm 30-60 ngày trước khi xảy ra default để đội vận hành có thời gian can thiệp: tạm dừng drawdown, tăng discount fee qua performance adjustment, bắt đầu xử lý nợ.

Không overclaim AI. Năm 1-2 là rule-based. ML defer đến năm 3 khi có đủ dữ liệu độc quyền. Đây là quyết định chủ động, không phải hạn chế kỹ thuật.

### **10.2 Năm 1-2: Rule-Based Monitoring (2026-2027)**

**Invoice Flow Anomaly Detection**

* Cảnh báo: invoice volume giảm \>20% so với 90-day average  
* Cảnh báo: giá trị invoice thay đổi đột ngột (đột nhiên toàn invoice nhỏ)  
* Cảnh báo: xuất hiện corporate client mới làm obligor chính  
* Hành động: gắn cờ cho chuyên viên tín dụng trong 48 giờ

**Client Concentration Drift**

* Theo dõi tỷ trọng doanh thu theo corporate client  
* Cảnh báo khi tỷ trọng một obligor tăng vượt 40% (mức SME) hoặc 15% (mức pool)  
* Hành động: tự động chặn drawdown mới với obligor đó nếu vi phạm pool limit

**Payment Delay Tracking (DSO per client)**

* Theo dõi số ngày từ due date đến khi corporate thanh toán, phân theo từng obligor và ngành  
* Cảnh báo: DSO tăng \>7 ngày so với baseline 90 ngày  
* Hành động: gắn cờ, thêm vào watch list

**Revenue Trend vs. Baseline**

* Baseline đặt khi cấp facility (trailing 6-month average)  
* Cảnh báo: doanh thu tháng giảm \>20% so với baseline trong 2 tháng liên tiếp  
* Cảnh báo: doanh thu giảm \>35% trong bất kỳ một tháng  
* Trigger: performance adjustment (+0.5-1.0% discount fee)  
* SME thấy thông tin này trên dashboard của họ

**Nguồn dữ liệu (Năm 1-2)**

* Dữ liệu platform RevStream (invoice, drawdown, thu hồi)  
* Sao kê ngân hàng do SME cung cấp hàng tháng  
* Virtual account inflows thời gian thực

### **10.3 Năm 2: Cohort Default Modeling (từ 2027\)**

Khi pool 1 có 12+ tháng dữ liệu từ 15 SMEs, bắt đầu phân tích cohort:

* Nhóm SMEs theo sub-sector, quy mô facility, cấu trúc obligor  
* Theo dõi delinquency rate 30/60/90 ngày theo cohort  
* Điểm Watch List (1-10) mỗi SME, chuyên viên tín dụng xem hàng tuần  
* Không phải ra quyết định tự động, hỗ trợ phán đoán con người

Điều kiện bắt đầu: tối thiểu 12 tháng dữ liệu, tối thiểu 5 default event quan sát được.

### **10.4 Năm 3+: ML Predictive Forecasting (từ 2028, nếu đủ điều kiện)**

**Điều kiện bắt buộc trước khi triển khai:**

* Pool 1 \+ Pool 2 \+ Pool 3 data đã sẵn có  
* Tối thiểu 200+ SME-tháng dữ liệu  
* Tối thiểu 20 default event quan sát được  
* Data science lead xác nhận chất lượng dataset

**Năng lực khi đủ điều kiện:**

* Dự báo doanh thu 4-6 tuần trước cho từng SME  
* Cảnh báo sớm predictive 60 ngày trước covenant breach  
* Mô hình hành vi thanh toán của corporate client

**Giới hạn rõ ràng:** Không thay thế phán đoán chuyên viên tín dụng. Không huấn luyện trên dữ liệu công khai. Không tự động hóa quyết định phê duyệt.

---

## **11\. Hạ tầng Blockchain Settlement**

### **11.1 Lý do chọn Blockchain**

Database thông thường đủ xử lý kế toán quỹ. Blockchain được chọn vì ba lý do cụ thể:

1. Audit trail cho cơ quan quản lý: Luật Công nghiệp Công nghệ số 2025 và các quy định về digital asset sắp ban hành yêu cầu hồ sơ bất biến. On-chain record không thể giả mạo.  
2. Niềm tin nhà đầu tư: Tự xác minh số dư và lịch sử thanh toán mà không cần dựa vào báo cáo platform.  
3. Secondary market 2029: Giao dịch Mezzanine token cần atomic settlement mà không cần central counterparty.

Blockchain là hạ tầng, không phải sản phẩm cho SME. SME không bao giờ tiếp xúc với lớp này.

### **11.2 Chuẩn Token: ERC-1400**

| Chuẩn | Lý do không chọn |
| ----- | ----- |
| ERC-20 | Không có transfer restriction. Bất kỳ ví nào cũng nhận được. Không enforce whitelist hay accredited investor. Không tuân thủ cho security token. |
| ERC-3643 | Phức tạp hơn, ít implementation đã được kiểm toán, developer community nhỏ hơn tại Việt Nam. Không đáng đánh đổi rủi ro triển khai cho Phase 0-1. |
| ERC-1400 | Chuẩn trưởng thành, nhiều implementation đã kiểm toán (Polymath, Tokeny), transfer restriction module sẵn có, hỗ trợ partition (Senior/Mezzanine/Junior là partition riêng). |

### **11.3 Kiến trúc Smart Contract**

| Contract | Chức năng |
| ----- | ----- |
| `RevStreamToken.sol` | ERC-1400 token. Ba partition: SENIOR, MEZZANINE, JUNIOR. Transfer restriction qua whitelist registry. |
| `WhitelistRegistry.sol` | Quản lý địa chỉ ví nhà đầu tư được phép. Chỉ admin Dragon Capital thêm/xóa. |
| `WaterfallController.sol` | Nhận USDC từ settlement, thực thi phân phối: Senior → Mezzanine → Junior. |
| `InvoiceRegistry.sol` | On-chain record mỗi invoice: hash PDF (IPFS), giá trị, hash obligor, due date, trạng thái. |
| `PoolLedger.sol` | Theo dõi pool state: receivable outstanding, tranche balances, phân phối tích lũy. |

**Luồng settlement:**

1. Corporate thanh toán vào virtual account (tiền mặt)  
2. Ops team chuyển đổi sang USDC qua sàn đối tác (Phase 1 thủ công, Phase 2 tự động hóa)  
3. USDC gửi đến `WaterfallController.sol`  
4. Smart contract tự động thực thi waterfall  
5. Phân phối ghi on-chain, nhà đầu tư xem trên Polygonscan

**Lý do chọn Polygon:** Gas cost \<$0.01/giao dịch (so với $5-50 trên Ethereum mainnet), tương thích EVM, custodian tổ chức đã hỗ trợ (Fireblocks, Ledger Enterprise).

### **11.4 Kế hoạch Kiểm toán Bảo mật**

| Mốc | Phạm vi | Chi phí ước tính | Đơn vị |
| ----- | ----- | ----- | ----- |
| Trước launch Pool 1 (Q3 2026\) | 5 core contracts | $40,000-$60,000 | Quantstamp, CertiK, hoặc Trail of Bits |
| Sau thay đổi Phase 2 (Q2 2027\) | WaterfallController \+ contracts mới | $15,000-$25,000 | Đơn vị cũ |
| Secondary market (Q1 2029\) | Trading contracts mới | $30,000-$50,000 | TBD |

Smart contracts không deploy lên mainnet nếu chưa hoàn thành kiểm toán. Bug bounty ra mắt sau kiểm toán: $5,000-$50,000 theo severity.

### **11.5 Custody**

* Ví tổng Dragon Capital: Fireblocks enterprise (MPC, không có người nắm khóa duy nhất)  
* Admin operations: multisig 3-of-5  
* Token custodian: VPS hoặc SSI (theo yêu cầu regulatory)  
* Nhà đầu tư tổ chức: Fireblocks hoặc Ledger Enterprise  
* HNWI: MetaMask với hardware wallet recommendation

---

## **12\. Vận hành & Back-Office**

### **12.1 Thẩm định Tín dụng**

**Checklist Cấp Facility**

* \[ \] KYB hoàn tất (3 màn hình)  
* \[ \] Revenue Coverage Ratio ≥ 1.3x xác nhận  
* \[ \] Phân tích tài chính: xu hướng doanh thu 12 tháng, tập trung top 5 clients, nợ hiện tại  
* \[ \] Phê duyệt obligor: top 5 clients whitelist  
* \[ \] Đặt hạn mức và advance rate  
* \[ \] Ký thỏa thuận Assignment of Receivables  
* \[ \] Tạo virtual account tại ngân hàng đối tác  
* \[ \] Cấp quyền truy cập SME portal

**Tiêu chí Auto-Approve Invoice**

* Obligor trong danh sách trắng  
* Trong hạn mức còn lại  
* Không vi phạm concentration limit  
* Không có fraud signal (duplicate hash, giá trị bất thường)  
* Không có overdue invoice đang hoạt động  
* Không có monitoring alert đang kích hoạt

**Trigger Xét duyệt Thủ công**

* Obligor mới chưa whitelist  
* Invoice \>25% tổng hạn mức  
* Có monitoring alert đang hoạt động trên tài khoản SME  
* Lần drawdown đầu tiên của SME

### **12.2 Đối soát**

* Hàng ngày: virtual account inflows vs. expected repayments  
* Hàng tuần: pool outstanding vs. token-level accounting  
* Hàng tháng: investor distribution, fee accrual, P\&L theo tranche, reserve account balance  
* Hàng quý: full portfolio review, credit analyst note từng SME

### **12.3 Nhân sự theo giai đoạn**

| Năm | Headcount | Vai trò |
| ----- | ----- | ----- |
| 2026 | 4 | CEO, CTO, Head of Credit, Legal Lead |
| 2027 | 7 | \+2 BD, \+1 Risk Analyst |
| 2028 | 10 | \+1 Tech, \+1 Operations, \+1 BD |
| 2029 | 13 | \+2 BD, \+1 Compliance |
| 2030 | 16 | \+2 BD, \+1 Data Scientist |

---

## **13\. Khung quản trị rủi ro**

### **13.1 Rủi ro Tín dụng**

| Rủi ro | Xác suất | Tác động | Biện pháp |
| ----- | ----- | ----- | ----- |
| SME phá sản | Trung bình | Cao | Assignment of Receivables: Dragon Capital thu hồi thẳng từ corporate client |
| Corporate client không thanh toán | Thấp | Cao | Pre-approve chỉ obligor investment-grade. Pool cap 15%/obligor. |
| Gian lận invoice | Thấp | Cao | Hash deduplication, obligor acknowledgment ở Stage 3, audit sampling |
| Default cluster một sub-sector | Trung bình | Cao | Cross-sub-sector concentration limit 30%, dynamic rebalancing |
| HR outsourcing margin compression | Thấp | Trung bình | Cap HR \<10% pool, theo dõi margin hàng quý |

### **13.2 Rủi ro Vận hành**

| Rủi ro | Xác suất | Tác động | Biện pháp |
| ----- | ----- | ----- | ----- |
| Corporate onboarding chậm | Cao | Cao | Pre-sign 15 master agreements trước Pool 1\. Staged lock cho phép origination song song. |
| Lỗi định tuyến virtual account | Trung bình | Trung bình | Fallback thủ công ops, SLA 24h |
| Smart contract bug | Thấp | Cao | Kiểm toán pre-launch, bug bounty, emergency pause multisig |
| FX risk SMEs doanh thu USD | Trung bình | Trung bình | Hedge ở cấp pool, cost passthrough |
| Ngân hàng đối tác rút lui | Thấp | Cao | Thông báo hợp đồng tối thiểu 90 ngày, ngân hàng dự phòng xác định sẵn |

### **13.3 Rủi ro Pháp lý & Regulatory**

| Rủi ro | Xác suất | Tác động | Biện pháp |
| ----- | ----- | ----- | ----- |
| SBV Sandbox approval chậm | Trung bình | Cao | Pilot 2-3 SMEs 2026 dưới direct contractual structure (không token). Token chỉ cần từ Pool 1 (2027). |
| Token bị phân loại là chứng khoán | Trung bình | Cao | Token là contractual receivable rights, không phải equity. Legal opinion từ YKVN/Vilaf. Investor base là professional only đến 2029 (Luật Chứng khoán Điều 11). |
| Assignment of Receivables tranh chấp | Thấp | Cao | Ngôn ngữ chuẩn BLDS Điều 365-371. Legal opinion từ YKVN/Vilaf. |
| Token regulatory change | Thấp | Cao | Dual mechanism: mọi tranche có direct contractual structure backup bên cạnh token. |
| AML/KYC enforcement | Thấp | Cao | KYB đầy đủ SME, KYB cơ bản corporate client, transaction monitoring |

### **13.4 Stress Test Cấp Pool**

**Kịch bản cơ sở \- Pool 1 (2027)**

* 15 SMEs, $4M pool  
* Expected loss rate: 1.0-2.0%/năm (loss given default 30-40%)  
* Senior được bảo vệ hoàn toàn cho đến khi loss rate đạt 18-20%

**Kịch bản stress \- Suy thoái nghiêm trọng**

* Loss rate 10%  
* Junior (15%) \+ Reserve (3%) gánh đầu tiên: hấp thụ \~18% pool loss  
* Senior an toàn hoàn toàn  
* Mezzanine (20%) bắt đầu bị ảnh hưởng nếu loss vượt 18%

---

## **14\. Tuân thủ pháp lý**

### **14.1 Quy định áp dụng**

| Quy định | Liên quan | Trạng thái |
| ----- | ----- | ----- |
| Bộ luật Dân sự Điều 365-371 | Cơ sở pháp lý assignment receivables | Luật thương mại thông thường, không cần đăng ký |
| Luật Chứng khoán 2019 (sửa đổi) \- Điều 11 | Investor base professional only đến 2029 | Tuân thủ bằng cách giới hạn nhà đầu tư |
| Nghị định 155/2020 | Quy tắc giao dịch chứng khoán | Áp dụng nếu token bị phân loại |
| SBV Decree 94/2025 \- Fintech Sandbox | Nộp Q2 2026, expect approval Q4 2026 | Đang chuẩn bị hồ sơ |
| Luật Công nghiệp Công nghệ số 2025 | Hỗ trợ digital asset framework | Tham chiếu trong sandbox application |
| Luật AML (2022) | Nghĩa vụ KYC/KYB | Platform thực hiện theo hướng dẫn NHNN |
| Luật An ninh mạng (2018) | Lưu trữ dữ liệu trong nước | AWS khu vực Việt Nam bắt buộc |
| Luật Các TCTD | Cấm cho vay đối với phi ngân hàng | Cấu trúc factoring tránh được |
| Nghị định 13/2023 (BVDLCN) | Bảo vệ dữ liệu cá nhân | Tuân thủ đầy đủ |

**Các mốc pháp lý quan trọng:**

| Quý | Milestone |
| ----- | ----- |
| Q1 2026 | Legal opinion hoàn tất (YKVN hoặc Vilaf), draft sandbox application |
| Q2 2026 | Nộp sandbox application SBV theo Decree 94/2025 |
| Q3 2026 | Pilot 2-3 SMEs dưới direct contractual structure, không cần token |
| Q4 2026 | Sandbox approval, custodian agreement (VPS hoặc SSI) ký kết |
| Q1 2027 | Pool 1 launch với token issuance |

### **14.2 KYC/AML**

**KYB SME**

* Doanh nghiệp: đăng ký, thuế, khai báo beneficial owner  
* Founder: CCCD, liveness check, PEP/sanctions screening  
* Liên tục: transaction monitoring, làm mới hàng năm

**KYB Corporate Client (Cơ bản)**

* Xác minh mã số thuế, kiểm tra tên giám đốc với PEP/sanctions  
* Không thẩm định đầy đủ (họ là obligor, không phải khách hàng)

**KYC Nhà đầu tư**

* KYC đầy đủ AML, xác minh accredited investor cho Mezzanine/Junior  
* Làm mới hàng năm, monitoring giao dịch USDC

### **14.3 Bảo mật Dữ liệu**

* Dữ liệu tài chính: mã hóa at rest, ghi log truy cập, xóa sau facility termination \+ 5 năm  
* Dữ liệu corporate client: giới hạn ở mức cần thiết cho định tuyến thanh toán  
* Không bán dữ liệu cho bên thứ ba  
* Tuân thủ Nghị định 13/2023

---

## **15\. Lộ trình theo giai đoạn 2026-2030**

### **Phase 0: Xây nền (2026) \- Ngân sách $280K legal \+ $520K tech**

**Mục tiêu:** Hoàn thiện pháp lý, build platform, pre-sign corporate agreements, pilot 2-3 SMEs không dùng token để validate operational model.

| Quý | Deliverables |
| ----- | ----- |
| Q1 2026 | Legal opinion hoàn tất, SPV thành lập, draft sandbox application, ký ngân hàng đối tác |
| Q2 2026 | Nộp sandbox SBV. Platform MVP: SME portal (onboarding \+ dashboard \+ invoice submission) \+ back-office |
| Q3 2026 | Pre-sign master vendor agreements với 15 target corporate clients (FPT, VNG, Masan, Techcombank...). Pilot 2-3 SMEs dưới direct contractual structure. Smart contracts kiểm toán xong. |
| Q4 2026 | Sandbox approval. Custodian (VPS/SSI) ký kết. Chuẩn bị Pool 1 launch. |

**0 pool active trong 2026\.** Đây là giai đoạn foundation, không phải triển khai.

### **Phase 1: Pilot Pool (2027) \- Pool size $4M**

**Mục tiêu:** Chứng minh unit economics với Pool 1, 15 SMEs.

| Quý | Deliverables |
| ----- | ----- |
| Q1 2027 | Pool 1 launch. Token issuance. Senior tranche raise xong. 5 SMEs onboard đầu tiên. |
| Q2 2027 | 10 SMEs active. Investor portal live (Senior only). Rule-based monitoring chạy đầy đủ. |
| Q3 2027 | Pool 1 có 6 tháng track record. Mở Mezzanine cho HNWI. Facility bằng VND bổ sung. |
| Q4 2027 | 15 SMEs active, $4M pool deployed đầy đủ. Báo cáo pool 12 tháng. |

**Tiêu chí thành công Phase 1:** Default rate \<5%, Senior yield delivered 100%, platform net profit \+$50K, ít nhất 5-8 institutional investors Senior committed.

### **Phase 2: Mở rộng (2028) \- 3 pools, $13.5M**

| Timeline | Deliverable |
| ----- | ----- |
| Q1 2028 | Pool 2 launch ($5.5M, 18 SMEs). Corporate client portal live. |
| Q2 2028 | Cohort default modeling v1. Semi-supervised scoring chạy trên pool 1+2 data. |
| Q3 2028 | Pool 3 launch. Mở rộng sub-sector (legal sector). |
| Q4 2028 | 3 pools active, $13.5M tổng facility, \~50 SMEs cumulative. |

### **Phase 3: Thanh khoản & Mở rộng (2029) \- 6 pools**

| Timeline | Deliverable |
| ----- | ----- |
| Q1 2029 | Secondary market Mezzanine token (on-chain). |
| Q2 2029 | API tích hợp ERP (SAP, MISA) cho corporate clients. Retail access qua DCDS mutual fund wrapper. |
| Q3 2029 | Pool 4-6 launch. ML predictive model v1 (nếu đủ điều kiện data). |
| Q4 2029 | 6 pools active, $35M tổng facility. |

### **Phase 4: Trưởng thành (2030) \- 10 pools, $50M**

* 10 pools active, $50M facility, 80-100 SMEs cumulative  
* Chuẩn bị mở rộng sang sector mới: FMCG distributor, specialty agriculture  
* Vận hành tự duy trì, không cần thêm capital injection

### **Phân bổ Ngân sách $2M**

| Hạng mục | Số tiền | % | Giai đoạn chủ yếu |
| ----- | ----- | ----- | ----- |
| Legal & Regulatory | $280,000 | 14% | 2026 |
| Phát triển platform | $520,000 | 26% | 2026-2027 |
| Smart contract & Blockchain | $180,000 | 9% | 2026-2027 |
| Nhân sự (ramp đến 16 FTE năm 2030\) | $720,000 | 36% | 2026-2030 |
| Marketing & BD | $180,000 | 9% | 2026-2030 |
| Compliance & Audit | $80,000 | 4% | 2027-2030 |
| Dự phòng & Contingency | $40,000 | 2% | Toàn bộ |

---

## **16\. Dự báo tài chính**

### **16.1 P\&L Projection 2026-2030**

| Năm | Pools active | Cum facility ($M) | Revenue ($K) | Opex ($K) | Net ($K) | Cumulative net ($K) |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| 2026 | 0 (pilot) | 0.5 | 20 | 140 | \-120 | \-120 |
| 2027 | 1 | 4.0 | 230 | 180 | \+50 | \-70 |
| 2028 | 3 | 13.5 | 640 | 250 | \+390 | \+320 |
| 2029 | 6 | 28.0 | 1,400 | 380 | \+1,020 | \+1,340 |
| 2030 | 10 | 50.0 | 2,600 | 520 | \+2,080 | \+3,420 |

Break-even annual: giữa 2027\. Break-even cumulative: Q2 2028\. ROI 5 năm: 71%. IRR ước tính: 28-32%.

### **16.2 Revenue Breakdown 2030**

| Nguồn | $K | % |
| ----- | ----- | ----- |
| Origination fees | 750 | 29% |
| Facility commitment fees | 600 | 23% |
| Servicing fees | 500 | 19% |
| Net interest spread | 580 | 22% |
| Performance fees | 120 | 5% |
| Secondary market fees | 50 | 2% |

### **16.3 Unit Economics Pool 1 (2027)**

| Chỉ số | Giá trị |
| ----- | ----- |
| Pool size | $4M |
| Senior IRR delivered | 9.5% |
| Mezzanine IRR | 14% |
| Junior IRR target | 20% |
| Platform revenue năm 1 | $230K |
| Khả năng hấp thụ tổn thất trước khi Senior bị ảnh hưởng | 18-20% |
| Expected default rate | 3-5% |
| Loss given default | 30-40% |
| Expected loss | 1.0-2.0% pool |

---

## **17\. Chỉ số đo lường thành công**

### **Chỉ số Tài chính theo năm**

| Metric | 2027 | 2028 | 2030 |
| ----- | ----- | ----- | ----- |
| Pools active | 1 | 3 | 10 |
| Total facility deployed | $4M | $13.5M | $50M |
| SMEs served (cumulative) | 15 | 50 | 180 |
| Default rate | \<5% | \<4% | \<3% |
| Senior tranche fulfillment | 100% | 100% | 100% |
| Senior IRR delivered | 9.5% | 9.5-10% | 10-11% |
| Average SME APR | 18-20% | 17-19% | 15-17% |
| Platform net profit | \+$50K | \+$390K | \+$2.08M |
| Institutional investors (Senior) | 5-8 | 10-15 | 15-20 |
| Corporate clients onboarded | 15 | 35 | 80 |

### **Chỉ số Sản phẩm**

| Metric | Mục tiêu |
| ----- | ----- |
| SLA duyệt invoice (tự động) | \<2 tiếng, P95 |
| SLA duyệt invoice (thủ công) | \<24 tiếng, P95 |
| Giải ngân sau duyệt | Trong ngày làm việc |
| NPS SME portal | \>50 |
| Tỷ lệ thành công định tuyến thanh toán | \>98% |
| False positive rate monitoring alert | \<20% (năm 1-2) |
| KYB completion rate | \>60% |
| Tỷ lệ gia hạn facility tại mốc 24 tháng | \>70% |

### **Chỉ số Platform**

| Metric | Mục tiêu |
| ----- | ----- |
| Uptime SME portal | 99.5% |
| Smart contract waterfall execution success | 100% |
| Báo cáo tháng cho nhà đầu tư | Đúng hạn 100% |

---

## **18\. Câu hỏi mở & Quyết định cần chốt**

Các mục dưới cần người phụ trách và deadline cụ thể trước khi nộp bài.

| \# | Câu hỏi | Deadline | Owner |
| ----- | ----- | ----- | ----- |
| 1 | Ngân hàng đối tác virtual account: Techcombank vs. VPBank vs. BIDV? | Q1 2026 | Ops Lead |
| 2 | SPV: một SPV cho tất cả pool hay riêng từng pool? | Q1 2026 | Legal |
| 3 | Sandbox SBV: nộp theo Decree 94/2025 hay vận hành trong khung hiện tại và token sau? | Q1 2026 | Legal \+ Dragon Capital |
| 4 | Bắt đầu với USD hay VND? USD đơn giản hóa blockchain settlement, VND mở rộng SME access. | Trước Pool 1 | Product Lead |
| 5 | Firm kiểm toán smart contract: Quantstamp, CertiK, Trail of Bits, hay đơn vị Việt Nam? | Q2 2026 trước launch | Tech Lead |
| 6 | Corporate portal: build trong Phase 1 (2027) hay dùng email/PDF đến Phase 2? Đã chốt Phase 1 \- cần xác nhận scope chi tiết. | Q1 2027 | Product Lead |
| 7 | USDC conversion: ai chịu FX risk giữa fiat collection và USDC cho settlement? | Trước Pool 1 | Finance |
| 8 | Investor portal: tự build hay white-label (Tokeny, Securitize)? | Q3 2026 | Tech Lead |
| 9 | FX hedging cho 40% pool USD-revenue SMEs: hedge ở cấp pool hay passthrough SME? | Trước Pool 1 | Finance \+ Credit |
| 10 | Figma prototype: bao nhiêu màn hình, flow nào ưu tiên cho 10 phút demo? | Chuẩn bị thi | Product Lead |

---

*Phiên bản 2.0 \- Cập nhật từ tài liệu chiến lược Final Strategic Document.* *Trạng thái: Bản nháp để xem xét nội bộ. Không phân phối ra bên ngoài.* *Lần xem xét tiếp theo: Trước khi nộp bài Xplorators Round 02\.*

