import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductTable from "./ProductTable";

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

interface ProductListProps {
  view: "grid" | "list";
  searchQuery: string;
}

// Mock data
const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "Electronics",
    stock: 50,
    sku: "WH-001",
    status: "active",
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health tracking",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    category: "Electronics",
    stock: 30,
    sku: "SW-001",
    status: "active",
  },
  {
    id: "3",
    name: "Laptop Backpack",
    description: "Durable laptop backpack with multiple compartments",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    category: "Accessories",
    stock: 100,
    sku: "BP-001",
    status: "active",
  },
];

const ProductList = ({ view, searchQuery }: ProductListProps) => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const toggleProductSelection = (productId: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  return view === "grid" ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isSelected={selectedProducts.includes(product.id)}
          onSelect={() => toggleProductSelection(product.id)}
        />
      ))}
    </div>
  ) : (
    <ProductTable
      products={filteredProducts}
      selectedProducts={selectedProducts}
      onSelectProduct={toggleProductSelection}
    />
  );
};

export default ProductList;
