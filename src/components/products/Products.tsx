import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductList from "./ProductList";
import ProductHeader from "./ProductHeader";
import ProductFilters from "./ProductFilters";
import ServiceCatalog from "./ServiceCatalog";
import { PlusCircle, Download, Upload } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Products = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <ProductHeader />

      <Tabs defaultValue="products" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-4">
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[300px]"
            />
            {view === "grid" ? (
              <Tabs
                value={view}
                onValueChange={(v) => setView(v as "grid" | "list")}
              >
                <TabsList>
                  <TabsTrigger value="grid">Grid</TabsTrigger>
                  <TabsTrigger value="list">List</TabsTrigger>
                </TabsList>
              </Tabs>
            ) : null}
          </div>
        </div>

        <TabsContent value="products" className="space-y-6">
          <div className="flex items-center gap-2">
            <Button className="gap-2">
              <PlusCircle className="h-4 w-4" />
              Add Product
            </Button>
            <Button variant="outline" className="gap-2">
              <Upload className="h-4 w-4" />
              Import
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>

          <div className="flex gap-6">
            <ProductFilters className="w-[240px]" />
            <div className="flex-1">
              <ProductList view={view} searchQuery={searchQuery} />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="services" className="space-y-6">
          <ServiceCatalog />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Products;
