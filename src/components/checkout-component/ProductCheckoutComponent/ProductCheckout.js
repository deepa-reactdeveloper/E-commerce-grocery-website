import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import ProductCart from "../ProductCheckoutComponent/ProductCart/ProductCart";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import "../../Mediaquery/Checkout/ProductCart.css"
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function ProductCheckout(props) {
  return (
    <div className="MobRes-productcartWrapPadd" style={{padding:'2rem'}}>
   
      <div
        className="container-fluid cart-padding"
        style={{ display: "flex", paddingLeft: "3.7%", paddingBottom: "4%" }}
      >
        <div style={{ lineHeight: "14px" }}>
          <img
            src="https://i.ibb.co/9HpcF0N/Group-1167.png"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <Link
          style={{
            color: "#BDBDBD",
            fontSize: "10px",
            paddingLeft: "4px",
            paddingRight: "2px",
            lineHeight: "15px",
          }}
          href="/"
          onClick={handleClick}
        >
          Back
        </Link>
        <div
          style={{
            color: "#BDBDBD",
            fontSize: "13px",
            paddingLeft: "4px",
            paddingRight: "4px",
            lineHeight: "15px",
          }}
        >
          |
        </div>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="10px" color="#E0E0E0"/>}
          aria-label="breadcrumb"
        >
          <Link style={{ color: "#BDBDBD" }} to="/">
            Home
          </Link>

          <Typography color="#757575">Shopping cart</Typography>
        </Breadcrumbs>
      </div>
      <ProductCart />
    </div>
  );
}
