import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Bell, Mail, Package, Megaphone } from "lucide-react";

interface NotificationPreference {
  id: string;
  type: string;
  label: string;
  icon: React.ReactNode;
  enabled: boolean;
}

interface NotificationPreferencesProps {
  preferences?: NotificationPreference[];
  onPreferenceChange?: (id: string, enabled: boolean) => void;
}

const NotificationPreferences = ({
  preferences = [
    {
      id: "1",
      type: "orders",
      label: "Order Updates",
      icon: <Package className="h-5 w-5" />,
      enabled: true,
    },
    {
      id: "2",
      type: "messages",
      label: "New Messages",
      icon: <Mail className="h-5 w-5" />,
      enabled: true,
    },
    {
      id: "3",
      type: "promotions",
      label: "Promotional Alerts",
      icon: <Megaphone className="h-5 w-5" />,
      enabled: false,
    },
    {
      id: "4",
      type: "system",
      label: "System Notifications",
      icon: <Bell className="h-5 w-5" />,
      enabled: true,
    },
  ],
  onPreferenceChange = () => {},
}: NotificationPreferencesProps) => {
  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <h3 className="text-lg font-semibold">Notification Preferences</h3>
        <p className="text-sm text-gray-500">
          Choose which notifications you'd like to receive
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {preferences.map((pref) => (
            <div
              key={pref.id}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center space-x-3">
                <div className="text-gray-500">{pref.icon}</div>
                <Label
                  htmlFor={`notification-${pref.id}`}
                  className="cursor-pointer"
                >
                  <div className="font-medium">{pref.label}</div>
                  <div className="text-sm text-gray-500">
                    Receive notifications about {pref.type}
                  </div>
                </Label>
              </div>
              <Switch
                id={`notification-${pref.id}`}
                checked={pref.enabled}
                onCheckedChange={(checked) =>
                  onPreferenceChange(pref.id, checked)
                }
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationPreferences;
