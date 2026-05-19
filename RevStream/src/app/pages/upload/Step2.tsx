import { useNavigate } from "react-router";
import { FileText, CheckCircle2, Edit2, CheckCircle, ShieldCheck } from "lucide-react";

export function Step2() {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-[1440px] mx-auto h-full flex gap-10">
      
      {/* Left panel 55% */}
      <div className="w-[55%] flex flex-col">
        <h2 className="text-forest-900 font-semibold text-2xl mb-6">Xác minh thông tin</h2>
        
        <div className="bg-white border border-border-subtle rounded-[24px] shadow-sm p-6 flex flex-col h-[480px]">
          {/* PDF Preview Mock */}
          <div className="flex-1 bg-bg-subtle border border-border-subtle rounded-xl flex items-center justify-center relative overflow-hidden mb-4 group cursor-pointer">
            <div className="w-[60%] h-[80%] bg-white shadow-sm border border-border-subtle rounded flex flex-col p-4 relative">
              {/* Fake PDF Content */}
              <div className="w-1/3 h-4 bg-border-subtle rounded mb-6" />
              <div className="w-full h-px bg-border-subtle mb-4" />
              <div className="space-y-2 mb-6">
                <div className="w-1/2 h-2.5 bg-border-subtle rounded" />
                <div className="w-2/3 h-2.5 bg-border-subtle rounded" />
              </div>
              <div className="mt-auto flex justify-between">
                <div className="w-1/4 h-3 bg-border-subtle rounded" />
                <div className="w-1/4 h-3 bg-forest-500/30 rounded" />
              </div>
              
              {/* Shimmer effect overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-forest-500/10 to-transparent animate-pulse" />
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-subtle">
            <div className="flex items-center gap-3">
              <div className="bg-forest-50 p-2 rounded-lg text-forest-500">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <p className="text-forest-900 font-semibold text-sm">INV-2024-092.pdf</p>
                <p className="text-text-muted text-xs">234 KB · Đã tải lên lúc 14:32</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-forest-500 text-sm font-semibold">
              <CheckCircle className="w-4 h-4" /> Đã quét xong
            </div>
          </div>
        </div>
      </div>

      {/* Right panel 45% */}
      <div className="w-[45%] flex flex-col pt-14">
        <div className="bg-white rounded-[24px] shadow-sm border border-border-subtle flex flex-col h-full overflow-hidden">
          
          <div className="p-6 border-b border-border-subtle flex justify-between items-center bg-forest-50/50">
            <h3 className="text-forest-900 text-lg font-semibold">Thông tin trích xuất</h3>
            <span className="bg-forest-50 text-forest-500 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-forest-500/20">
              <CheckCircle2 className="w-4 h-4" /> Trích xuất thành công
            </span>
          </div>

          <div className="p-6 flex-1 flex flex-col gap-5 overflow-y-auto">
            {/* Form Fields */}
            {[
              { label: "Số invoice", value: "INV-2024-092", isMono: true },
              { label: "Doanh nghiệp", value: "VNG Corporation", isMono: false },
              { label: "Ngày phát hành", value: "15/05/2024", isMono: true },
              { label: "Ngày đáo hạn", value: "14/06/2024", isMono: true },
              { label: "Giá trị invoice", value: "$28,500.00", isMono: true, highlight: true },
            ].map((field, i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-text-muted uppercase tracking-wider">{field.label}</label>
                <div className="flex items-center justify-between border border-border-subtle rounded-xl p-3 bg-bg-subtle/50 group hover:border-forest-400 transition-colors">
                  <span className={`text-forest-900 ${field.isMono ? 'font-mono' : 'font-sans'} ${field.highlight ? 'text-lg font-bold' : 'font-medium'}`}>
                    {field.value}
                  </span>
                  <button className="text-border-subtle group-hover:text-forest-500 transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            {/* Obligor status row */}
            <div className="mt-4 bg-forest-50 border border-forest-400/20 rounded-xl p-4 flex gap-4 items-start">
              <ShieldCheck className="w-6 h-6 text-forest-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-forest-900 font-bold text-sm mb-1">VNG Corporation — Đã được phê duyệt</p>
                <p className="text-forest-500 text-xs font-medium">Obligor được xác minh · Tier A · Lịch sử thanh toán: Đúng hạn</p>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-border-subtle bg-bg-subtle/50">
            <button 
              onClick={() => navigate("/upload/step-3")}
              className="w-full bg-forest-500 hover:bg-forest-500/90 text-white py-3.5 rounded-xl font-bold text-sm transition-colors shadow-sm"
            >
              Tiếp tục cấu hình
            </button>
          </div>

        </div>
      </div>
      
    </div>
  );
}
