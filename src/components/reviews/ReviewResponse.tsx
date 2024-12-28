import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, Save, Send } from "lucide-react";

const responseTemplates = [
  {
    id: "1",
    name: "Positive Review Response",
    content:
      "Thank you for your positive feedback! We're delighted to hear that you had a great experience with {product}. Your satisfaction is our top priority, and we look forward to serving you again.",
    category: "Positive",
  },
  {
    id: "2",
    name: "Service Issue Response",
    content:
      "We apologize for the inconvenience you experienced with {issue}. We take your feedback seriously and would like to make things right. Please contact our support team at support@example.com with your order details.",
    category: "Negative",
  },
];

interface ReviewResponseProps {
  review: any;
  onClose: () => void;
  onSubmit: (response: string) => void;
}

const ReviewResponse = ({ review, onClose, onSubmit }: ReviewResponseProps) => {
  const [response, setResponse] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [sentiment, setSentiment] = useState("neutral");

  const handleTemplateSelect = (template: any) => {
    setResponse(template.content);
    setSelectedTemplate(template.id);
  };

  const handleResponseChange = (value: string) => {
    setResponse(value);
    // Analyze sentiment
    if (value.length > 0) {
      // Simple sentiment analysis (replace with actual implementation)
      const positiveWords = ["thank", "great", "happy", "pleased"];
      const negativeWords = ["sorry", "apologize", "issue", "problem"];
      const lowerValue = value.toLowerCase();

      if (positiveWords.some((word) => lowerValue.includes(word))) {
        setSentiment("positive");
      } else if (negativeWords.some((word) => lowerValue.includes(word))) {
        setSentiment("negative");
      } else {
        setSentiment("neutral");
      }
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Respond to Review</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="p-4 bg-muted rounded-lg space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant={review.rating >= 4 ? "default" : "destructive"}>
              {review.rating}/5
            </Badge>
            <span className="text-sm font-medium">{review.customer}</span>
          </div>
          <p className="text-sm">{review.comment}</p>
        </div>

        <Tabs defaultValue="write">
          <TabsList>
            <TabsTrigger value="write">Write Response</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>

          <TabsContent value="write" className="space-y-4">
            <div className="space-y-2">
              <textarea
                className="w-full min-h-[200px] p-4 rounded-lg border resize-none"
                placeholder="Write your response..."
                value={response}
                onChange={(e) => handleResponseChange(e.target.value)}
              />
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      sentiment === "positive"
                        ? "default"
                        : sentiment === "negative"
                          ? "destructive"
                          : "secondary"
                    }
                  >
                    {sentiment} tone
                  </Badge>
                  <span className="text-muted-foreground">
                    {response.length} characters
                  </span>
                </div>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Draft
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="templates" className="space-y-4">
            <div className="grid gap-4">
              {responseTemplates.map((template) => (
                <div
                  key={template.id}
                  className="p-4 border rounded-lg cursor-pointer hover:bg-muted"
                  onClick={() => handleTemplateSelect(template)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{template.name}</span>
                    <Badge variant="outline">{template.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {template.content}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Separator />

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button className="gap-2" onClick={() => onSubmit(response)}>
            <Send className="h-4 w-4" />
            Send Response
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewResponse;
