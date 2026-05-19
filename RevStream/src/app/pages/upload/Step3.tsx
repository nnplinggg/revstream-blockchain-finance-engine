import { useNavigate } from "react-router";
import { Copy, FileText, CheckCircle2, Building, Calendar, DollarSign, Receipt } from "lucide-react";

export function Step3() {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-[1440px] mx-auto h-full flex gap-10">
      
      {/* Left panel 55% */}
      <div className="w-[55%] flex flex-col">
        <h2 className="text-forest-900 font-semibold text-2xl mb-8">Cấu hình ứng trước</h2>
        
        <div className="bg-white rounded-[24px] shadow-sm border border-border-subtle p-8 mb-6">
          <div className="flex flex-col items-center mb-8">
            <label className="text-forest-900 font-bold mb-2">Tỷ lệ ứng trước</label>
            <div className="text-forest-500 font-sans text-5xl font-extrabold mb-6">80%</div>
            
            {/* Custom Slider Mockup */}
            <div className="w-full flex items-center gap-4">
              <span className="text-text-muted font-bold text-sm">50%</span>
              <div className="flex-1 relative h-2 bg-border-subtle rounded-full">
                <div className="absolute top-0 left-0 h-full bg-forest-500 rounded-full" style={{ width: '75%' }} />
                <div className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-forest-500 rounded-full shadow cursor-grab" />
              </div>
              <span className="text-text-muted font-bold text-sm">90%</span>
            </div>
          </div>

          {/* Live calculation card */}
          <div className="bg-bg-subtle rounded-[16px] p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-text-muted font-medium text-sm">Giá trị invoice</span>
                <span className="font-mono text-forest-900 font-semibold">$28,500</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted font-medium text-sm">Tỷ lệ ứng trước</span>
                <span className="font-mono text-forest-900 font-semibold">80%</span>
              </div>
              
              <div className="h-px bg-border-subtle my-2" />
              
              <div className="flex justify-between items-center">
                <span className="text-forest-900 font-bold text-sm">Số tiền ứng trước</span>
                <span className="font-mono text-forest-900 font-bold">$22,800</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted font-medium text-sm">Phí chiết khấu (2.1%)</span>
                <span className="font-mono text-warning font-semibold">- $479</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted font-medium text-sm">Phí cam kết tháng này</span>
                <span className="font-mono text-warning font-semibold">- $33</span>
              </div>

              <div className="h-px bg-border-subtle my-2" />

              <div className="flex justify-between items-center">
                <span className="text-forest-900 font-bold text-base">Thực nhận</span>
                <span className="font-mono text-forest-500 text-[20px] font-bold">$22,288</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted font-medium text-sm">Ngày đáo hạn</span>
                <span className="font-mono text-forest-900 font-semibold">14/06/2024</span>
              </div>
            </div>
          </div>
          
          <p className="text-text-muted text-xs font-medium text-center mt-4">
            Phí được khấu trừ trực tiếp khi giải ngân
          </p>
        </div>
      </div>

      {/* Right panel 45% */}
      <div className="w-[45%] flex flex-col pt-14">
        <div className="flex flex-col h-full">
          <h3 className="text-forest-900 text-xl font-semibold mb-6">Tóm tắt khoản tài trợ</h3>
          
          <div className="bg-white rounded-[24px] shadow-sm border border-border-subtle p-6 mb-6">
            <div className="flex flex-col gap-4">
              {[
                { label: "Mã Invoice", value: "INV-2024-092", icon: FileText, mono: true },
                { label: "Doanh nghiệp", value: "VNG Corporation", icon: Building },
                { label: "Đáo hạn", value: "14/06/2024", icon: Calendar, mono: true },
                { label: "Giá trị", value: "$28,500.00", icon: DollarSign, mono: true },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-border-subtle last:border-0 last:pb-0">
                  <div className="flex items-center gap-2 text-text-muted text-sm font-medium">
                    <item.icon className="w-4 h-4" /> {item.label}
                  </div>
                  <div className={`text-forest-900 font-semibold text-sm ${item.mono ? 'font-mono' : ''}`}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-forest-50 rounded-[16px] p-6 border border-forest-400/20 mb-8">
            <h4 className="text-forest-900 font-bold mb-3 flex items-center gap-2">
              <Receipt className="w-5 h-5 text-forest-500" />
              Tài khoản thanh toán ảo
            </h4>
            <p className="text-forest-900 text-sm mb-4 leading-relaxed">
              Yêu cầu <strong className="font-bold">VNG Corporation</strong> thanh toán invoice <strong className="font-mono">INV-2024-092</strong> vào:
            </p>
            
            <div className="bg-white rounded-xl p-4 border border-border-subtle mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-text-muted text-xs uppercase font-bold tracking-wider">Ngân hàng</span>
                <span className="text-forest-900 font-bold text-sm">Techcombank</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted text-xs uppercase font-bold tracking-wider">Số tài khoản</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-forest-500 font-bold text-lg">1902 4521 8834</span>
                  <button className="p-1.5 hover:bg-forest-50 rounded text-forest-500 transition-colors">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            <p className="text-text-muted text-xs flex items-start gap-1.5">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-forest-400" />
              Mỗi invoice có tài khoản ảo riêng để định tuyến tự động
            </p>
          </div>

          <div className="mt-auto">
            <button 
              onClick={() => navigate("/upload/step-4")}
              className="w-full bg-forest-500 hover:bg-forest-500/90 text-white py-4 rounded-xl font-bold text-base transition-colors shadow-sm"
            >
              Xác nhận và gửi yêu cầu
            </button>
          </div>

        </div>
      </div>
      
    </div>
  );
}
