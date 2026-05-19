import { Search, Folder, FileText, Download, Lock, Shield, CheckCircle, Clock } from "lucide-react";

export function Documents() {
  return (
    <div className="p-8 flex gap-6">

      {/* LEFT COLUMN - THE VAULT */}
      <div className="flex-1 flex flex-col gap-6">

        {/* Header & Search */}
        <div>
          <h1 className="text-forest-900 font-bold mb-4" style={{ fontSize: '32px' }}>
            Kho lưu trữ tài liệu
          </h1>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              placeholder="Tìm kiếm hợp đồng, hóa đơn..."
              className="w-full pl-12 pr-4 py-3 border border-border-subtle rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-forest-500/20 focus:border-forest-500"
            />
          </div>
        </div>

        {/* FOLDER STRUCTURE - Grid of 4 cards */}
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              name: "Hồ sơ pháp lý",
              description: "GPKD, Điều lệ, CCCD đại diện",
              count: 5,
              icon: Shield
            },
            {
              name: "Hợp đồng Facility",
              description: "Smart Contract PDF, Bản ký tay",
              count: 2,
              icon: FileText
            },
            {
              name: "Báo cáo tài chính",
              description: "Dữ liệu kết nối từ KiotViet/Xero",
              count: 12,
              icon: FileText
            },
            {
              name: "Chứng từ giải ngân",
              description: "Biên nhận từ Pool",
              count: 8,
              icon: FileText
            }
          ].map((folder, i) => {
            const Icon = folder.icon;
            return (
              <button
                key={i}
                className="bg-white rounded-[20px] shadow-sm p-6 border border-border-subtle hover:border-forest-500 hover:shadow-md transition-all text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center flex-shrink-0 group-hover:bg-forest-500 transition-colors">
                    <Folder className="w-6 h-6 text-forest-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-forest-900 text-sm mb-1">{folder.name}</h3>
                    <p className="text-xs text-text-muted mb-2 line-clamp-2">{folder.description}</p>
                    <span className="text-xs font-semibold text-forest-500">{folder.count} files</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* RECENT DOCUMENTS TABLE */}
        <div className="bg-white rounded-[24px] shadow-sm p-6 border border-border-subtle flex-1">
          <h3 className="text-forest-900 font-semibold text-lg mb-6">Tài liệu gần đây</h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="text-left py-3 px-2 text-xs font-bold text-text-muted uppercase tracking-wider">
                    Tên tài liệu
                  </th>
                  <th className="text-left py-3 px-2 text-xs font-bold text-text-muted uppercase tracking-wider">
                    Loại
                  </th>
                  <th className="text-left py-3 px-2 text-xs font-bold text-text-muted uppercase tracking-wider">
                    Ngày tải lên
                  </th>
                  <th className="text-left py-3 px-2 text-xs font-bold text-text-muted uppercase tracking-wider">
                    Trạng thái On-chain
                  </th>
                  <th className="text-left py-3 px-2 text-xs font-bold text-text-muted uppercase tracking-wider">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Facility_Agreement_v2.pdf",
                    type: "Hợp đồng",
                    date: "15/05/2026",
                    onChainStatus: "verified"
                  },
                  {
                    name: "Q1_Revenue_Report.pdf",
                    type: "Báo cáo",
                    date: "01/04/2026",
                    onChainStatus: "verified"
                  },
                  {
                    name: "INV-089_Confirmation.pdf",
                    type: "Giải ngân",
                    date: "23/05/2026",
                    onChainStatus: "pending"
                  }
                ].map((doc, i) => (
                  <tr key={i} className="border-b border-border-subtle hover:bg-bg-subtle transition-colors">
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-forest-500" />
                        <p className="font-medium text-sm text-forest-900">{doc.name}</p>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <p className="text-sm text-text-muted">{doc.type}</p>
                    </td>
                    <td className="py-4 px-2">
                      <p className="font-mono text-xs text-text-muted">{doc.date}</p>
                    </td>
                    <td className="py-4 px-2">
                      {doc.onChainStatus === "verified" ? (
                        <span className="inline-flex items-center gap-1.5 bg-forest-50 text-forest-500 text-xs font-semibold px-2.5 py-1 rounded-md">
                          <CheckCircle className="w-3 h-3" />
                          Verified on Polygon
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 bg-warning/10 text-warning text-xs font-semibold px-2.5 py-1 rounded-md">
                          <Clock className="w-3 h-3" />
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-2">
                      <button className="text-forest-500 hover:text-forest-900 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN - COMPANY MINI-PROFILE */}
      <div className="w-[360px] flex-shrink-0 flex flex-col gap-6">

        {/* Company Info Card */}
        <div className="bg-white rounded-[24px] shadow-sm p-6 border border-border-subtle">
          <h3 className="text-forest-900 font-semibold text-lg mb-6">Thông tin doanh nghiệp</h3>

          {/* Logo Placeholder */}
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-forest-500 to-forest-900 flex items-center justify-center mb-4">
            <span className="text-white font-bold text-2xl">M</span>
          </div>

          <h4 className="font-semibold text-forest-900 text-base mb-6">
            Công ty TNHH Giải pháp<br />Công nghệ ABC
          </h4>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start py-2 border-b border-border-subtle">
              <span className="text-xs text-text-muted">Mã số thuế</span>
              <span className="font-mono text-sm font-semibold text-forest-900">0102345678</span>
            </div>

            <div className="flex justify-between items-start py-2 border-b border-border-subtle">
              <span className="text-xs text-text-muted">Đại diện</span>
              <span className="text-sm font-semibold text-forest-900">Nguyễn Văn A</span>
            </div>

            <div className="flex justify-between items-start py-2 border-b border-border-subtle">
              <span className="text-xs text-text-muted">Tài khoản nhận tiền</span>
              <span className="font-mono text-sm font-semibold text-forest-900">Techcombank<br />1902...</span>
            </div>

            <div className="pt-2">
              <p className="text-xs text-text-muted mb-3">Kết nối dữ liệu</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 bg-forest-50 px-2.5 py-1.5 rounded-md">
                  <div className="w-2 h-2 rounded-full bg-forest-500" />
                  <span className="text-xs font-semibold text-forest-900">KiotViet</span>
                </div>
                <div className="flex items-center gap-1.5 bg-forest-50 px-2.5 py-1.5 rounded-md">
                  <div className="w-2 h-2 rounded-full bg-forest-500" />
                  <span className="text-xs font-semibold text-forest-900">Tax Authority</span>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full mt-6 py-2.5 px-4 border-2 border-forest-500 text-forest-500 rounded-lg font-semibold text-sm hover:bg-forest-50 transition-colors">
            Chỉnh sửa hồ sơ
          </button>
        </div>

        {/* Security Notice */}
        <div className="bg-gradient-to-br from-forest-900 to-forest-500 rounded-[20px] p-6 shadow-lg">
          <div className="flex items-start gap-3 mb-4">
            <Lock className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-semibold text-sm mb-2">Bảo mật & Minh bạch</h4>
              <p className="text-white/80 text-xs leading-relaxed">
                Mọi tài liệu được mã hóa và lưu trữ bản sao trên IPFS để đảm bảo tính minh bạch đối với Nhà đầu tư.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-3 border-t border-white/20">
            <Shield className="w-4 h-4 text-white/80" />
            <span className="text-white/80 text-xs font-medium">Polygon Network • End-to-end encrypted</span>
          </div>
        </div>
      </div>
    </div>
  );
}
