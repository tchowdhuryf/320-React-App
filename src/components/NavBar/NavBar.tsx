import React, { ReactNode } from "react";
import "./NavBar.css";

interface NavBarProps {
  logo?: ReactNode;
  cartButton?: ReactNode;

}

const NavBar: React.FC<NavBarProps> = ({ logo, cartButton }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">{logo || <span>Logo</span>}</div>
      <div className="navbar__right">
        {cartButton && <div className="navbar__cart-button">{cartButton}</div>}
      </div>
    </nav>
  );
};

export default NavBar;
