const AccountCard = ({
  name,
  description,
  Icon,
  iconColor,
  bgColor,
  actionLabel,
  actionColor,
}) => {
  return (
    <div className="flex items-center cursor-pointer justify-between gap-3 bg-white p-3 sm:p-4 rounded-xl card-hover border border-zinc-100 hover:shadow-md hover:shadow-zinc-200/80 transition-all duration-100 ease-in">
      {/* Account Info */}
      <div className="flex items-center space-x-3 min-w-0">
        <div
          className={`w-9 h-9 ${
            bgColor || "bg-zinc-200"
          } rounded-full flex items-center justify-center overflow-hidden shrink-0`}
        >
          {Icon ? (
            <Icon
              size={18}
              className={iconColor || "text-zinc-500"}
            />
          ) : (
            <span className="text-xs text-zinc-500 flex items-center justify-center h-full">
              DP
            </span>
          )}
        </div>

        <div className="min-w-0">
          <p className="text-sm font-medium text-zinc-900 truncate">
            {name}
          </p>

          <p className="text-xs text-zinc-500 truncate">
            {description}
          </p>
        </div>
      </div>

      {/* Action Badge */}
      {actionLabel && (
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 whitespace-nowrap ${
            actionColor || "bg-zinc-100 text-zinc-700"
          }`}
        >
          {actionLabel}
        </span>
      )}
    </div>
  );
};

export default AccountCard;