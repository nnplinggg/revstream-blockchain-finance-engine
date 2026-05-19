import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, ReferenceArea } from "recharts";
import { clsx } from "clsx";

const data = [
  { month: "Tháng 12", actual: 89000, baseline: 95000 },
  { month: "Tháng 1", actual: 94000, baseline: 95000 },
  { month: "Tháng 2", actual: 91000, baseline: 95000 },
  { month: "Tháng 3", actual: 108000, baseline: 95000 },
  { month: "Tháng 4", actual: 115000, baseline: 95000 },
  { month: "Tháng 5", actual: 122000, baseline: 95000 },
];

export function RevenueHealth() {
  return (
    <div className="p-8 max-w-[1440px] mx-auto flex flex-col gap-6 font-sans">
      
      {/* TOP ROW — PAGE HEADER */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-forest-900 text-[32px] leading-tight font-bold mb-1">Sức khỏe doanh thu</h1>
          <p className="text-text-muted text-sm font-medium">Giám sát liên tục từ khi cấp facility · Cập nhật lúc 15:20 hôm nay</p>
        </div>
        <div className="bg-white border border-border-subtle rounded-lg p-1 flex gap-1 shadow-sm">
          {["3 tháng", "6 tháng", "12 tháng"].map(tab => (
            <button 
              key={tab}
              className={clsx(
                "px-4 py-1.5 rounded-md text-sm font-semibold transition-colors", 
                tab === "6 tháng" ? "bg-forest-500 text-white shadow" : "text-text-muted hover:bg-bg-subtle"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* STATUS BANNER */}
      <div className="bg-[#E3F3EA] border-l-[4px] border-l-forest-500 rounded-[16px] p-5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <CheckCircle2 className="w-8 h-8 text-forest-500 fill-white flex-shrink-0" />
          <div>
            <h3 className="text-forest-500 font-bold text-lg mb-0.5">Trạng thái: Tốt</h3>
            <p className="text-forest-900 font-medium text-sm">Doanh thu cao hơn baseline 3 tháng liên tiếp. Không có cảnh báo đang hoạt động.</p>
          </div>
        </div>
        <p className="text-forest-500/80 text-xs font-semibold uppercase tracking-wider">Lần cập nhật cuối: 3 giờ trước</p>
      </div>

      {/* MAIN CHART CARD */}
      <div className="bg-white rounded-[24px] shadow-sm border border-border-subtle p-8 h-[360px] flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-forest-900 font-bold text-xl">Xu hướng doanh thu vs. Baseline</h2>
          <div className="flex items-center gap-6 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-forest-500 rounded-sm" />
              <span className="text-forest-900">Thực tế</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 border-t-2 border-dashed border-text-muted" />
              <span className="text-text-muted">Baseline ($95K/tháng)</span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 gap-8 min-h-0">
          <div className="flex-1 h-full min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2EBA68" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2EBA68" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E6E4" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#899991', fontSize: 12, fontWeight: 500 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#899991', fontSize: 12, fontFamily: 'IBM Plex Mono' }}
                  tickFormatter={(val) => `$${val/1000}K`}
                />
                <Tooltip 
                  cursor={{ stroke: '#E2E6E4', strokeWidth: 2, strokeDasharray: '4 4' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      const diff = data.actual - data.baseline;
                      const diffPercent = ((diff / data.baseline) * 100).toFixed(1);
                      return (
                        <div className="bg-forest-900 text-white p-3 rounded-lg shadow-lg text-sm border border-forest-900">
                          <p className="font-bold mb-1">{data.month}</p>
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 bg-forest-500 rounded-sm" />
                            <span className="font-mono text-base font-bold">${data.actual.toLocaleString()}</span>
                          </div>
                          <p className={clsx(
                            "text-xs font-medium ml-4",
                            diff > 0 ? "text-forest-500" : "text-warning"
                          )}>
                            {diff > 0 ? "+" : ""}{diffPercent}% vs baseline
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                {/* Highlight specific months below baseline with an orange ReferenceArea */}
                <ReferenceArea x1="Tháng 12" x2="Tháng 2" y1={85000} y2={95000} fill="#FDF4E8" fillOpacity={0.6} />
                
                {/* Baseline */}
                <Area 
                  type="monotone" 
                  dataKey="baseline" 
                  stroke="#899991" 
                  strokeDasharray="4 4" 
                  strokeWidth={1.5}
                  fill="none" 
                  activeDot={false}
                />
                {/* Actual */}
                <Area 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#2EBA68" 
                  strokeWidth={2}
                  fill="url(#colorActual)" 
                  activeDot={{ r: 6, fill: '#2EBA68', stroke: '#fff', strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="w-[220px] flex flex-col justify-between border-l border-border-subtle pl-8 py-2">
            <div>
              <p className="text-text-muted text-xs font-bold uppercase tracking-wider mb-1">Tháng cao nhất</p>
              <p className="font-mono text-forest-900 text-[28px] font-bold leading-none">$122,000</p>
            </div>
            <div>
              <p className="text-text-muted text-xs font-bold uppercase tracking-wider mb-1">Tháng thấp nhất</p>
              <p className="font-mono text-forest-900 text-[28px] font-bold leading-none">$89,000</p>
            </div>
            <div>
              <p className="text-text-muted text-xs font-bold uppercase tracking-wider mb-1">Trung bình 6T</p>
              <p className="font-mono text-forest-900 text-[28px] font-bold leading-none">$103,200</p>
            </div>
            <div>
              <p className="text-text-muted text-xs font-bold uppercase tracking-wider mb-2">So với baseline</p>
              <span className="bg-forest-50 text-forest-500 font-bold text-sm px-3 py-1.5 rounded-md">
                +8.6%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW — 4 INDICATOR CARDS */}
      <div className="grid grid-cols-4 gap-6">
        
        {/* CARD 1 — TẬP TRUNG KHÁCH HÀNG */}
        <div className="bg-white rounded-[24px] shadow-sm border border-border-subtle p-6 flex flex-col h-[280px]">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-forest-900 font-semibold text-lg leading-tight w-[60%]">Tập trung khách hàng</h3>
            <span className="bg-[#FDF4E8] text-[#C89454] text-[10px] font-bold px-2 py-1 rounded-md text-center">
              Cần theo dõi
            </span>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-4">
            {[
              { name: "VNG Corporation", val: 38, color: "bg-warning" },
              { name: "Techcombank Corp", val: 27, color: "bg-forest-500" },
              { name: "FPT Software", val: 19, color: "bg-forest-500" },
            ].map(item => (
              <div key={item.name}>
                <div className="flex justify-between text-[11px] font-bold mb-1.5">
                  <span className="text-forest-900">{item.name}</span>
                  <span className={item.color === "bg-warning" ? "text-warning" : "text-forest-900"}>{item.val}%</span>
                </div>
                <div className="w-full bg-border-subtle h-1.5 rounded-full overflow-hidden">
                  <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.val}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-warning font-medium mt-4 bg-warning/10 p-2 rounded-lg">
            VNG đang tiến gần ngưỡng 40%. Khuyến nghị đa dạng hóa.
          </p>
        </div>

        {/* CARD 2 — DSO TREND */}
        <div className="bg-white rounded-[24px] shadow-sm border border-border-subtle p-6 flex flex-col h-[280px]">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-forest-900 font-semibold text-lg leading-tight w-[70%]">Chỉ số thu tiền (DSO)</h3>
            <span className="bg-forest-50 text-forest-500 text-[10px] font-bold px-2 py-1 rounded-md">
              Tốt
            </span>
          </div>
          <div className="mb-4">
            <div className="text-forest-500 font-sans text-3xl font-extrabold mb-0.5">28 ngày</div>
            <div className="text-text-muted text-xs font-medium">32 ngày · Baseline ban đầu</div>
          </div>
          <div className="flex-1 flex items-end gap-1.5 mt-2 h-20">
            {/* Mini Bar Chart */}
            {[29, 31, 30, 27, 26, 28].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end items-center group relative">
                <div className="w-full bg-forest-500 rounded-t-sm" style={{ height: `${(val / 40) * 100}%` }} />
                {/* Tooltip on hover mock */}
                <div className="absolute -top-6 bg-forest-900 text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {val} ngày
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-muted font-medium mt-4">
            Khách hàng đang thanh toán sớm hơn baseline
          </p>
        </div>

        {/* CARD 3 — ỔN ĐỊNH INVOICE */}
        <div className="bg-white rounded-[24px] shadow-sm border border-border-subtle p-6 flex flex-col h-[280px]">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-forest-900 font-semibold text-lg leading-tight w-[70%]">Mức ổn định invoice</h3>
            <span className="bg-forest-50 text-forest-500 text-[10px] font-bold px-2 py-1 rounded-md">
              Tốt
            </span>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between text-xs font-bold text-forest-900 mb-2">
              <span>Độ ổn định</span>
              <span className="text-forest-500">78/100</span>
            </div>
            <div className="w-full h-2.5 bg-border-subtle rounded-full overflow-hidden relative">
              <div className="bg-forest-500 h-full rounded-full absolute left-0" style={{ width: '78%' }} />
            </div>
          </div>

          <div className="space-y-3 mt-auto">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-forest-500" />
              <span className="text-xs text-forest-900 font-medium">Tần suất nộp: Ổn định</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-forest-500" />
              <span className="text-xs text-forest-900 font-medium">Giá trị trung bình: <span className="font-mono">$22,400</span></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-forest-500" />
              <span className="text-xs text-forest-900 font-medium">Không có invoice bất thường</span>
            </div>
          </div>
        </div>

        {/* CARD 4 — ĐIỀU CHỈNH PHÍ TỰ ĐỘNG */}
        <div className="bg-white rounded-[24px] shadow-sm border border-border-subtle p-6 flex flex-col h-[280px]">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-forest-900 font-semibold text-lg leading-tight w-[70%]">Điều chỉnh phí hiệu suất</h3>
            <span className="bg-bg-subtle text-text-muted text-[10px] font-bold px-2 py-1 rounded-md text-center">
              Không áp dụng
            </span>
          </div>
          
          <p className="text-xs text-text-muted leading-relaxed mb-4">
            Phí điều chỉnh +0.5-1.0% chỉ áp dụng khi doanh thu dưới 80% baseline trong 2 tháng liên tiếp.
          </p>

          <div className="bg-forest-50 p-3 rounded-xl border border-forest-400/20 mb-auto">
            <p className="text-sm font-bold text-forest-900">Doanh thu hiện tại = 128% baseline.</p>
            <p className="text-xs font-medium text-forest-500 mt-1">Không áp dụng điều chỉnh.</p>
          </div>

          <p className="text-[11px] text-forest-500 font-bold bg-forest-50 py-2 px-3 rounded-lg text-center mt-4">
            Duy trì doanh thu tốt giúp giữ phí ở mức thấp nhất
          </p>
        </div>

      </div>

      {/* BOTTOM EXPLANATION PANEL */}
      <div className="w-full bg-[#F0F8F4] rounded-[20px] p-8 flex flex-col gap-6 border border-forest-400/20">
        <div className="flex items-center gap-3 border-b border-forest-400/20 pb-4">
          <ShieldCheck className="w-6 h-6 text-forest-500" />
          <h2 className="text-forest-900 font-bold text-lg">Hệ thống giám sát liên tục RevStream</h2>
        </div>
        
        <div className="flex gap-12">
          <div className="flex-1">
            <p className="font-bold text-forest-900 text-sm mb-3">Những gì chúng tôi theo dõi:</p>
            <ul className="space-y-2 text-sm text-forest-900 font-medium">
              <li className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-forest-500 before:rounded-full">Lưu lượng nộp invoice (Invoice flow)</li>
              <li className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-forest-500 before:rounded-full">Chỉ số thu tiền thực tế (DSO)</li>
              <li className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-forest-500 before:rounded-full">Mức độ tập trung khách hàng (Client concentration)</li>
              <li className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-forest-500 before:rounded-full">Xu hướng doanh thu so với baseline</li>
            </ul>
          </div>
          
          <div className="flex-1">
            <p className="font-bold text-forest-900 text-sm mb-3">Những gì bạn nhận được:</p>
            <ul className="space-y-2 text-sm text-forest-900 font-medium">
              <li className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-forest-500 before:rounded-full">Cảnh báo sớm 30-60 ngày trước khi có rủi ro</li>
              <li className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-forest-500 before:rounded-full">Cơ chế điều chỉnh phí minh bạch, không bất ngờ</li>
              <li className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-forest-500 before:rounded-full">Bảo vệ hạn mức facility không bị đóng đột ngột</li>
              <li className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-forest-500 before:rounded-full">Báo cáo sức khỏe hàng tháng chuyên sâu</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm font-bold text-forest-500 pt-4 mt-2 border-t border-forest-400/20">
          Giám sát không phải để hạn chế — mà để bảo vệ khả năng tiếp cận vốn của bạn.
        </p>
      </div>

    </div>
  );
}
