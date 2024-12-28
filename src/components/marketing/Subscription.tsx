import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small businesses",
    features: [
      "Up to 5 team members",
      "Basic notifications",
      "Real-time chat",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$79",
    description: "Best for growing businesses",
    features: [
      "Up to 20 team members",
      "Advanced notifications",
      "Priority support",
      "Analytics dashboard",
      "Custom integrations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Custom workflows",
      "24/7 priority support",
      "Advanced analytics",
      "API access",
      "Custom branding",
    ],
    popular: false,
  },
];

const Subscription = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            VendorHub
          </Link>
          <Link to="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-muted-foreground">
            Start managing your vendor communications effectively
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.popular ? "border-primary shadow-lg" : ""}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  {plan.popular && (
                    <Badge variant="default">Most Popular</Badge>
                  )}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full mt-6"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need a custom plan?</h2>
          <p className="text-muted-foreground mb-6">
            Contact us for a tailored solution that fits your specific needs.
          </p>
          <Button variant="outline" size="lg">
            Contact Sales
          </Button>
        </div>
      </main>

      <footer className="border-t bg-white mt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            © 2024 VendorHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Subscription;
