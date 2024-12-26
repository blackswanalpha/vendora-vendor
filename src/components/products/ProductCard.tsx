import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVertical, Edit, Copy, Trash, Eye } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  sku: string;
  status: "active" | "draft" | "archived";
}

interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  onSelect: () => void;
}

const ProductCard = ({ product, isSelected, onSelect }: ProductCardProps) => {
  return (
    <Card className="relative overflow-hidden group">
      <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
        <Checkbox checked={isSelected} onCheckedChange={onSelect} />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Eye className="mr-2 h-4 w-4" /> View
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Edit className="mr-2 h-4 w-4" /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Copy className="mr-2 h-4 w-4" /> Duplicate
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              <Trash className="mr-2 h-4 w-4" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="aspect-square relative">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-2 left-2">
          <Badge
            variant={product.stock > 0 ? "default" : "destructive"}
            className="text-xs"
          >
            {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
          </Badge>
        </div>
      </div>

      <div className="p-4 space-y-2">
        <div className="space-y-1">
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">${product.price.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground">SKU: {product.sku}</p>
          </div>
          <Badge variant="secondary">{product.category}</Badge>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
