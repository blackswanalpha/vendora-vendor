import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import NotificationItem from "./NotificationItem";

interface Notification {
  id: string;
  type: "order" | "message" | "promotion";
  message: string;
  timestamp: string;
  isRead: boolean;
}

interface NotificationListProps {
  notifications?: Notification[];
  onNotificationRead?: (id: string) => void;
  onNotificationAction?: (id: string, action: string) => void;
}

const defaultNotifications: Notification[] = [
  {
    id: "1",
    type: "order",
    message: "New order #1234 has been placed",
    timestamp: "2 mins ago",
    isRead: false,
  },
  {
    id: "2",
    type: "message",
    message: "Customer support message received",
    timestamp: "1 hour ago",
    isRead: true,
  },
  {
    id: "3",
    type: "promotion",
    message: "Your promotion campaign is live",
    timestamp: "2 hours ago",
    isRead: false,
  },
];

const NotificationList = ({
  notifications = defaultNotifications,
  onNotificationRead = () => {},
  onNotificationAction = () => {},
}: NotificationListProps) => {
  return (
    <div className="bg-white w-full h-[450px] border rounded-md">
      <ScrollArea className="h-full">
        {notifications.length === 0 ? (
          <div className="flex items-center justify-center h-full p-4 text-gray-500">
            No notifications
          </div>
        ) : (
          <div className="divide-y">
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                id={notification.id}
                type={notification.type}
                message={notification.message}
                timestamp={notification.timestamp}
                isRead={notification.isRead}
                onRead={onNotificationRead}
                onAction={onNotificationAction}
              />
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default NotificationList;
