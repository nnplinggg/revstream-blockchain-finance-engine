import { useNavigate } from "react-router";
import { Check, Copy, RefreshCw, Circle, CheckCircle2 } from "lucide-react";
import { clsx } from "clsx";

export function Step4() {
  const navigate = useNavigate();

  return (
    <div className="p-8 w-full h-full flex items-center justify-center bg-bg-subtle pb-20">
      
      <div className="bg-white rounded-[24px] shadow-sm border border-border-subtle w-full max-w-[480px] p-8 flex flex-col items-center text-center">
        
        {/* Success Icon */}
        <div className="w-[80px] h-[80px] rounded-full bg-forest-500 flex items-center justify-center text-white mb-6 shadow-md relative">
          <Check className="w-10 h-10" strokeWidth={3} />
          <div className="absolute inset-0 rounded-full border-4 border-forest-500/30 scale-125 animate-ping" />
        </div>
        
        <h1 className="text-forest-900 font-bold text-2xl mb-1">Yêu cầu tài trợ đã được duyệt</h1>
        <p className="text-text-muted text-sm font-medium mb-8">Tự động duyệt · 14:34 hôm nay</p>
        
        <div className="mb-8">
          <div className="text-forest-900 font-sans text-[56px] leading-none font-extrabold mb-2">$22,288</div>
          <p className="text-text-muted text-base font-medium">đang được xử lý giải ngân</p>
        </div>

        {/* Progress Timeline */}
        <div className="w-full mb-8">
          <div className="flex justify-between items-center mb-4 relative px-2">
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-border-subtle -translate-y-1/2 z-0" />
            <div className="absolute top-1/2 left-4 w-1/2 h-0.5 bg-forest-500 -translate-y-1/2 z-0" />
            
            <div className="flex flex-col items-center gap-1.5 z-10 bg-white px-1">
              <CheckCircle2 className="w-5 h-5 text-forest-500 fill-forest-50" />
              <span className="text-[10px] font-bold text-forest-900 uppercase">Đã nộp</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 z-10 bg-white px-1">
              <CheckCircle2 className="w-5 h-5 text-forest-500 fill-forest-50" />
              <span className="text-[10px] font-bold text-forest-900 uppercase">Đã duyệt</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 z-10 bg-white px-1">
              <RefreshCw className="w-5 h-5 text-forest-500 animate-spin-slow" />
              <span className="text-[10px] font-bold text-forest-500 uppercase">Đang xử lý</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 z-10 bg-white px-1">
              <Circle className="w-5 h-5 text-border-subtle fill-white" />
              <span className="text-[10px] font-bold text-text-muted uppercase">Giải ngân</span>
            </div>
          </div>
          <div className="bg-forest-50 text-forest-500 text-xs font-bold py-2 px-4 rounded-lg inline-block">
            Dự kiến giải ngân trước 17:00 hôm nay
          </div>
        </div>

        {/* Invoice Reference Box */}
        <div className="w-full bg-bg-subtle rounded-xl p-5 mb-8 text-left border border-border-subtle">
          <div className="flex flex-wrap gap-2 text-sm text-forest-900 font-medium mb-3">
            <span className="font-mono font-bold">INV-2024-092</span>
            <span className="text-border-subtle">•</span>
            <span>VNG Corporation</span>
            <span className="text-border-subtle">•</span>
            <span className="font-mono font-bold">$28,500</span>
            <span className="text-border-subtle">•</span>
            <span className="text-text-muted">Đáo hạn 14/06/2024</span>
          </div>
          
          <div className="bg-white border border-border-subtle rounded-lg p-3 flex justify-between items-center mb-3">
            <div>
              <p className="text-[10px] text-text-muted uppercase font-bold tracking-wider mb-0.5">Tài khoản ảo</p>
              <p className="font-mono text-forest-500 font-bold">1902 4521 8834</p>
            </div>
            <button className="p-2 hover:bg-forest-50 rounded text-forest-500 transition-colors">
              <Copy className="w-4 h-4" />
            </button>
          </div>
          
          <p className="text-xs text-text-muted font-medium flex gap-1.5">
            <span className="text-forest-400 font-bold">ⓘ</span>
            Gửi thông tin này cho VNG Corporation để thanh toán đúng tài khoản
          </p>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex gap-3">
          <button 
            onClick={() => navigate("/")}
            className="flex-1 bg-white hover:bg-bg-subtle text-forest-900 border border-border-subtle py-3.5 rounded-xl font-bold text-sm transition-colors"
          >
            Về Tổng quan
          </button>
          <button 
            onClick={() => navigate("/upload")}
            className="flex-1 bg-forest-500 hover:bg-forest-500/90 text-white py-3.5 rounded-xl font-bold text-sm transition-colors shadow-sm"
          >
            Nộp Invoice Khác
          </button>
        </div>

      </div>
      
    </div>
  );
}
