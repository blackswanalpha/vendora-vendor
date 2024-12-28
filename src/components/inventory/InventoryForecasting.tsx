import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Calendar, Download, RefreshCw } from "lucide-react";

const forecastData = [
  { date: "Jan", actual: 100, forecast: 95, lower: 85, upper: 105 },
  { date: "Feb", actual: 120, forecast: 115, lower: 105, upper: 125 },
  { date: "Mar", actual: 150, forecast: 145, lower: 135, upper: 155 },
  { date: "Apr", actual: null, forecast: 160, lower: 150, upper: 170 },
  { date: "May", actual: null, forecast: 180, lower: 170, upper: 190 },
  { date: "Jun", actual: null, forecast: 200, lower: 190, upper: 210 },
];

const recommendations = [
  {
    product: "Wireless Headphones",
    action: "Restock",
    quantity: 100,
    confidence: 0.85,
    reason: "Expected demand increase",
  },
  {
    product: "Smart Watch",
    action: "Monitor",
    quantity: 50,
    confidence: 0.75,
    reason: "Seasonal trend",
  },
];

const InventoryForecasting = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold">Inventory Forecasting</h3>
          <p className="text-muted-foreground">
            Predict future inventory needs
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Last 6 Months
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Update Forecast
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Demand Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={forecastData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="actual"
                    stroke="#8884d8"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="forecast"
                    stroke="#82ca9d"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                  />
                  <Line
                    type="monotone"
                    dataKey="upper"
                    stroke="#82ca9d"
                    strokeWidth={1}
                    strokeDasharray="3 3"
                  />
                  <Line
                    type="monotone"
                    dataKey="lower"
                    stroke="#82ca9d"
                    strokeWidth={1}
                    strokeDasharray="3 3"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Forecast Parameters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Forecast Period</label>
                <select className="w-full p-2 rounded-md border">
                  <option>3 Months</option>
                  <option>6 Months</option>
                  <option>12 Months</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Model Type</label>
                <select className="w-full p-2 rounded-md border">
                  <option>Time Series</option>
                  <option>Machine Learning</option>
                  <option>Hybrid</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Seasonality</label>
                <Input type="number" placeholder="Enter value" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Confidence Level</label>
                <Input type="number" placeholder="95%" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{rec.product}</span>
                    <Badge
                      variant={
                        rec.action === "Restock" ? "default" : "secondary"
                      }
                    >
                      {rec.action}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{rec.reason}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span>Quantity: {rec.quantity}</span>
                    <span>
                      Confidence: {(rec.confidence * 100).toFixed(0)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InventoryForecasting;
