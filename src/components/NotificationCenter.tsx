import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import NotificationList from "./notifications/NotificationList";
import NotificationFilters from "./notifications/NotificationFilters";
import NotificationPreferences from "./notifications/NotificationPreferences";

interface NotificationCenterProps {
  unreadCount?: number;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const NotificationCenter = ({
  unreadCount = 5,
  isOpen,
  onOpenChange,
}: NotificationCenterProps) => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <Popover open={isOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative"
          aria-label="Open notifications"
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0" align="end" sideOffset={5}>
        <div className="bg-white rounded-lg shadow-lg">
          <NotificationFilters
            selectedFilter={activeTab}
            onFilterChange={setActiveTab}
          />
          <Tabs value={activeTab} defaultValue={activeTab} className="w-full">
            <TabsContent value="all" className="m-0">
              <NotificationList />
            </TabsContent>
            <TabsContent value="orders" className="m-0">
              <NotificationList
                notifications={[
                  {
                    id: "1",
                    type: "order",
                    message: "New order #1234 has been placed",
                    timestamp: "2 mins ago",
                    isRead: false,
                  },
                ]}
              />
            </TabsContent>
            <TabsContent value="messages" className="m-0">
              <NotificationList
                notifications={[
                  {
                    id: "2",
                    type: "message",
                    message: "Customer support message received",
                    timestamp: "1 hour ago",
                    isRead: true,
                  },
                ]}
              />
            </TabsContent>
            <TabsContent value="promotions" className="m-0">
              <NotificationList
                notifications={[
                  {
                    id: "3",
                    type: "promotion",
                    message: "Your promotion campaign is live",
                    timestamp: "2 hours ago",
                    isRead: false,
                  },
                ]}
              />
            </TabsContent>
          </Tabs>
          <div className="p-4 border-t">
            <NotificationPreferences />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationCenter;
