import React from "react";
import "./ProductCard.css";

export interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
}) => {
  return (
    <div className="product-card">
      <img className="product-image" src={image} alt={name} />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
