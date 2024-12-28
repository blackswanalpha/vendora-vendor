import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Bell, Zap, Shield } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">VendorHub</div>
          <div className="flex items-center gap-4">
            <Link to="/subscription">
              <Button variant="ghost">Pricing</Button>
            </Link>
            <Link to="/dashboard">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <section className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Streamline Your Vendor Communications
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            A comprehensive platform for managing all your vendor interactions,
            notifications, and updates in one place.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/subscription">
              <Button size="lg" className="gap-2">
                <Zap className="h-4 w-4" />
                Start Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </section>

        <section className="container mx-auto px-4 py-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6 space-y-2">
                <MessageSquare className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Real-time Chat</h3>
                <p className="text-muted-foreground">
                  Instant communication with vendors through our integrated
                  messaging system.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Bell className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Smart Notifications</h3>
                <p className="text-muted-foreground">
                  Stay updated with customizable alerts for orders, messages,
                  and promotions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Shield className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Secure Platform</h3>
                <p className="text-muted-foreground">
                  Enterprise-grade security for all your vendor communications
                  and data.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Zap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Quick Actions</h3>
                <p className="text-muted-foreground">
                  Streamlined workflows for common tasks and vendor
                  interactions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            © 2024 VendorHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
