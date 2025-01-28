import React from "react";
import ProductCard, { ProductCardProps } from "../ProductCard/ProductCard";
import "./ProductGrid.css";

interface ProductGridProps {
  products: ProductCardProps[];
  rows: number;
  columns: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  rows,
  columns,

}) => {
  const maxProducts = rows * columns;

  const visibleProducts = products.slice(0, maxProducts);

  return (
    <div
      className="product-grid"
      style={
        {
          // Pass rows and columns as CSS variables
          "--rows": rows,
          "--columns": columns,
        } as React.CSSProperties
      }>
      {visibleProducts.map((product) => (
        <ProductCard
          id={product.id}
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
