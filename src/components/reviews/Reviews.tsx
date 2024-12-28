import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Star,
  MessageSquare,
  Flag,
  ThumbsUp,
  Filter,
  Search,
} from "lucide-react";

const reviews = [
  {
    id: "1",
    rating: 5,
    title: "Great product and service!",
    comment:
      "The quality exceeded my expectations. Will definitely order again.",
    customer: "John Doe",
    date: "2024-01-15",
    status: "published",
    product: "Wireless Headphones",
    helpful: 12,
    response: "Thank you for your feedback!",
  },
  {
    id: "2",
    rating: 3,
    title: "Average experience",
    comment: "Product is okay but shipping took longer than expected.",
    customer: "Jane Smith",
    date: "2024-01-14",
    status: "pending",
    product: "Smart Watch",
    helpful: 5,
    response: null,
  },
];

const ReviewCard = ({ review }: { review: any }) => {
  return (
    <Card className="group">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <Badge
                  variant={
                    review.status === "published" ? "default" : "secondary"
                  }
                >
                  {review.status}
                </Badge>
              </div>
              <h4 className="font-semibold mt-2">{review.title}</h4>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="opacity-0 group-hover:opacity-100"
            >
              <Flag className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">{review.comment}</p>

          <div className="flex items-center justify-between text-sm">
            <div>
              <p className="font-medium">{review.customer}</p>
              <p className="text-muted-foreground">{review.date}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                <span>{review.helpful}</span>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                Reply
              </Button>
            </div>
          </div>

          {review.response && (
            <div className="mt-4 pl-4 border-l-2">
              <p className="text-sm text-muted-foreground">{review.response}</p>
              <p className="text-sm font-medium mt-1">Store Response</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const Reviews = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Reviews</h2>
        <p className="text-muted-foreground">
          Manage and respond to customer reviews
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Average Rating
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span className="text-2xl font-bold">4.5</span>
              <span className="text-muted-foreground">/5.0</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,234</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">92%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Pending Reviews
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">15</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search reviews..." className="pl-9" />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList>
          <TabsTrigger value="all">All Reviews</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="published">Published</TabsTrigger>
          <TabsTrigger value="flagged">Flagged</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedTab} className="mt-6 space-y-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reviews;
