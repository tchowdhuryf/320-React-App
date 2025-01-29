import React from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";
import { XMarkIcon } from "@heroicons/react/24/solid";

export interface CartProps {
  items: {
    id: number;
    image: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  isOpen: boolean;
  toggleCart: () => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, change: number) => void;
}

const Cart: React.FC<CartProps> = ({
  items,
  isOpen,
  toggleCart,
  removeFromCart,
  updateQuantity,
}) => {
  return (
    <div className={`cart ${isOpen ? "cart--open" : "cart--closed"}`}>
      <button className="cart__close" onClick={toggleCart}>
        <XMarkIcon />
      </button>
      <h2 className="cart__title">Cart</h2>
      <div className="cart__items">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>
      <div className="cart__total">
        <h3>
          Subtotal: $
          {items
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default Cart;
