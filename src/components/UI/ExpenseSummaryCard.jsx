const ExpenseSummaryCard = ({
  label,
  amount,
  icon: Icon,
  colorClass,
  iconColor,
}) => {
  return (
    <div
      className={`${
        colorClass || "bg-amber-200"
      } p-4 sm:p-5 rounded-xl flex items-end justify-between cursor-pointer card-hover transition-all duration-150`}
    >
      {/* Content */}
      <div className="flex flex-col gap-5 sm:gap-8 md:gap-10">
        <p className="text-xs sm:text-sm font-medium text-zinc-700">
          {label}
        </p>

        <p className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
          {amount}
        </p>
      </div>

      {/* Icon */}
      {Icon && (
        <div className="p-2 sm:p-2.5 rounded-full bg-white/90 shadow-xs shrink-0">
          <Icon
            size={20}
            className={iconColor || "text-zinc-600"}
          />
        </div>
      )}
    </div>
  );
};

export default ExpenseSummaryCard;