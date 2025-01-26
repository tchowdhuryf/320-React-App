import React from "react";
import "./Logo.css";

export interface LogoProps {
  src: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return <img className="logo" src={src} alt={alt} />;
};

export default Logo;
