
const ListItemCard = ({
  title,
  subtitle,
  value,
  valueColor,
  src,
}) => {
  return (
    <div className="flex items-center justify-between gap-3 cursor-pointer bg-white p-3 sm:p-4 hover:shadow-md hover:shadow-zinc-200/80 transition-all duration-100 ease-in rounded-xl border border-zinc-100">
      <div className="flex items-center space-x-3 min-w-0">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shrink-0 bg-zinc-100 flex items-center justify-center">
          {src ? (
            <img
              src={src}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-xs text-zinc-500 font-medium">DP</span>
          )}
        </div>

        <div className="min-w-0">
          <p className="text-sm font-medium text-zinc-900 truncate">
            {title}
          </p>

          <p className="text-xs text-zinc-500 truncate">
            {subtitle}
          </p>
        </div>
      </div>

      <span className={`text-sm font-semibold shrink-0 ${valueColor || "text-zinc-900"}`}>
        {value}
      </span>
    </div>
  );
};

export default ListItemCard;