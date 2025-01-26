import React, { ReactNode } from "react";
import "./NavBar.css";

interface NavBarProps {
  logo?: ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ logo }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">{logo}</div>
    </nav>
  );
};

export default NavBar;
