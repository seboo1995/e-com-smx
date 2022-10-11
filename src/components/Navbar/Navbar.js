import React, { useState } from "react";
import "./Navbar.css";
import HoverMenu from "../HoverMenu/HoverMenu";
const Navbar = () => {
  const [isHover, setIsHover] = useState(false);
  const [ActiveHoverMenu, setActiveHoverMenu] = useState(false);
  function hoverHandler(e) {
    setIsHover(e.currentTarget.textContent);
  }
  function hoverOutHandler(e) {
    setIsHover(false);
  }
  return (
    <div className="flex-container">
      <div className="logo">
        <h1>Durotan </h1>
      </div>
      <div className="flex-container">
        <div
          onMouseOver={hoverHandler}
          onMouseOut={hoverOutHandler}
          className="menu-item"
        >
          Home
          <div className="hovermenu">
            {isHover === "Home" && <HoverMenu name="Home" />}
          </div>
        </div>

        <div
          onMouseOver={hoverHandler}
          onMouseOut={hoverOutHandler}
          className="menu-item"
        >
          Shop
          {isHover === "Shop" && <HoverMenu name="Shop" />}
        </div>
        <div
          onMouseOver={hoverHandler}
          onMouseOut={hoverOutHandler}
          className="menu-item"
        >
          Product
          {isHover === "Product" && <HoverMenu name="Product" />}
        </div>
        <div
          onMouseOver={hoverHandler}
          onMouseOut={hoverOutHandler}
          className="menu-item"
        >
          Blog
          {isHover === "Blog" && <HoverMenu name="Blog" />}
        </div>
        <div
          onMouseOver={hoverHandler}
          onMouseOut={hoverOutHandler}
          className="menu-item"
        >
          Pages
          {isHover === "Pages" && <HoverMenu name="Blog" />}
        </div>
        <div className="lang">
          <p>EN</p>
          <p>FR</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
