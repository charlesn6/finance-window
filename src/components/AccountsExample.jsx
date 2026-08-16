import React from "react";
import {
  ArrowDownLeft,
  ArrowUpRight,
  CreditCard,
  Landmark,
  PiggyBank,
  Plus,
  ShieldCheck,
  Wallet,
} from "lucide-react";

const accountsData = [
  {
    id: 1,
    name: "Main Checking Account",
    number: "•••• 4829",
    type: "Checking",
    balance: "$12,450.80",
    change: "+$1,240 this month",
    changePositive: true,
    icon: Landmark,
    bgColor: "bg-blue-600 text-white",
  },
  {
    id: 2,
    name: "High Yield Savings",
    number: "•••• 8912",
    type: "Savings (4.5% APY)",
    balance: "$34,200.00",
    change: "+$128.50 interest",
    changePositive: true,
    icon: PiggyBank,
    bgColor: "bg-emerald-600 text-white",
  },
  {
    id: 3,
    name: "Investment Portfolio",
    number: "•••• 3190",
    type: "Brokerage",
    balance: "$58,920.15",
    change: "+8.4% YTD",
    changePositive: true,
    icon: Wallet,
    bgColor: "bg-purple-600 text-white",
  },
  {
    id: 4,
    name: "Platinum Rewards Card",
    number: "•••• 7741",
    type: "Credit Card",
    balance: "$1,340.50",
    change: "Limit: $15,000",
    changePositive: false,
    icon: CreditCard,
    bgColor: "bg-zinc-800 text-white",
  },
];

const recentAccountActivity = [
  {
    id: 1,
    title: "Payroll Direct Deposit",
    date: "Today, 09:00",
    account: "Main Checking (•••• 4829)",
    amount: "+$3,500.00",
    type: "income",
  },
  {
    id: 2,
    title: "Automatic Savings Transfer",
    date: "Yesterday, 12:00",
    account: "High Yield Savings (•••• 8912)",
    amount: "+$500.00",
    type: "transfer",
  },
  {
    id: 3,
    title: "Electric & Utilities",
    date: "Aug 12, 14:20",
    account: "Main Checking (•••• 4829)",
    amount: "-$145.20",
    type: "expense",
  },
];

const AccountsExample = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header and Add Account Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-1">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-900">
            My Accounts
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            Manage your connected bank accounts, cards, and investments.
          </p>
        </div>

        <button className="inline-flex items-center justify-center space-x-2 bg-blue-900 hover:bg-blue-800 text-white text-sm font-medium py-2.5 px-4 rounded-xl shadow-xs transition-colors cursor-pointer w-full sm:w-auto">
          <Plus size={18} />
          <span>Connect Account</span>
        </button>
      </div>

      {/* Net Worth Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-5 sm:p-6 rounded-2xl shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-blue-200">
              Total Net Worth
            </span>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-1 tracking-tight">
              $104,230.45
            </p>
          </div>

          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg w-fit text-xs text-blue-100">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span>Bank-grade 256-bit encryption</span>
          </div>
        </div>
      </div>

      {/* Account Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {accountsData.map((acc) => {
          const Icon = acc.icon;
          return (
            <div
              key={acc.id}
              className="bg-white p-4 sm:p-5 rounded-2xl border border-zinc-200/70 shadow-xs hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between space-y-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2.5 rounded-xl ${acc.bgColor} shrink-0`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900">
                      {acc.name}
                    </h3>
                    <span className="text-xs text-zinc-500 font-mono">
                      {acc.number} · {acc.type}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs text-zinc-500 font-medium">Balance</span>
                <div className="flex items-baseline justify-between mt-0.5">
                  <p className="text-xl sm:text-2xl font-bold text-zinc-900">
                    {acc.balance}
                  </p>
                  <span
                    className={`text-xs font-medium ${
                      acc.changePositive ? "text-emerald-600" : "text-zinc-500"
                    }`}
                  >
                    {acc.change}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Account Activity */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-zinc-200/70 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base sm:text-lg tracking-tight font-bold text-zinc-900">
            Recent Account Transfers & Activity
          </h3>
          <span className="text-xs text-zinc-500 font-medium">Live Feed</span>
        </div>

        <div className="divide-y divide-zinc-100">
          {recentAccountActivity.map((item) => (
            <div
              key={item.id}
              className="py-3 sm:py-3.5 flex items-center justify-between gap-3 first:pt-0 last:pb-0"
            >
              <div className="flex items-center space-x-3 min-w-0">
                <div
                  className={`size-8 rounded-full flex items-center justify-center shrink-0 ${
                    item.type === "income"
                      ? "bg-emerald-100 text-emerald-700"
                      : item.type === "transfer"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-rose-100 text-rose-700"
                  }`}
                >
                  {item.type === "income" ? (
                    <ArrowDownLeft size={16} />
                  ) : item.type === "transfer" ? (
                    <ArrowUpRight size={16} />
                  ) : (
                    <ArrowUpRight size={16} />
                  )}
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-medium text-zinc-900 truncate">
                    {item.title}
                  </p>
                  <p className="text-xs text-zinc-500 truncate">
                    {item.account} · {item.date}
                  </p>
                </div>
              </div>

              <span
                className={`text-sm font-semibold shrink-0 ${
                  item.type === "income"
                    ? "text-emerald-600"
                    : "text-zinc-900"
                }`}
              >
                {item.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountsExample;