import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductList from "./ProductList";
import ProductHeader from "./ProductHeader";
import ProductFilters from "./ProductFilters";
import { PlusCircle, Download, Upload } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Products = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <ProductHeader />

      <div className="flex items-center justify-between gap-4">
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

        <div className="flex items-center gap-4">
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[300px]"
          />
          <Tabs
            value={view}
            onValueChange={(v) => setView(v as "grid" | "list")}
          >
            <TabsList>
              <TabsTrigger value="grid">Grid</TabsTrigger>
              <TabsTrigger value="list">List</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="flex gap-6">
        <ProductFilters className="w-[240px]" />
        <div className="flex-1">
          <ProductList view={view} searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default Products;
