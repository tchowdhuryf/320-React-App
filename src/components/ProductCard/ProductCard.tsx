import React from "react";
import "./ProductCard.css";

export interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, description, price, onAddToCart }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={image} alt={name} />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
      <button className="add-to-cart-btn" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
