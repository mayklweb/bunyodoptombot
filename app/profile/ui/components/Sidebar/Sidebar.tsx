import { NAV_ITEMS } from "@/app/profile/model/constants/constants";
import { NavKey } from "@/app/profile/model/types/types";

interface SidebarProps {
  activeNav: NavKey;
  onNavChange: (key: NavKey) => void;
}

export function Sidebar({ activeNav, onNavChange }: SidebarProps) {
  return (
    <div className="w-2/7 flex flex-col gap-3">
      {NAV_ITEMS.map(({ key, icon: Icon, label }) => {
        const isActive = activeNav === key;
        return (
          <button
            key={key}
            onClick={() => onNavChange(key)}
            className={`w-full px-4 py-3 border rounded-xl flex items-center gap-2 transition-colors
              ${isActive
                ? "bg-secondary border-secondary text-primary"
                : "border-primary text-primary hover:bg-primary/10"
              }`}
          >
            <Icon className="w-6 h-6 text-primary" />
            <span className="text-base font-semibold">{label}</span>
          </button>
        );
      })}
    </div>
  );
}