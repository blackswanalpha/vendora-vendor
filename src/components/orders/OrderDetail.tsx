import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Package, Truck, CreditCard, MessageSquare, Clock } from "lucide-react";

interface OrderDetailProps {
  orderId: string;
  onClose: () => void;
}

const OrderDetail = ({ orderId, onClose }: OrderDetailProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold">Order #ORD-001</h3>
          <p className="text-sm text-muted-foreground">
            Placed on Jan 15, 2024
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button>Print Invoice</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Status</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$299.99</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Items</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">3</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Customer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-muted-foreground">john@example.com</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="items" className="space-y-4">
        <TabsList>
          <TabsTrigger value="items">Items</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="items">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 py-4 border-b last:border-0"
                  >
                    <div className="h-16 w-16 bg-muted rounded-lg flex items-center justify-center">
                      <Package className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Product Name</p>
                      <p className="text-sm text-muted-foreground">
                        SKU: PRD-001
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$99.99</p>
                      <p className="text-sm text-muted-foreground">Qty: 1</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shipping">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <Truck className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Standard Shipping</p>
                  <p className="text-sm text-muted-foreground">
                    Estimated delivery: 3-5 business days
                  </p>
                </div>
              </div>
              <Separator />
              <div>
                <p className="font-medium mb-2">Shipping Address</p>
                <p className="text-sm text-muted-foreground">John Doe</p>
                <p className="text-sm text-muted-foreground">123 Main St</p>
                <p className="text-sm text-muted-foreground">
                  New York, NY 10001
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Credit Card</p>
                  <p className="text-sm text-muted-foreground">
                    **** **** **** 1234
                  </p>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Subtotal</p>
                  <p className="font-medium">$279.99</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Shipping</p>
                  <p className="font-medium">$20.00</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Tax</p>
                  <p className="font-medium">$0.00</p>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <p className="font-medium">Total</p>
                  <p className="font-bold">$299.99</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  {
                    icon: Clock,
                    text: "Order placed",
                    time: "2024-01-15 10:30 AM",
                  },
                  {
                    icon: CreditCard,
                    text: "Payment confirmed",
                    time: "2024-01-15 10:31 AM",
                  },
                  {
                    icon: Package,
                    text: "Order processing",
                    time: "2024-01-15 11:00 AM",
                  },
                ].map((event, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <event.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{event.text}</p>
                      <p className="text-sm text-muted-foreground">
                        {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <MessageSquare className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <textarea
                    className="w-full min-h-[100px] p-2 rounded-md border resize-none"
                    placeholder="Add a note..."
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Add Note</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrderDetail;
