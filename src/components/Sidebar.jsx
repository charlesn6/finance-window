import { DollarSign, WalletCards, X } from "lucide-react";
import { tabs } from "../assets/data";
import NavItem from "./UI/NavItem";

const Sidebar = ({ activeTab, setActiveTab, onLogout, onClose }) => {
  const handleClick = (tabName) => {
    setActiveTab(tabName);
    if (onClose) onClose();
  };

  const handleLogout = () => {
    onLogout();
    if (onClose) onClose();
  };

  return (
    <div className="flex flex-col h-full">
      {/* Logo and Close Button */}
      <div className="flex items-center justify-between mb-6 lg:mb-8">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-200 p-2 rounded-lg">
            <WalletCards
              size={24}
              className="text-zinc-700" 
            />
          </div>

          <span className="text-lg tracking-tight font-bold text-zinc-900">
            FinanceWindow
          </span>
        </div>

        {/* Mobile Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/60 rounded-lg lg:hidden transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1.5 overflow-y-auto">
        {tabs.map((tab) => (
          <NavItem
            key={tab.key}
            activeTab={activeTab}
            onTabClick={handleClick}
            {...tab}
          />
        ))}
      </nav>

      {/* Premium Upsell Card */}
      <div className="mt-auto pt-4 border-t border-zinc-200">
        {/* Log Out Button */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center space-x-2 p-2.5 rounded-lg text-red-600 bg-red-50 hover:bg-red-100 transition-colors cursor-pointer text-sm font-medium"
        >
          Log Out
        </button>

        {/* Premium Upsell */}
        <div className="mt-3 bg-zinc-100 p-3.5 rounded-lg">
          <div className="bg-green-100 p-2 rounded-full inline-flex mb-2">
            <DollarSign size={20} className="text-green-600"/>
          </div>

          <p className="text-sm font-semibold text-zinc-900">
            Unlock Premium
          </p>

          <p className="text-xs text-zinc-600 mb-2.5">
            $9.99/Month
          </p>

          <button className="w-full bg-blue-900 text-white text-xs font-medium py-2 rounded-lg hover:bg-zinc-700 transition-colors duration-100 cursor-pointer">
            Explore Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;