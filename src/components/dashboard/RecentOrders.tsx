import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

const orders = [
  {
    id: "1",
    customer: "John Doe",
    email: "john@example.com",
    amount: "$125.00",
    status: "Processing",
    avatar: "JD",
  },
  {
    id: "2",
    customer: "Jane Smith",
    email: "jane@example.com",
    amount: "$79.00",
    status: "Shipped",
    avatar: "JS",
  },
  {
    id: "3",
    customer: "Robert Johnson",
    email: "robert@example.com",
    amount: "$459.00",
    status: "Delivered",
    avatar: "RJ",
  },
  {
    id: "4",
    customer: "Emily Brown",
    email: "emily@example.com",
    amount: "$89.00",
    status: "Processing",
    avatar: "EB",
  },
];

export function RecentOrders() {
  return (
    <ScrollArea className="h-[350px]">
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex items-center gap-4 rounded-lg border p-4"
          >
            <Avatar>
              <AvatarFallback>{order.avatar}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">{order.customer}</p>
              <p className="text-sm text-muted-foreground">{order.email}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">{order.amount}</p>
              <p className="text-sm text-muted-foreground">{order.status}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
