import React from "react";
import "./CartButton.css";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

interface CartButtonProps {
  onClick: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({ onClick }) => {
  return (
    <div className="cart-button">
      <button className="cart__button" onClick={onClick}>
        <ShoppingCartIcon />
      </button>
    </div>
  );
};

export default CartButton;
