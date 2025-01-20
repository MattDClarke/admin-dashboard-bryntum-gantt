import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, LayoutDashboard, BarChart, FileText, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", to: "/" },
  { icon: BarChart, label: "Analytics", to: "/analytics" },
  { icon: FileText, label: "Documentation", to: "/documentation" },
  { icon: Settings, label: "Settings", to: "/settings" },
];

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside
      className={cn(
        "h-screen bg-white border-r px-4 pt-8 pb-4 transition-all duration-300",
        expanded ? "w-64" : "w-20"
      )}
    >
      <div className="flex justify-between items-center mb-8 px-2">
        {expanded && (
          <h2 className="font-handwritten text-xl">Company name</h2>
        )}
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
        >
          <Menu size={20} />
        </button>
      </div>

      <nav className="flex flex-col gap-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-4 px-3 py-2 rounded-lg transition-colors",
                "hover:bg-gray-100",
                isActive ? "text-blue-600 bg-blue-50 hover:bg-blue-50" : "text-gray-500"
              )
            }
          >
            <item.icon size={20} />
            {expanded && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};