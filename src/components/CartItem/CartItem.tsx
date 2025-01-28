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
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
 

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item__image" />
      <div className="cart-item__details">
        <h2 className="cart-item__name">{item.name}</h2>
        <p className="cart-item__price">${item.price.toFixed(2)}</p>
        <div className="cart-item__quantity-control">
          <button
            className="cart-item__button cart-item__button--decrement"
           >
            <MinusIcon />
          </button>
          <span className="cart-item__quantity">{item.quantity}</span>
          <button
            className="cart-item__button cart-item__button--increment">
            <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
