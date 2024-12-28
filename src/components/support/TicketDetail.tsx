import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { MessageSquare, User, Clock, Send, PaperclipIcon } from "lucide-react";

interface TicketDetailProps {
  ticketId: string;
  onClose: () => void;
}

const messages = [
  {
    id: "1",
    type: "customer",
    content:
      "I haven't received my order yet. It's been 5 days since the estimated delivery date.",
    sender: "John Doe",
    timestamp: "2024-01-15 10:30 AM",
  },
  {
    id: "2",
    type: "agent",
    content:
      "I apologize for the delay. Let me check the status of your order right away.",
    sender: "Support Agent",
    timestamp: "2024-01-15 10:35 AM",
  },
];

const TicketDetail = ({ ticketId, onClose }: TicketDetailProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold">Ticket #1234</h3>
          <p className="text-sm text-muted-foreground">
            Created on Jan 15, 2024
          </p>
        </div>
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Conversation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-4 ${message.type === "agent" ? "flex-row-reverse" : ""}`}
                  >
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div
                      className={`flex-1 space-y-1 ${message.type === "agent" ? "text-right" : ""}`}
                    >
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium">{message.sender}</span>
                        <span className="text-muted-foreground">
                          {message.timestamp}
                        </span>
                      </div>
                      <div
                        className={`p-3 rounded-lg inline-block ${message.type === "agent" ? "bg-primary text-primary-foreground ml-auto" : "bg-muted"}`}
                      >
                        {message.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <textarea
                  className="w-full min-h-[100px] p-3 rounded-lg border resize-none"
                  placeholder="Type your message..."
                />
                <div className="flex justify-between items-center">
                  <Button variant="outline" size="icon">
                    <PaperclipIcon className="h-4 w-4" />
                  </Button>
                  <Button className="gap-2">
                    <Send className="h-4 w-4" />
                    Send Reply
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Ticket Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <Badge variant="default">Open</Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Priority</p>
                <Badge variant="destructive">High</Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Category</p>
                <Badge variant="outline">Shipping</Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Assigned To</p>
                <p className="font-medium">Support Agent</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Response Time</p>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>5 minutes</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">John Doe</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">john@example.com</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Previous Tickets
                </p>
                <p className="font-medium">3</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Related Order</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="font-medium">Order #ORD-001</p>
                <p className="text-sm text-muted-foreground">
                  Placed on Jan 10, 2024
                </p>
                <Button variant="outline" className="w-full mt-2">
                  View Order
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;
