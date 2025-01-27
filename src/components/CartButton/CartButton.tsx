import React from "react";
import "./CartButton.css";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

interface CartButtonProps {}

const CartButton: React.FC<CartButtonProps> = () => {
  return (
    <div className="cart">
      <button className="cart__button" >
        <ShoppingCartIcon />
      </button>
    </div>
  );
};

export default CartButton;
