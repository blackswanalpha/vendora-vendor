import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface ProductFiltersProps {
  className?: string;
}

const ProductFilters = ({ className }: ProductFiltersProps) => {
  return (
    <div className={cn("space-y-4", className)}>
      <div>
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">In Stock</Badge>
          <Badge variant="secondary">$0-$100</Badge>
          <Badge variant="secondary">Electronics</Badge>
          <Button variant="link" className="p-0 h-auto text-sm">
            Clear All
          </Button>
        </div>
      </div>

      <Separator />

      <ScrollArea className="h-[calc(100vh-300px)]">
        <div className="space-y-6 pr-4">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Price Range</h4>
            <Slider
              defaultValue={[0, 100]}
              max={1000}
              step={1}
              className="w-full"
            />
            <div className="flex items-center justify-between text-sm">
              <span>$0</span>
              <span>$1000</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Stock Status</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="in-stock">In Stock</Label>
                <Switch id="in-stock" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="out-of-stock">Out of Stock</Label>
                <Switch id="out-of-stock" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="low-stock">Low Stock</Label>
                <Switch id="low-stock" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Categories</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="electronics">Electronics</Label>
                <Switch id="electronics" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="clothing">Clothing</Label>
                <Switch id="clothing" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="books">Books</Label>
                <Switch id="books" />
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ProductFilters;
