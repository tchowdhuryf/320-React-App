import React from "react";
import "./NavMenuItem.css";

export interface NavMenuItemProps {
  href: string;
  label: string;
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({ href, label }) => {
  return (
    <li className="nav-menu-item">
      <a className="nav-menu-item__link" href={href}>
        {label}
      </a>
    </li>
  );
};

export default NavMenuItem;
