import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Mail,
  Package,
  Megaphone,
  MoreVertical,
  Eye,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NotificationType = "order" | "message" | "promotion";

interface NotificationItemProps {
  id?: string;
  type?: NotificationType;
  message?: string;
  timestamp?: string;
  isRead?: boolean;
  onRead?: (id: string) => void;
  onAction?: (id: string, action: string) => void;
}

const getNotificationIcon = (type: NotificationType) => {
  switch (type) {
    case "order":
      return <Package className="h-5 w-5" />;
    case "message":
      return <Mail className="h-5 w-5" />;
    case "promotion":
      return <Megaphone className="h-5 w-5" />;
    default:
      return <Bell className="h-5 w-5" />;
  }
};

const NotificationItem = ({
  id = "1",
  type = "message",
  message = "New message received from vendor",
  timestamp = "5 mins ago",
  isRead = false,
  onRead = () => {},
  onAction = () => {},
}: NotificationItemProps) => {
  return (
    <div
      className={`flex items-center gap-3 p-4 border-b transition-colors ${isRead ? "bg-white" : "bg-blue-50"}`}
    >
      <div className="flex-shrink-0 text-gray-500">
        {getNotificationIcon(type)}
      </div>

      <div className="flex-grow min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{message}</p>
        <div className="flex items-center gap-2 mt-1">
          <Badge variant={isRead ? "secondary" : "default"} className="text-xs">
            {type}
          </Badge>
          <span className="text-xs text-gray-500">{timestamp}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        {!isRead && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onRead(id)}
            className="h-8 w-8"
          >
            <Eye className="h-4 w-4" />
          </Button>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onAction(id, "view")}>
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onAction(id, "delete")}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NotificationItem;
