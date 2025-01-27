import React, { ReactNode } from "react";
import "./NavBar.css";

interface NavBarProps {
  logo?: ReactNode;
  cartButton?: ReactNode;
  searchBar?: ReactNode;
  navMenu?: ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ logo, cartButton, searchBar, navMenu }) => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        {navMenu}
      </div>
      <div className="navbar__logo">{logo || <span>Logo</span>}</div>
      <div className="navbar__right">
        {searchBar && <div className="navbar__search-bar">{searchBar}</div>}
        {cartButton && <div className="navbar__cart-button">{cartButton}</div>}
      </div>
    </nav>
  );
};

export default NavBar;
