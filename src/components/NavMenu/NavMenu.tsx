import React from "react";
import "./NavMenu.css";

interface NavMenuProps {
  children: React.ReactNode;
}

const NavMenu: React.FC<NavMenuProps> = ({ children }) => {
  return <ul className="nav-menu">{children}</ul>;
};

export default NavMenu;