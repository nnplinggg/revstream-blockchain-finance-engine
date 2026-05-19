import { Outlet, Link, useLocation } from "react-router";
import { LayoutDashboard, FileUp, FileText, FolderOpen, Bell, Settings, DollarSign } from "lucide-react";
import { clsx } from "clsx";

export function DashboardLayout() {
  const location = useLocation();
  const isUploadFlow = location.pathname.includes("/upload");

  const navItems = [
    { name: "Tổng quan", path: "/", icon: LayoutDashboard },
    { name: "Nộp Invoice", path: "/upload", icon: FileUp },
    { name: "Hạn mức", path: "/facility", icon: FileText },
    { name: "Khoản hoàn trả", path: "/repayment", icon: DollarSign },
    { name: "Tài liệu", path: "/documents", icon: FolderOpen },
    { name: "Thông báo", path: "/notifications", icon: Bell },
    { name: "Cài đặt", path: "/settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen w-full font-sans bg-bg-subtle overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[240px] bg-forest-900 flex-shrink-0 flex flex-col justify-between">
        <div>
          <div className="p-6">
            <h1 className="text-white text-[16px] font-bold">RevStream Capital</h1>
            <p className="text-forest-400 text-[13px] mt-1">Minh Phát Technology JSC</p>
          </div>
          
          <nav className="px-3 mt-4 space-y-1">
            {navItems.map((item) => {
              const isOverview = item.path === "/";
              const active = isOverview 
                ? (location.pathname === "/" || location.pathname.startsWith("/revenue-health"))
                : location.pathname.startsWith(item.path);
                
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={clsx(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    active 
                      ? "bg-forest-500/10 text-forest-500" 
                      : "text-text-muted hover:text-white hover:bg-white/5"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-white/10 m-3 rounded-xl bg-white/5 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-forest-500 flex items-center justify-center text-white font-bold text-sm">
            N
          </div>
          <div className="flex flex-col">
            <span className="text-white text-sm font-medium">Nguyễn Minh Phát</span>
            <span className="text-forest-400 text-xs">Founder</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-[72px] bg-white border-b border-border-subtle flex items-center justify-between px-8 flex-shrink-0">
          <div className="text-forest-900 font-medium text-lg">
            {isUploadFlow ? (
              <div className="flex items-center gap-2 text-sm font-medium">
                <Link to="/" className="text-text-muted hover:text-forest-900 transition-colors">Tổng quan</Link>
                <span className="text-border-subtle">/</span>
                <span className="text-forest-900">Nộp Invoice</span>
              </div>
            ) : location.pathname.includes("/revenue-health") ? (
              <div className="flex items-center gap-2 text-sm font-medium">
                <Link to="/" className="text-text-muted hover:text-forest-900 transition-colors">Tổng quan</Link>
                <span className="text-border-subtle">/</span>
                <span className="text-forest-900">Sức khỏe doanh thu</span>
              </div>
            ) : location.pathname.includes("/facility") ? (
              <div className="flex items-center gap-2 text-sm font-medium">
                <Link to="/" className="text-text-muted hover:text-forest-900 transition-colors">Tổng quan</Link>
                <span className="text-border-subtle">/</span>
                <span className="text-forest-900">Quản lý hạn mức</span>
              </div>
            ) : location.pathname.includes("/repayment") ? (
              <div className="flex items-center gap-2 text-sm font-medium">
                <Link to="/" className="text-text-muted hover:text-forest-900 transition-colors">Tổng quan</Link>
                <span className="text-border-subtle">/</span>
                <span className="text-forest-900">Theo dõi hoàn trả</span>
              </div>
            ) : location.pathname.includes("/documents") ? (
              <div className="flex items-center gap-2 text-sm font-medium">
                <Link to="/" className="text-text-muted hover:text-forest-900 transition-colors">Tổng quan</Link>
                <span className="text-border-subtle">/</span>
                <span className="text-forest-900">Kho tài liệu & Hồ sơ</span>
              </div>
            ) : location.pathname.includes("/notifications") ? (
              <div className="flex items-center gap-2 text-sm font-medium">
                <Link to="/" className="text-text-muted hover:text-forest-900 transition-colors">Tổng quan</Link>
                <span className="text-border-subtle">/</span>
                <span className="text-forest-900">Thông báo & Hoạt động</span>
              </div>
            ) : (
              "Tổng quan"
            )}
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-text-muted hover:text-forest-900 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-warning text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                2
              </span>
            </button>
            <Link
              to="/upload"
              className="bg-forest-500 hover:bg-forest-500/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Nộp Invoice Mới
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
