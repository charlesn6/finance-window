import { useState, useEffect } from "react";
import { Calendar, Menu, WalletCards } from "lucide-react";
import MainContent from "./MainContent";
import RightPanel from "./RightPanel";
import Sidebar from "./Sidebar";
import AccountsExample from "./AccountsExample";

const DashboardLayout = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);

  // Close drawers on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsSidebarOpen(false);
        setIsRightPanelOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background body scroll when mobile drawers are open
  useEffect(() => {
    if (isSidebarOpen || isRightPanelOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen, isRightPanelOpen]);

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      {/* Mobile & Tablet Header */}
      <header className="lg:hidden sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-zinc-200 px-4 py-3 flex items-center justify-between shadow-xs">
        {/* Left: Mobile Drawer Button & Logo */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 -ml-1 text-zinc-700 hover:bg-zinc-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          <div className="flex items-center space-x-2">
            <div className="bg-blue-200 p-1.5 rounded-lg">
              <WalletCards size={18} className="text-zinc-700" />
            </div>
            <span className="font-bold text-base tracking-tight text-zinc-900">
              FinanceWindow
            </span>
          </div>
        </div>

        {/* Right: Agenda/Profile Drawer Toggle (visible on screens < xl) */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsRightPanelOpen(true)}
            className="flex items-center space-x-2 p-1.5 hover:bg-zinc-100 rounded-lg transition-colors cursor-pointer text-zinc-700"
            aria-label="Open agenda and profile"
          >
            <div className="size-7 rounded-full overflow-hidden bg-zinc-200 shrink-0">
              <img
                src="/user-1.png"
                alt="Profile"
                className="size-full object-cover"
              />
            </div>
            <Calendar size={18} className="text-zinc-600 hidden sm:block" />
          </button>
        </div>
      </header>

      {/* Main Body Layout */}
      <div className="flex-1 flex w-full">
        {/* Desktop Left Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 bg-zinc-50 p-6 shadow-md border-r border-zinc-100 min-h-screen sticky top-0 h-screen overflow-y-auto">
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onLogout={onLogout}
          />
        </aside>

        {/* Mobile Sidebar Overlay & Drawer */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-zinc-900/50 backdrop-blur-xs transition-opacity"
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Slide-over drawer */}
            <div className="fixed inset-y-0 left-0 w-72 max-w-[85vw] bg-white p-5 shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-200 overflow-y-auto">
              <Sidebar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onLogout={onLogout}
                onClose={() => setIsSidebarOpen(false)}
              />
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 px-3 py-4 sm:px-6 sm:py-6 lg:p-8 xl:p-10 max-w-5xl mx-auto w-full">
          {activeTab === "Dashboard" && <MainContent />}
          {activeTab === "Accounts" && <AccountsExample />}
          {activeTab !== "Dashboard" && activeTab !== "Accounts" && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-zinc-200/60 text-center space-y-3 mt-4">
              <h2 className="text-xl font-bold text-zinc-900">{activeTab}</h2>
              <p className="text-sm text-zinc-500 max-w-md mx-auto">
                This section is currently under development. You can explore the Dashboard and Accounts tabs.
              </p>
              <button
                onClick={() => setActiveTab("Dashboard")}
                className="mt-2 inline-flex items-center px-4 py-2 bg-blue-900 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
              >
                Back to Dashboard
              </button>
            </div>
          )}
        </main>

        {/* Desktop Right Panel */}
        <aside className="hidden xl:block w-80 shrink-0 bg-zinc-100 p-4 shadow-md border-l border-zinc-200 min-h-screen sticky top-0 h-screen overflow-y-auto">
          <RightPanel />
        </aside>

        {/* Mobile/Tablet Right Panel Overlay & Drawer */}
        {isRightPanelOpen && (
          <div className="fixed inset-0 z-50 xl:hidden">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-zinc-900/50 backdrop-blur-xs transition-opacity"
              onClick={() => setIsRightPanelOpen(false)}
            />

            {/* Slide-over drawer from right */}
            <div className="fixed inset-y-0 right-0 w-80 max-w-[90vw] bg-zinc-100 p-4 shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-200 overflow-y-auto">
              <RightPanel onClose={() => setIsRightPanelOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;