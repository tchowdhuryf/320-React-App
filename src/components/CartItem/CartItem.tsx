import React from "react";
import "./CartItem.css";
import { PlusIcon, MinusIcon } from "@heroicons/react/16/solid";

export interface CartItemProps {
  item: {
    id: number;
    image: string;
    name: string;
    price: number;
    quantity: number;
  };
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, change: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  removeFromCart,
  updateQuantity,
}) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item__image" />
      <div className="cart-item__details">
        <h2 className="cart-item__name">{item.name}</h2>
        <p className="cart-item__price">${item.price.toFixed(2)}</p>
        <div className="cart-item__quantity-control">
          <button
            className="cart-item__button cart-item__button--decrement"
            onClick={() => updateQuantity(item.id, -1)}
            disabled={item.quantity <= 1}>
            <MinusIcon />
          </button>
          <span className="cart-item__quantity">{item.quantity}</span>
          <button
            className="cart-item__button cart-item__button--increment"
            onClick={() => updateQuantity(item.id, 1)}>
            <PlusIcon />
          </button>
        </div>
        <button
          className="cart-item__remove"
          onClick={() => removeFromCart(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
