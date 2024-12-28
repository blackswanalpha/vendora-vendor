import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  MessageSquare,
  Clock,
  Users,
  Filter,
  Search,
  Phone,
  Mail,
} from "lucide-react";

const tickets = [
  {
    id: "1",
    subject: "Order Delivery Issue",
    customer: "John Doe",
    status: "open",
    priority: "high",
    category: "Shipping",
    lastUpdate: "10 mins ago",
    messages: 3,
  },
  {
    id: "2",
    subject: "Product Return Request",
    customer: "Jane Smith",
    status: "pending",
    priority: "medium",
    category: "Returns",
    lastUpdate: "1 hour ago",
    messages: 2,
  },
];

const TicketCard = ({ ticket }: { ticket: any }) => {
  return (
    <Card className="group">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Badge
                  variant={ticket.status === "open" ? "default" : "secondary"}
                >
                  {ticket.status}
                </Badge>
                <Badge
                  variant={
                    ticket.priority === "high"
                      ? "destructive"
                      : ticket.priority === "medium"
                        ? "default"
                        : "secondary"
                  }
                >
                  {ticket.priority}
                </Badge>
                <Badge variant="outline">{ticket.category}</Badge>
              </div>
              <h4 className="font-semibold mt-2">{ticket.subject}</h4>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div>
              <p className="font-medium">{ticket.customer}</p>
              <p className="text-muted-foreground">
                Last update: {ticket.lastUpdate}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                <span>{ticket.messages}</span>
              </div>
              <Button size="sm">View Ticket</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Support = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Support</h2>
        <p className="text-muted-foreground">Manage customer support tickets</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-muted-foreground" />
              <span className="text-2xl font-bold">24</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Avg Response Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className="text-2xl font-bold">2.5h</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Resolution Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span className="text-2xl font-bold">94%</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Contact Channels
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <MessageSquare className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search tickets..." className="pl-9" />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Tickets</TabsTrigger>
          <TabsTrigger value="open">Open</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="closed">Closed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6 space-y-6">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Support;
