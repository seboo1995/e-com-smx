import React from "react";
import "./HoverMenu.css";
const HoverMenu = (props) => {
  const object_menu = {
    Home: {
      hover_menu: {
        styles: ["default", "full_widht", "modern", "collection"],
        topic: ["furniture 1", "furniture 2", "decoration", "cosmetic"],
        brands: ["brandname1_url", "brandname2_url", "brandname3_url"],
      },
    },
    Shop: {
      hover_menu: {
        shop: [
          "grid3 column",
          "grid 4 column",
          "listing",
          "collections",
          "metro",
        ],
        product_layout: [
          "default",
          "sticky_into",
          "wide sidebar",
          "color background",
        ],
        product_types: [
          "simple",
          "various",
          "color swatches",
          "image swatches",
        ],
        others: ["shoping cart", "checkout", "order complete", "wishlist"],
      },
    },
    Product: {
      hover_menu: {
        default: ["product_layout 1", "product_layout 2"],
      },
    },
    Blog: {
      hover_menu: {
        default: ["blog 1", "blog 2"],
      },
    },
  };
  return (
    <div className="hover-menu">
      <div className="grid-container">
        {Object.keys(object_menu[props.name]["hover_menu"]).map((item) => {
          return <div className="grid-item"> {item}</div>;
        })}
      </div>
    </div>
  );
};
export default HoverMenu;
