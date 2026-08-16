import {
  Banknote,
  Calendar,
  CreditCard,
  MoreHorizontal,
  X,
} from "lucide-react";

import ProfileAvatar from "./UI/ProfileAvatar";
import CalendarDay from "./UI/CalendarDay";
import EventCard from "./UI/EventCard";

const RightPanel = ({ onClose }) => {
  return (
    <div className="space-y-6 pb-6">
      {/* Top action header for mobile / desktop */}
      <div className="flex justify-between items-center px-4 pt-2 xl:pt-0 xl:px-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 xl:hidden">
          Agenda & Profile
        </span>
        {onClose ? (
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/60 rounded-lg xl:hidden transition-colors cursor-pointer ml-auto"
            aria-label="Close panel"
          >
            <X size={20} />
          </button>
        ) : (
          <div className="flex justify-end w-full">
            <MoreHorizontal
              size={20}
              className="text-zinc-500 hover:text-zinc-700 cursor-pointer"
            />
          </div>
        )}
      </div>

      {/* Profile Card */}
      <div className="bg-transparent px-4 xl:px-6">
        <ProfileAvatar
          src="/user-1.png"
          name="John Doe"
          title="Financial Advisor"
        />
      </div>

      {/* Financial Calendar */}
      <div className="px-4 xl:px-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-base sm:text-lg font-bold text-zinc-900">
            My Agenda
          </h3>

          <button className="text-xs sm:text-sm text-blue-600 hover:underline cursor-pointer">
            View All
          </button>
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1 text-center mb-4">
          <CalendarDay day="Mo" date="12" />
          <CalendarDay day="Tu" date="13" isActive={true} />
          <CalendarDay day="We" date="14" />
          <CalendarDay day="Th" date="15" />
          <CalendarDay day="Fr" date="16" />
          <CalendarDay day="Sa" date="17" />
          <CalendarDay day="Su" date="18" />
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="space-y-3 px-4 xl:px-6">
        <EventCard
          time="12:30-13:30"
          title="Quarterly Review with J. Smith"
          participants={2}
          icon={Calendar}
        />

        <EventCard
          time="12:30-15:15"
          title="Payment Reminder: Utility Bill"
          icon={CreditCard}
        />

        <EventCard
          time="16:30-17:00"
          title="Investment Call: New Portfolio"
          icon={Banknote}
        />

        <EventCard
          time="18:00-19:00"
          title="Meeting with S. Green"
          participants={1}
          icon={Banknote}
        />
      </div>

      {/* All Events Button */}
      <div className="px-4 xl:px-6">
        <button
          className="w-full mt-2 bg-zinc-50 border border-zinc-300 text-zinc-800 cursor-pointer duration-100 ease-in hover:shadow-md text-sm py-2.5 rounded-lg hover:bg-zinc-200 transition-colors font-medium"
        >
          All upcoming events
        </button>
      </div>
    </div>
  );
};

export default RightPanel;