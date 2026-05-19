import { AlertCircle, CheckCircle, Clock, TrendingUp, Wallet, DollarSign } from "lucide-react";

export function Repayment() {
  const timelineData = [
    { date: "20/05", amount: 18500, status: "paid", label: "VNG Corp" },
    { date: "22/05", amount: 12000, status: "paid", label: "FPT Software" },
    { date: "25/05", amount: 18500, status: "due-soon", label: "Masan Group" },
    { date: "28/05", amount: 23500, status: "due-soon", label: "Techcombank" },
    { date: "02/06", amount: 15000, status: "future", label: "VNG Corp" },
    { date: "05/06", amount: 22000, status: "future", label: "FPT Software" },
    { date: "08/06", amount: 19500, status: "future", label: "Masan Group" },
  ];

  const maxAmount = Math.max(...timelineData.map(d => d.amount));

  return (
    <div className="p-8 flex flex-col gap-6">

      {/* TOP SECTION - REPAYMENT SUMMARY */}
      <section className="grid grid-cols-3 gap-6">

        {/* Card 1: Tổng dư nợ */}
        <div className="bg-white rounded-[24px] shadow-sm p-6 border border-border-subtle">
          <div className="flex items-center gap-2 mb-4">
            <Wallet className="w-5 h-5 text-forest-500" />
            <h3 className="text-text-muted text-sm font-medium">Tổng dư nợ hiện tại</h3>
          </div>
          <p className="font-sans font-bold text-forest-900 mb-2" style={{ fontSize: '40px' }}>
            $320,500
          </p>
          <p className="text-sm text-text-muted">5 invoice đang mở</p>
        </div>

        {/* Card 2: Sắp đến hạn */}
        <div className="bg-white rounded-[24px] shadow-sm p-6 border border-warning/30">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-warning" />
            <h3 className="text-text-muted text-sm font-medium">Sắp đến hạn (7 ngày tới)</h3>
          </div>
          <p className="font-sans font-bold text-warning mb-2" style={{ fontSize: '40px' }}>
            $42,000
          </p>
          <p className="text-sm text-text-muted mb-4">2 khoản cần lưu ý</p>
          <button className="w-full bg-warning hover:bg-warning/90 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors">
            Xem tài khoản ảo (VA) để thanh toán
          </button>
        </div>

        {/* Card 3: Đã hoàn trả */}
        <div className="bg-white rounded-[24px] shadow-sm p-6 border border-forest-500/30">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-forest-500" />
            <h3 className="text-text-muted text-sm font-medium">Đã hoàn trả (Tháng này)</h3>
          </div>
          <p className="font-sans font-bold text-forest-500 mb-2" style={{ fontSize: '40px' }}>
            $115,000
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm text-text-muted">Tỷ lệ trả đúng hạn:</p>
            <span className="bg-forest-50 text-forest-500 text-xs font-bold px-2 py-1 rounded-md">100%</span>
          </div>
        </div>
      </section>

      {/* MIDDLE SECTION - REPAYMENT TIMELINE */}
      <section className="bg-white rounded-[24px] shadow-sm p-6 border border-border-subtle">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-forest-900 font-semibold text-lg">Lịch thanh toán 30 ngày tới</h2>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-forest-500" />
              <span className="text-text-muted">Đã trả</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-warning" />
              <span className="text-text-muted">Sắp đến hạn</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-border-subtle" />
              <span className="text-text-muted">Sắp tới</span>
            </div>
          </div>
        </div>

        {/* Timeline visualization */}
        <div className="relative overflow-x-auto pb-4">
          <div className="flex items-end gap-4 min-w-max h-48 px-4">
            {timelineData.map((item, i) => {
              const height = (item.amount / maxAmount) * 100;
              const bgColor =
                item.status === "paid" ? "bg-forest-500" :
                item.status === "due-soon" ? "bg-warning" :
                "bg-border-subtle";

              return (
                <div key={i} className="flex flex-col items-center gap-2 group relative">
                  <div
                    className={`w-16 ${bgColor} rounded-t-lg transition-all hover:opacity-80 cursor-pointer`}
                    style={{ height: `${height}%` }}
                  >
                    {/* Tooltip */}
                    {item.status === "due-soon" && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <div className="bg-forest-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-lg">
                          <p className="font-semibold">{item.label}</p>
                          <p className="font-mono">${item.amount.toLocaleString()}</p>
                          <p className="text-white/80">Hạn: {item.date}</p>
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                          <div className="border-4 border-transparent border-t-forest-900" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-forest-900">{item.date}</p>
                    <p className="text-[10px] text-text-muted font-mono">${(item.amount / 1000).toFixed(0)}k</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM SECTION - DETAILED TABLE */}
      <section className="bg-white rounded-[24px] shadow-sm p-8 border border-border-subtle">
        <h2 className="text-forest-900 font-bold mb-6" style={{ fontSize: '24px' }}>
          Lịch sử giao dịch chi tiết
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-subtle">
                <th className="text-left py-3 px-3 text-xs font-bold text-text-muted uppercase tracking-wider">
                  Mã Invoice
                </th>
                <th className="text-left py-3 px-3 text-xs font-bold text-text-muted uppercase tracking-wider">
                  Khách hàng
                </th>
                <th className="text-left py-3 px-3 text-xs font-bold text-text-muted uppercase tracking-wider">
                  Ngày giải ngân
                </th>
                <th className="text-left py-3 px-3 text-xs font-bold text-text-muted uppercase tracking-wider">
                  Ngày đáo hạn
                </th>
                <th className="text-left py-3 px-3 text-xs font-bold text-text-muted uppercase tracking-wider">
                  Số tiền gốc
                </th>
                <th className="text-left py-3 px-3 text-xs font-bold text-text-muted uppercase tracking-wider">
                  Phí/Lãi
                </th>
                <th className="text-left py-3 px-3 text-xs font-bold text-text-muted uppercase tracking-wider">
                  Tổng cần trả
                </th>
                <th className="text-left py-3 px-3 text-xs font-bold text-text-muted uppercase tracking-wider">
                  Trạng thái
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  code: "INV-085",
                  customer: "Masan Group",
                  disbursementDate: "15/04",
                  dueDate: "25/05",
                  principal: "$15,000",
                  fee: "$250",
                  total: "$15,250",
                  status: "due-soon"
                },
                {
                  code: "INV-082",
                  customer: "VNG Corp",
                  disbursementDate: "01/04",
                  dueDate: "10/05",
                  principal: "$22,000",
                  fee: "$310",
                  total: "$22,310",
                  status: "paid"
                },
                {
                  code: "INV-079",
                  customer: "FPT Software",
                  disbursementDate: "20/03",
                  dueDate: "28/04",
                  principal: "$10,500",
                  fee: "$145",
                  total: "$10,645",
                  status: "paid"
                },
              ].map((transaction, i) => (
                <tr key={i} className="border-b border-border-subtle hover:bg-bg-subtle transition-colors">
                  <td className="py-4 px-3">
                    <p className="font-mono font-semibold text-sm text-forest-900">{transaction.code}</p>
                  </td>
                  <td className="py-4 px-3">
                    <p className="text-sm text-forest-900 font-medium">{transaction.customer}</p>
                  </td>
                  <td className="py-4 px-3">
                    <p className="font-mono text-sm text-text-muted">{transaction.disbursementDate}</p>
                  </td>
                  <td className="py-4 px-3">
                    <p className="font-mono text-sm text-text-muted">{transaction.dueDate}</p>
                  </td>
                  <td className="py-4 px-3">
                    <p className="font-mono font-semibold text-sm text-forest-900">{transaction.principal}</p>
                  </td>
                  <td className="py-4 px-3">
                    <p className="font-mono text-sm text-text-muted">{transaction.fee}</p>
                  </td>
                  <td className="py-4 px-3">
                    <p className="font-mono font-semibold text-sm text-forest-900">{transaction.total}</p>
                  </td>
                  <td className="py-4 px-3">
                    {transaction.status === "due-soon" ? (
                      <span className="inline-flex items-center gap-1.5 bg-warning/10 text-warning text-xs font-bold px-3 py-1.5 rounded-md">
                        <AlertCircle className="w-3 h-3" />
                        SẮP ĐẾN HẠN
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 bg-forest-50 text-forest-500 text-xs font-bold px-3 py-1.5 rounded-md">
                        <CheckCircle className="w-3 h-3" />
                        ĐÃ TRẢ
                      </span>
                    )}
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
