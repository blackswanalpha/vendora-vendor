import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, DollarSign, Star } from "lucide-react";

interface Service {
  id: string;
  name: string;
  description: string;
  price: {
    amount: number;
    period: string;
  };
  category: string;
  availability: string;
  rating: number;
  activeUsers: number;
}

const services: Service[] = [
  {
    id: "1",
    name: "Premium Support",
    description: "24/7 dedicated customer support with priority response",
    price: { amount: 299, period: "month" },
    category: "Support",
    availability: "Available",
    rating: 4.8,
    activeUsers: 234,
  },
  {
    id: "2",
    name: "Inventory Management",
    description: "Advanced inventory tracking and management system",
    price: { amount: 199, period: "month" },
    category: "Operations",
    availability: "Available",
    rating: 4.5,
    activeUsers: 567,
  },
  {
    id: "3",
    name: "Marketing Automation",
    description: "Automated marketing campaigns and analytics",
    price: { amount: 399, period: "month" },
    category: "Marketing",
    availability: "Limited",
    rating: 4.7,
    activeUsers: 189,
  },
];

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{service.name}</CardTitle>
          <Badge
            variant={
              service.availability === "Available" ? "default" : "secondary"
            }
          >
            {service.availability}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">{service.description}</p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>
                ${service.price.amount}/{service.price.period}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>{service.activeUsers} active users</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-muted-foreground" />
              <span>{service.rating}/5.0 rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">{service.category}</Badge>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" size="sm">
              Learn More
            </Button>
            <Button size="sm">Subscribe</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ServiceCatalog = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">
            Service Catalog
          </h3>
          <p className="text-muted-foreground">
            Browse and subscribe to available services
          </p>
        </div>
        <Button>
          <DollarSign className="mr-2 h-4 w-4" />
          View Pricing Plans
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCatalog;
