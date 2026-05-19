import { Link } from "react-router";
import { ArrowRight, Search, Filter, AlertCircle, FileText, Download, FileUp } from "lucide-react";
import { clsx } from "clsx";

export function Dashboard() {
  return (
    <div className="p-8 flex gap-8 items-start">
      <div className="flex-1 flex flex-col gap-8 min-w-0">
        
        {/* ROW 1: FACILITY OVERVIEW CARD */}
        <section className="bg-white rounded-[24px] shadow-sm p-8 flex border border-border-subtle">
          <div className="w-[60%] flex flex-col justify-between pr-8 border-r border-border-subtle">
            <div>
              <p className="text-text-muted text-xs font-bold uppercase tracking-wider mb-2">Hạn mức Revolving</p>
              <h2 className="text-forest-900 font-sans text-5xl font-extrabold mb-8">$267,000</h2>
            </div>
            
            <div className="flex gap-8">
              <div>
                <p className="text-text-muted text-sm mb-1">Đã sử dụng</p>
                <p className="font-mono text-[22px] font-semibold text-forest-900">$145,200</p>
              </div>
              <div>
                <p className="text-text-muted text-sm mb-1">Khả dụng</p>
                <p className="font-mono text-[22px] font-semibold text-forest-500">$121,800</p>
              </div>
              <div>
                <p className="text-text-muted text-sm mb-1">Kỳ trả tiếp theo</p>
                <p className="font-mono text-[22px] font-semibold text-warning">$18,400 / 11 ngày</p>
              </div>
            </div>
          </div>
          
          <div className="w-[40%] flex flex-col items-center justify-center pl-8">
            <div className="relative w-[160px] h-[160px] flex items-center justify-center mb-4">
              {/* SVG Ring */}
              <svg className="w-full h-full transform -rotate-90 absolute top-0 left-0">
                <circle
                  cx="80" cy="80" r="74"
                  stroke="#E2E6E4" strokeWidth="12" fill="none"
                />
                <circle
                  cx="80" cy="80" r="74"
                  stroke="#2EBA68" strokeWidth="12" fill="none"
                  strokeDasharray="465"
                  strokeDashoffset={465 - (465 * 0.54)}
                  strokeLinecap="round"
                />
              </svg>
              <div className="text-center z-10 flex flex-col items-center">
                <span className="font-sans text-4xl font-extrabold text-forest-900">54%</span>
                <span className="text-text-muted text-xs font-medium">Đã sử dụng</span>
              </div>
            </div>
            <p className="text-text-muted text-sm font-medium">Còn $121,800 khả dụng</p>
          </div>
        </section>

        {/* ROW 2: THREE CARDS IN GRID */}
        <section className="grid grid-cols-3 gap-6">
          {/* CARD A */}
          <div className="bg-white rounded-[24px] shadow-sm p-6 border border-border-subtle flex flex-col h-[320px]">
            <h3 className="text-forest-900 font-semibold text-lg mb-6">Kỳ hoàn trả sắp tới</h3>
            <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
              {[
                { date: "23/05", amount: "$19,000", company: "Masan Group", status: "KHẨN CẤP", color: "warning" },
                { date: "30/05", amount: "$32,000", company: "Techcombank Corp", status: "Đang hoạt động", color: "active" },
                { date: "07/06", amount: "$28,500", company: "VNG Corporation", status: "Sắp tới", color: "upcoming" },
                { date: "14/06", amount: "$41,200", company: "FPT Software", status: "Sắp tới", color: "upcoming" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-forest-900 font-medium text-sm w-[42px]">{item.date}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-border-subtle" />
                    <div>
                      <p className="text-sm font-semibold text-forest-900 font-mono">{item.amount}</p>
                      <p className="text-xs text-text-muted">{item.company}</p>
                    </div>
                  </div>
                  {item.status === "KHẨN CẤP" && (
                    <span className="bg-warning/10 text-warning text-[10px] font-bold px-2 py-1 rounded-md uppercase">
                      Khẩn cấp
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="pt-4 mt-auto border-t border-border-subtle">
              <p className="text-sm font-medium text-forest-900">Tổng: $120,700 trong 30 ngày</p>
            </div>
          </div>

          {/* CARD B */}
          <div className="bg-white rounded-[24px] shadow-sm p-6 border border-border-subtle flex flex-col h-[320px] relative">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-forest-900 font-semibold text-lg">Sức khỏe doanh thu</h3>
              <span className="bg-forest-50 text-forest-500 text-[11px] font-bold px-2.5 py-1 rounded-md">
                Tốt
              </span>
            </div>
            
            <div className="flex-1 flex items-end gap-2 pb-4 pt-2">
              {/* Mock area chart with CSS */}
              <div className="w-full h-full relative flex items-end justify-between px-2">
                {/* SVG mock area */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,100 L0,70 L20,60 L40,65 L60,40 L80,30 L100,20 L100,100 Z" fill="#F0F8F4" />
                  <path d="M0,70 L20,60 L40,65 L60,40 L80,30 L100,20" fill="none" stroke="#2EBA68" strokeWidth="2" />
                  <path d="M0,80 L20,75 L40,78 L60,60 L80,55 L100,45" fill="none" stroke="#899991" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
                {["T12", "T1", "T2", "T3", "T4", "T5"].map((label, i) => (
                  <div key={i} className="text-[10px] text-text-muted font-medium z-10 translate-y-6">
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-6">
              <p className="text-sm font-medium text-forest-900 mb-1">Doanh thu cao hơn baseline 3 tháng liên tiếp</p>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-forest-500" />
                <p className="text-xs text-text-muted">Giám sát Tín dụng Liên tục · Đang hoạt động</p>
              </div>
            </div>
          </div>

          {/* CARD C */}
          <div className="bg-white rounded-[24px] shadow-sm p-6 border border-border-subtle flex flex-col h-[320px]">
            <h3 className="text-forest-900 font-semibold text-lg mb-2">Invoice đang tài trợ</h3>
            <div className="flex-1 flex flex-col items-center justify-center py-4">
              <span className="font-sans text-[64px] leading-none font-extrabold text-forest-900 mb-2">5</span>
              <span className="text-forest-400 font-medium text-sm">invoice đang hoạt động</span>
            </div>
            <div className="bg-bg-subtle rounded-xl p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-text-muted text-xs">Tổng tài trợ</span>
                <span className="font-mono text-forest-900 font-semibold text-sm">$145,200</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted text-xs">Trung bình còn lại</span>
                <span className="text-forest-900 font-medium text-sm">22 ngày</span>
              </div>
            </div>
            <Link to="/funding" className="text-forest-500 text-sm font-bold flex items-center justify-center gap-1 hover:opacity-80 mt-auto">
              Xem tất cả <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ROW 3: INVOICE TABLE */}
        <section className="bg-white rounded-[24px] shadow-sm border border-border-subtle overflow-hidden">
          <div className="p-6 border-b border-border-subtle flex justify-between items-center">
            <h2 className="text-forest-900 font-semibold text-xl">Invoice đang hoạt động</h2>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Tìm kiếm..." 
                  className="pl-9 pr-4 py-2 bg-bg-subtle border border-border-subtle rounded-lg text-sm focus:outline-none focus:border-forest-400"
                />
              </div>
              <button className="flex items-center justify-center w-9 h-9 border border-border-subtle rounded-lg text-text-muted hover:bg-bg-subtle">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-bg-subtle text-text-muted text-xs uppercase tracking-wider font-semibold border-b border-border-subtle">
                <th className="px-6 py-4">Mã Invoice</th>
                <th className="px-6 py-4">Khách hàng</th>
                <th className="px-6 py-4 text-right">Giá trị</th>
                <th className="px-6 py-4 text-right">Đã ứng</th>
                <th className="px-6 py-4 text-center">Đáo hạn</th>
                <th className="px-6 py-4">Còn lại</th>
                <th className="px-6 py-4">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium">
              {[
                { id: "INV-2024-085", client: "Masan Group", val: "$19,000", adv: "$15,200", date: "23/05/2024", left: "3 ngày", status: "KHẨN CẤP" },
                { id: "INV-2024-089", client: "Techcombank Corp", val: "$32,000", adv: "$25,600", date: "30/05/2024", left: "10 ngày", status: "Đang hoạt động" },
                { id: "INV-2024-091", client: "VNG Corporation", val: "$28,500", adv: "$22,800", date: "07/06/2024", left: "18 ngày", status: "Đang hoạt động" },
                { id: "INV-2024-087", client: "FPT Software", val: "$41,200", adv: "$32,960", date: "14/06/2024", left: "25 ngày", status: "Đang hoạt động" },
                { id: "INV-2024-083", client: "Vingroup Digital", val: "$24,500", adv: "$19,600", date: "21/06/2024", left: "32 ngày", status: "Đang hoạt động" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-border-subtle hover:bg-forest-50/50 transition-colors">
                  <td className="px-6 py-4 text-forest-900 font-mono">{row.id}</td>
                  <td className="px-6 py-4 text-forest-900">{row.client}</td>
                  <td className="px-6 py-4 text-right font-mono text-forest-900">{row.val}</td>
                  <td className="px-6 py-4 text-right font-mono text-forest-500">{row.adv}</td>
                  <td className="px-6 py-4 text-center text-text-muted">{row.date}</td>
                  <td className={clsx("px-6 py-4", row.status === "KHẨN CẤP" ? "text-warning font-bold" : "text-text-muted")}>{row.left}</td>
                  <td className="px-6 py-4">
                    {row.status === "KHẨN CẤP" ? (
                      <span className="bg-warning/10 text-warning text-xs font-bold px-2.5 py-1.5 rounded-md flex items-center gap-1.5 w-max">
                        <AlertCircle className="w-3.5 h-3.5" /> KHẨN CẤP
                      </span>
                    ) : (
                      <span className="bg-forest-50 text-forest-500 text-xs font-bold px-2.5 py-1.5 rounded-md flex items-center gap-1.5 w-max">
                        Đang hoạt động
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 flex justify-between items-center text-sm text-text-muted">
            <span>Hiển thị 5/5 invoice</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-border-subtle rounded disabled:opacity-50">Trước</button>
              <button className="px-3 py-1 border border-border-subtle rounded disabled:opacity-50">Sau</button>
            </div>
          </div>
        </section>
      </div>

      {/* FLOATING RIGHT PANEL */}
      <aside className="w-[240px] flex-shrink-0 flex flex-col gap-6">
        <div>
          <h3 className="text-forest-900 font-semibold mb-4 text-sm uppercase tracking-wider">Thao tác nhanh</h3>
          <div className="flex flex-col gap-3">
            <Link to="/upload" className="w-full bg-forest-500 hover:bg-forest-500/90 text-white py-3 rounded-xl text-sm font-semibold flex justify-center items-center gap-2 transition-colors">
              <FileUp className="w-4 h-4" /> Nộp Invoice Mới
            </Link>
            <button className="w-full bg-white hover:bg-gray-50 border border-border-subtle text-forest-900 py-3 rounded-xl text-sm font-semibold flex justify-center items-center gap-2 transition-colors">
              <Download className="w-4 h-4" /> Tải sao kê
            </button>
            <button className="w-full text-text-muted hover:text-forest-900 py-2 rounded-xl text-sm font-semibold flex justify-center items-center gap-2 transition-colors">
              <FileText className="w-4 h-4" /> Xem điều khoản
            </button>
          </div>
        </div>

        <div className="bg-white p-4 rounded-[20px] shadow-sm border border-border-subtle relative">
          <div className="absolute -top-2 -right-2 bg-warning text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-bg-subtle">
            1
          </div>
          <h4 className="text-forest-900 font-semibold mb-1">Cần xử lý</h4>
          <p className="text-text-muted text-xs mb-3">Masan Group (INV-2024-085)</p>
          <div className="flex justify-between items-center mt-2">
            <span className="font-mono text-warning text-sm font-semibold">$19,000</span>
            <span className="text-xs text-warning font-bold bg-warning/10 px-2 py-0.5 rounded">Trễ hạn</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
