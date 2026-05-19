import { AlertCircle, TrendingUp, DollarSign, User, Bell, Mail, MessageSquare, CheckSquare } from "lucide-react";
import { useState } from "react";

export function Notifications() {
  const [activeFilter, setActiveFilter] = useState("all");

  const notifications = [
    {
      id: 1,
      type: "urgent",
      icon: AlertCircle,
      iconColor: "text-warning",
      iconBg: "bg-warning/10",
      title: "Cảnh báo: Khoản hoàn trả INV-085 ($15,250) sẽ đến hạn sau 48 giờ nữa.",
      time: "2 giờ trước",
      category: "payment"
    },
    {
      id: 2,
      type: "success",
      icon: TrendingUp,
      iconColor: "text-forest-500",
      iconBg: "bg-forest-50",
      title: "Hạn mức Facility của bạn đã được nâng lên $550,000 dựa trên tăng trưởng doanh thu tháng 4.",
      time: "1 ngày trước",
      category: "limit"
    },
    {
      id: 3,
      type: "money",
      icon: DollarSign,
      iconColor: "text-forest-500",
      iconBg: "bg-forest-50",
      title: "Giải ngân thành công: $22,288 đã được gửi vào tài khoản Techcombank của bạn.",
      time: "2 ngày trước",
      category: "system"
    },
    {
      id: 4,
      type: "user",
      icon: User,
      iconColor: "text-forest-400",
      iconBg: "bg-forest-50",
      title: "Nguyễn Văn A (Kế toán trưởng) đã tải lên 3 hóa đơn mới.",
      time: "3 ngày trước",
      category: "system"
    },
  ];

  const filterOptions = [
    { id: "all", label: "Tất cả thông báo", count: 4 },
    { id: "payment", label: "Cảnh báo thanh toán", count: 1 },
    { id: "limit", label: "Cập nhật hạn mức", count: 1 },
    { id: "system", label: "Hệ thống", count: 2 },
  ];

  const filteredNotifications = activeFilter === "all"
    ? notifications
    : notifications.filter(n => n.category === activeFilter);

  return (
    <div className="p-8 flex justify-center">
      <div className="w-full max-w-[1280px] flex gap-6">

        {/* LEFT SIDEBAR - FILTERS */}
        <aside className="w-[240px] flex-shrink-0">
          <div className="bg-white rounded-[20px] shadow-sm border border-border-subtle p-4">
            <h3 className="text-forest-900 font-semibold text-sm mb-4 px-2">Bộ lọc</h3>
            <nav className="flex flex-col gap-1">
              {filterOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveFilter(option.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeFilter === option.id
                      ? "bg-forest-50 text-forest-500"
                      : "text-text-muted hover:bg-bg-subtle hover:text-forest-900"
                  }`}
                >
                  <span>{option.label}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                    activeFilter === option.id
                      ? "bg-forest-500 text-white"
                      : "bg-border-subtle text-text-muted"
                  }`}>
                    {option.count}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* CENTER - NOTIFICATIONS LIST */}
        <main className="flex-1 min-w-0">
          <div className="mb-6">
            <h1 className="text-forest-900 font-bold mb-2" style={{ fontSize: '32px' }}>
              Thông báo & Hoạt động
            </h1>
            <p className="text-text-muted text-sm">
              Theo dõi các cập nhật quan trọng về tài khoản của bạn
            </p>
          </div>

          <div className="bg-white rounded-[24px] shadow-sm border border-border-subtle overflow-hidden">
            {filteredNotifications.map((notification, index) => {
              const Icon = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={`flex items-start gap-4 p-6 hover:bg-bg-subtle transition-colors ${
                    index !== filteredNotifications.length - 1 ? "border-b border-border-subtle" : ""
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg ${notification.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${notification.iconColor}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-forest-900 text-sm leading-relaxed mb-2">
                      {notification.title}
                    </p>
                    <p className="text-text-muted text-xs">{notification.time}</p>
                  </div>

                  {notification.type === "urgent" && (
                    <div className="flex-shrink-0">
                      <span className="inline-block w-2 h-2 rounded-full bg-warning animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}

            {filteredNotifications.length === 0 && (
              <div className="p-12 text-center">
                <Bell className="w-12 h-12 text-border-subtle mx-auto mb-3" />
                <p className="text-text-muted text-sm">Không có thông báo nào</p>
              </div>
            )}
          </div>
        </main>

        {/* RIGHT SIDEBAR - SETTINGS & SUPPORT */}
        <aside className="w-[280px] flex-shrink-0 flex flex-col gap-6">

          {/* Notification Settings */}
          <div className="bg-white rounded-[20px] shadow-sm border border-border-subtle p-6">
            <h3 className="text-forest-900 font-semibold text-sm mb-4">Cài đặt thông báo</h3>

            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 rounded border-2 border-border-subtle checked:bg-forest-500 checked:border-forest-500 cursor-pointer"
                />
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-text-muted group-hover:text-forest-500 transition-colors" />
                  <span className="text-sm text-forest-900">Email</span>
                </div>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 rounded border-2 border-border-subtle checked:bg-forest-500 checked:border-forest-500 cursor-pointer"
                />
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-text-muted group-hover:text-forest-500 transition-colors" />
                  <span className="text-sm text-forest-900">SMS</span>
                </div>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 rounded border-2 border-border-subtle checked:bg-forest-500 checked:border-forest-500 cursor-pointer"
                />
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-text-muted group-hover:text-forest-500 transition-colors" />
                  <span className="text-sm text-forest-900">In-app alerts</span>
                </div>
              </label>
            </div>
          </div>

          {/* Quick Support */}
          <div className="bg-gradient-to-br from-forest-900 to-forest-500 rounded-[20px] shadow-lg p-6">
            <h3 className="text-white font-semibold text-sm mb-2">Hỗ trợ nhanh</h3>
            <p className="text-white/80 text-xs mb-4 leading-relaxed">
              Cần trợ giúp? Kết nối trực tiếp với quản lý tài khoản của bạn.
            </p>
            <button className="w-full bg-white hover:bg-white/95 text-forest-900 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-md flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Chat với quản lý tài khoản
            </button>

            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex items-center gap-2 text-white/90 text-xs">
                <CheckSquare className="w-3 h-3" />
                <span className="font-medium">Priority Support</span>
              </div>
            </div>
          </div>

          {/* Mark all as read */}
          <button className="w-full py-2.5 px-4 border border-border-subtle text-text-muted hover:bg-bg-subtle hover:text-forest-900 rounded-lg text-sm font-medium transition-colors">
            Đánh dấu tất cả là đã đọc
          </button>
        </aside>
      </div>
    </div>
  );
}
