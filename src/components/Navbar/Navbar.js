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
    <div className="navbar">
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
          <div className="icons">
            <div className="single-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-cart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </div>
            <div className="single-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            <div className="single-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-file-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
