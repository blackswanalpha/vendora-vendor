import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Search } from "lucide-react";

const providers = [
  {
    id: "1",
    name: "Acme Logistics",
    type: "Shipping",
    status: "Active",
    rating: 4.8,
    completedOrders: 1234,
  },
  {
    id: "2",
    name: "FastTrack Delivery",
    type: "Delivery",
    status: "Active",
    rating: 4.5,
    completedOrders: 856,
  },
  {
    id: "3",
    name: "SecureStore Warehousing",
    type: "Storage",
    status: "Inactive",
    rating: 4.2,
    completedOrders: 432,
  },
];

const Providers = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Service Providers
          </h2>
          <p className="text-muted-foreground">
            Manage your service provider network
          </p>
        </div>

        <Button className="gap-2">
          <UserPlus className="h-4 w-4" />
          Add Provider
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search providers..." className="pl-9 w-full" />
        </div>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
            <TabsTrigger value="delivery">Delivery</TabsTrigger>
            <TabsTrigger value="storage">Storage</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {providers.map((provider) => (
          <Card key={provider.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{provider.name}</CardTitle>
                <Badge
                  variant={
                    provider.status === "Active" ? "default" : "secondary"
                  }
                >
                  {provider.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Type</p>
                    <p className="font-medium">{provider.type}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Rating</p>
                    <p className="font-medium">{provider.rating}/5.0</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Completed Orders</p>
                    <p className="font-medium">{provider.completedOrders}</p>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button size="sm">Contact</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Providers;
