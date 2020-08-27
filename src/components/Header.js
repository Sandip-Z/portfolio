import React from "react";
import { headerTexts } from "../content/HeaderText";
const Header = () => {
  return (
    <div className="w-75">
      <h1 className="text-white">{headerTexts.title}</h1>
      <h1 className="text-white">{headerTexts.subtitle}</h1>
      <p className="text-muted mt-4">{headerTexts.description}</p>
    </div>
  );
};

export default Header;
