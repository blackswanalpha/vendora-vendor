import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Bell, Mail, Package, Megaphone } from "lucide-react";

interface NotificationFilter {
  id: string;
  label: string;
  icon: React.ReactNode;
  count?: number;
}

interface NotificationFiltersProps {
  selectedFilter?: string;
  onFilterChange?: (value: string) => void;
  filters?: NotificationFilter[];
}

const defaultFilters: NotificationFilter[] = [
  {
    id: "all",
    label: "All",
    icon: <Bell className="h-4 w-4" />,
    count: 12,
  },
  {
    id: "orders",
    label: "Orders",
    icon: <Package className="h-4 w-4" />,
    count: 5,
  },
  {
    id: "messages",
    label: "Messages",
    icon: <Mail className="h-4 w-4" />,
    count: 4,
  },
  {
    id: "promotions",
    label: "Promotions",
    icon: <Megaphone className="h-4 w-4" />,
    count: 3,
  },
];

const NotificationFilters = ({
  selectedFilter = "all",
  onFilterChange = () => {},
  filters = defaultFilters,
}: NotificationFiltersProps) => {
  return (
    <div className="w-full bg-white border-b">
      <Tabs
        defaultValue={selectedFilter}
        onValueChange={onFilterChange}
        className="w-full"
      >
        <TabsList className="w-full justify-start gap-2 p-2">
          {filters.map((filter) => (
            <TabsTrigger
              key={filter.id}
              value={filter.id}
              className="flex items-center gap-2"
            >
              {filter.icon}
              <span>{filter.label}</span>
              {filter.count !== undefined && (
                <Badge variant="secondary" className="ml-1 px-2 py-0.5 text-xs">
                  {filter.count}
                </Badge>
              )}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default NotificationFilters;
