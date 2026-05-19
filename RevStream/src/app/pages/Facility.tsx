import { TrendingUp, DollarSign, Calendar, AlertCircle } from "lucide-react";

export function Facility() {
  return (
    <div className="p-8 flex flex-col gap-6">

      {/* TOP SECTION - LIMIT OVERVIEW */}
      <section
        className="rounded-[24px] overflow-hidden shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #0E2319 0%, #1A3B2B 100%)',
        }}
      >
        <div className="p-10 flex items-center gap-12">
          {/* Left Side */}
          <div className="flex-1">
            <h3 className="text-white/80 text-sm font-medium mb-3">Tổng hạn mức phê duyệt</h3>
            <div className="mb-8">
              <span className="text-white font-sans font-bold" style={{ fontSize: '56px' }}>$500,000</span>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-forest-500 rounded-full transition-all duration-500"
                  style={{ width: '60%' }}
                />
              </div>
            </div>

            <div className="flex items-center gap-6 text-white/90 text-sm font-medium">
              <span>Đã sử dụng: <span className="font-mono font-semibold">$300,000</span></span>
              <span className="text-white/40">|</span>
              <span>Còn lại: <span className="font-mono font-semibold text-forest-500">$200,000</span></span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex flex-col items-start gap-6">
            <div>
              <h3 className="text-white/80 text-sm font-medium mb-3">Trạng thái Facility</h3>
              <div className="inline-flex items-center gap-2 bg-forest-500 text-white px-4 py-2 rounded-lg text-sm font-bold">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                ĐANG HOẠT ĐỘNG
              </div>
            </div>

            <div className="text-white/90">
              <p className="text-sm mb-1">Ngày hết hạn: <span className="font-mono font-semibold">15/12/2027</span></p>
              <p className="text-sm text-white/70">(Còn 540 ngày)</p>
            </div>

            <button className="bg-white hover:bg-white/95 text-forest-900 px-6 py-3 rounded-lg font-semibold text-sm transition-colors shadow-lg">
              Yêu cầu tăng hạn mức
            </button>
          </div>
        </div>
      </section>

      {/* MIDDLE SECTION - THREE CARDS */}
      <section className="grid grid-cols-3 gap-6">

        {/* Card 1: Yếu tố tăng hạn mức */}
        <div className="bg-white rounded-[24px] shadow-sm p-6 border border-border-subtle">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-forest-500" />
            <h3 className="text-forest-900 font-semibold text-lg">Yếu tố tăng hạn mức</h3>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3 p-3 bg-forest-50 rounded-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-forest-500 mt-2 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-forest-900 font-medium mb-1">Duy trì DSO &lt; 30 ngày</p>
                <p className="text-xs text-text-muted">
                  <span className="font-mono font-semibold text-forest-500">+$50,000</span> tiềm năng
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-forest-50 rounded-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-forest-500 mt-2 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-forest-900 font-medium mb-1">Thêm 2 khách hàng B2B mới</p>
                <p className="text-xs text-text-muted">
                  <span className="font-mono font-semibold text-forest-500">+$100,000</span> tiềm năng
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-forest-50 rounded-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-forest-500 mt-2 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-forest-900 font-medium mb-1">Doanh thu tăng trưởng 15%</p>
                <p className="text-xs text-text-muted">
                  <span className="font-mono font-semibold text-forest-500">+$75,000</span> tiềm năng
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Lịch sử thay đổi */}
        <div className="bg-white rounded-[24px] shadow-sm p-6 border border-border-subtle">
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="w-5 h-5 text-forest-500" />
            <h3 className="text-forest-900 font-semibold text-lg">Lịch sử thay đổi hạn mức</h3>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative pl-6 pb-6 border-l-2 border-border-subtle">
              <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-forest-500 ring-4 ring-white" />
              <div>
                <p className="text-sm font-semibold text-forest-900 mb-1">01/01/2026</p>
                <p className="text-xs text-text-muted mb-1">Khởi tạo facility</p>
                <p className="font-mono font-semibold text-sm text-forest-900">$200,000</p>
              </div>
            </div>

            <div className="relative pl-6">
              <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-forest-500 ring-4 ring-white" />
              <div>
                <p className="text-sm font-semibold text-forest-900 mb-1">15/05/2026</p>
                <p className="text-xs text-text-muted mb-1">Nâng cấp dựa trên doanh thu</p>
                <p className="font-mono font-semibold text-sm text-forest-900">$500,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Phí & Lãi suất */}
        <div className="bg-white rounded-[24px] shadow-sm p-6 border border-border-subtle">
          <div className="flex items-center gap-2 mb-6">
            <DollarSign className="w-5 h-5 text-forest-500" />
            <h3 className="text-forest-900 font-semibold text-lg">Phí & Lãi suất áp dụng</h3>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center py-2 border-b border-border-subtle">
              <span className="text-sm text-text-muted">Phí dịch vụ</span>
              <span className="font-mono font-semibold text-sm text-forest-900">1.2% / invoice</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-border-subtle">
              <span className="text-sm text-text-muted">Lãi suất facility</span>
              <span className="font-mono font-semibold text-sm text-forest-900">9.0% / năm</span>
            </div>

            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-text-muted">Senior Tranche</span>
              <span className="text-xs font-semibold text-forest-500 bg-forest-50 px-2 py-1 rounded">Pricing</span>
            </div>

            <div className="mt-2 p-3 bg-forest-50 rounded-lg flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-forest-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-forest-900">
                Phí của bạn đang ở mức <span className="font-semibold">thấp nhất</span> nhờ sức khỏe tài chính <span className="font-semibold text-forest-500">Tốt</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM SECTION - ELIGIBLE CLIENTS TABLE */}
      <section className="bg-white rounded-[24px] shadow-sm p-8 border border-border-subtle">
        <h2 className="text-forest-900 font-bold mb-6" style={{ fontSize: '24px' }}>
          Danh mục khách hàng được cấp hạn mức
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-subtle">
                <th className="text-left py-3 px-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                  Khách hàng
                </th>
                <th className="text-left py-3 px-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                  Ngành hàng
                </th>
                <th className="text-left py-3 px-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                  Hạn mức riêng (Sub-limit)
                </th>
                <th className="text-left py-3 px-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                  Tỷ lệ tạm ứng
                </th>
                <th className="text-left py-3 px-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                  Trạng thái
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "VNG Corporation",
                  industry: "Công nghệ",
                  sublimit: "$200,000",
                  advanceRate: "85%",
                  status: "active"
                },
                {
                  name: "Masan Group",
                  industry: "Tiêu dùng",
                  sublimit: "$150,000",
                  advanceRate: "80%",
                  status: "active"
                },
                {
                  name: "FPT Software",
                  industry: "Công nghệ",
                  sublimit: "$150,000",
                  advanceRate: "85%",
                  status: "active"
                },
              ].map((client, i) => (
                <tr key={i} className="border-b border-border-subtle hover:bg-bg-subtle transition-colors">
                  <td className="py-4 px-4">
                    <p className="font-semibold text-sm text-forest-900">{client.name}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-text-muted">{client.industry}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-mono font-semibold text-sm text-forest-900">{client.sublimit}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-mono font-semibold text-sm text-forest-900">{client.advanceRate}</p>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1.5 bg-forest-50 text-forest-500 text-xs font-bold px-3 py-1.5 rounded-md">
                      <div className="w-1.5 h-1.5 rounded-full bg-forest-500" />
                      Hoạt động
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
