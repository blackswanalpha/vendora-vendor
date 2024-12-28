import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Boxes,
  AlertTriangle,
  TrendingUp,
  History,
  Search,
  Filter,
  Download,
  BarChart,
} from "lucide-react";

const stats = [
  {
    name: "Total Items",
    value: "2,345",
    change: "+12%",
    icon: Boxes,
  },
  {
    name: "Low Stock Items",
    value: "15",
    change: "-2",
    icon: AlertTriangle,
    alert: true,
  },
  {
    name: "Stock Value",
    value: "$45,231",
    change: "+20.1%",
    icon: TrendingUp,
  },
  {
    name: "Stock Turnover",
    value: "4.5x",
    change: "+0.2",
    icon: History,
  },
];

const products = [
  {
    id: "1",
    name: "Wireless Headphones",
    sku: "WH-001",
    category: "Electronics",
    inStock: 50,
    reorderPoint: 20,
    lastUpdated: "2024-01-15",
    status: "In Stock",
  },
  {
    id: "2",
    name: "Smart Watch",
    sku: "SW-001",
    category: "Electronics",
    inStock: 15,
    reorderPoint: 25,
    lastUpdated: "2024-01-14",
    status: "Low Stock",
  },
  {
    id: "3",
    name: "Laptop Backpack",
    sku: "BP-001",
    category: "Accessories",
    inStock: 0,
    reorderPoint: 15,
    lastUpdated: "2024-01-13",
    status: "Out of Stock",
  },
];

const movements = [
  {
    id: "1",
    type: "Received",
    product: "Wireless Headphones",
    quantity: 100,
    date: "2024-01-15",
    reference: "PO-001",
  },
  {
    id: "2",
    type: "Shipped",
    product: "Smart Watch",
    quantity: -5,
    date: "2024-01-14",
    reference: "SO-001",
  },
];

const Inventory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Inventory Management
        </h2>
        <p className="text-muted-foreground">
          Monitor and manage your stock levels
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.name}</CardTitle>
              <stat.icon
                className={`h-4 w-4 ${stat.alert ? "text-red-500" : "text-muted-foreground"}`}
              />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span
                  className={
                    stat.change.startsWith("+")
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {stat.change}
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search inventory..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
        <Button className="gap-2">
          <BarChart className="h-4 w-4" />
          Analytics
        </Button>
      </div>

      <Tabs defaultValue="stock" className="space-y-4">
        <TabsList>
          <TabsTrigger value="stock">Stock Levels</TabsTrigger>
          <TabsTrigger value="movements">Stock Movements</TabsTrigger>
          <TabsTrigger value="adjustments">Adjustments</TabsTrigger>
          <TabsTrigger value="forecasting">Forecasting</TabsTrigger>
        </TabsList>

        <TabsContent value="stock" className="space-y-4">
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>SKU</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>In Stock</TableHead>
                  <TableHead>Reorder Point</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell>{product.sku}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.inStock}</TableCell>
                    <TableCell>{product.reorderPoint}</TableCell>
                    <TableCell>{product.lastUpdated}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          product.status === "In Stock"
                            ? "default"
                            : product.status === "Low Stock"
                              ? "warning"
                              : "destructive"
                        }
                      >
                        {product.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        <TabsContent value="movements" className="space-y-4">
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Reference</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {movements.map((movement) => (
                  <TableRow key={movement.id}>
                    <TableCell>
                      <Badge
                        variant={
                          movement.type === "Received" ? "default" : "secondary"
                        }
                      >
                        {movement.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">
                      {movement.product}
                    </TableCell>
                    <TableCell
                      className={
                        movement.quantity > 0
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {movement.quantity > 0 ? "+" : ""}
                      {movement.quantity}
                    </TableCell>
                    <TableCell>{movement.date}</TableCell>
                    <TableCell>{movement.reference}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        <TabsContent value="adjustments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Stock Adjustments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Product</label>
                  <Input placeholder="Select product" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Adjustment Type</label>
                  <select className="w-full p-2 rounded-md border">
                    <option value="">Select type</option>
                    <option value="addition">Addition</option>
                    <option value="reduction">Reduction</option>
                    <option value="correction">Correction</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Quantity</label>
                  <Input type="number" placeholder="Enter quantity" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Reason</label>
                  <Input placeholder="Enter reason" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Submit Adjustment</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forecasting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Stock Forecasting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                Stock forecasting chart will go here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Inventory;
