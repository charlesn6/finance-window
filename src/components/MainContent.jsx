import {
  Droplet,
  Film,
  Goal,
  Landmark,
  ShoppingBasket,
  TrendingDown,
  Utensils,
} from "lucide-react";

import ExpenseSummaryCard from "./UI/ExpenseSummaryCard";
import ListItemCard from "./UI/ListItemCard";
import AccountCard from "./UI/AccountCard";
import Payment from "./UI/Payment";

const MainContent = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Greeting */}
      <div className="px-1 py-1 sm:px-2 flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-900">
            Good morning, John
          </h1>

          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            Here's an overview of your finances.
          </p>
        </div>
      </div>

      {/* Expense Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-5 lg:gap-6">
        <ExpenseSummaryCard
          label="Spent This Month"
          amount="$2,450"
          icon={TrendingDown}
          colorClass="bg-yellow-200"
          iconColor="text-red-500"
        />

        <ExpenseSummaryCard
          label="Remaining Budget"
          amount="$1,550"
          icon={Goal}
          colorClass="bg-blue-200"
          iconColor="text-emerald-500"
        />

        <ExpenseSummaryCard
          label="Upcoming Bills"
          amount="$780"
          icon={Landmark}
          colorClass="bg-green-200"
          iconColor="text-orange-500"
        />
      </div>

      {/* Recent Transactions & Budgets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Spending */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-zinc-200/70 shadow-xs">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base sm:text-lg tracking-tight font-bold text-zinc-900">
              Recent Spending
            </h3>
            <span className="text-xs text-zinc-500">Latest 4</span>
          </div>

          <div className="space-y-2.5">
            <ListItemCard
              title="Supermarket Run"
              subtitle="Groceries"
              value="-$85.00"
              valueColor="text-red-600"
              src="/user-2.png"
            />

            <ListItemCard
              title="Online Subscription"
              subtitle="Software"
              value="-$19.99"
              valueColor="text-red-600"
              src="/user-3.png"
            />

            <ListItemCard
              title="ATM Withdrawal"
              subtitle="Cash"
              value="-$100.00"
              valueColor="text-red-600"
              src="/user-4.png"
            />

            <ListItemCard
              title="Paycheck Deposit"
              subtitle="Income"
              value="+$3,500.00"
              valueColor="text-emerald-600"
              src="/user-5.png"
            />
          </div>
        </div>

        {/* Budgets */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-zinc-200/70 shadow-xs">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base sm:text-lg tracking-tight font-bold text-zinc-900">
              My Budgets
            </h3>

            <button
              type="button"
              className="text-xs sm:text-sm font-medium cursor-pointer text-blue-600 hover:underline"
            >
              Manage All
            </button>
          </div>

          <div className="space-y-2.5">
            {/* Groceries */}
            <AccountCard
              name="Groceries"
              description="Spending: $450 / $600"
              actionLabel="75% Used"
              actionColor="bg-rose-50 text-rose-700 border border-rose-200/50"
              Icon={ShoppingBasket}
              bgColor="bg-emerald-100"
              iconColor="text-emerald-700"
            />

            {/* Restaurants */}
            <AccountCard
              name="Restaurants"
              description="Spending: $120 / $300"
              actionLabel="43% Used"
              actionColor="bg-emerald-50 text-emerald-700 border border-emerald-200/50"
              Icon={Utensils}
              bgColor="bg-amber-100"
              iconColor="text-amber-700"
            />

            {/* Utilities */}
            <AccountCard
              name="Utilities"
              description="Spending: $200 / $200"
              actionLabel="100% Used"
              actionColor="bg-rose-50 text-rose-700 border border-rose-200/50"
              Icon={Droplet}
              bgColor="bg-blue-100"
              iconColor="text-blue-700"
            />

            {/* Entertainment */}
            <AccountCard
              name="Entertainment"
              description="Spending: $50 / $150"
              actionLabel="33% Used"
              actionColor="bg-blue-50 text-blue-700 border border-blue-200/50"
              Icon={Film}
              bgColor="bg-pink-100"
              iconColor="text-pink-700"
            />
          </div>
        </div>
      </div>

      {/* Scheduled Payments */}
      <Payment />
    </div>
  );
};

export default MainContent;