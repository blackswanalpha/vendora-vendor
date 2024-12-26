import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Home() {
  return (
    <div className="w-full space-y-8">
      <h2 className="text-3xl font-bold">Welcome to Vendor Hub</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">24</p>
            <p className="text-muted-foreground">Active Orders</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12</p>
            <p className="text-muted-foreground">Unread Messages</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Promotions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">3</p>
            <p className="text-muted-foreground">Active Campaigns</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Home;
