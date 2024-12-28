import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart,
  Megaphone,
  Star,
  HelpCircle,
  User,
  Settings,
  Store,
  Boxes,
  Users,
  LogOut,
  Video,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Store Manager", href: "/store", icon: Store },
  { name: "Products", href: "/products", icon: Package },
  { name: "Inventory", href: "/inventory", icon: Boxes },
  { name: "Orders", href: "/orders", icon: ShoppingCart },
  { name: "LiveStream", href: "/livestream", icon: Video },
  { name: "Analytics", href: "/analytics", icon: BarChart },
  { name: "Marketing", href: "/marketing", icon: Megaphone },
  { name: "Reviews", href: "/reviews", icon: Star },
  { name: "Service Providers", href: "/providers", icon: Users },
  { name: "Support", href: "/support", icon: HelpCircle },
];

const accountLinks = [
  { name: "Profile", href: "/profile", icon: User },
  { name: "Settings", href: "/settings", icon: Settings },
];

const Sidebar = () => {
  return (
    <div className="w-64 min-h-[calc(100vh-4rem)] border-r bg-white flex flex-col">
      <nav className="flex-1 flex flex-col gap-1 p-4">
        <div className="space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )
              }
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span className="truncate">{item.name}</span>
            </NavLink>
          ))}
        </div>

        <Separator className="my-4" />

        <div className="space-y-1">
          {accountLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )
              }
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span className="truncate">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-red-500 hover:text-red-500 hover:bg-red-50"
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          <span className="truncate">Logout</span>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
