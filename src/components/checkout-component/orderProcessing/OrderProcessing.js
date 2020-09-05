import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";
import ProductCheckoutComponent from "../ProductCheckoutComponent/ProductCheckoutComponent";
import ProductCart from "../ProductCheckoutComponent/ProductCart/ProductCart";
import CartProgressBar from "./CartProgressBar"
import "../../Mediaquery/Checkout/orderProcessing.css"
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function OrderProcessing() {
  return (
    <div>
      <div
        className="container-fluid orderProcessingWrap"
        style={{
          display: "flex",
          paddingLeft: "3.7%",
          paddingBottom: "4%",
          marginTop: "15rem",
        }}
      >
        <div style={{ lineHeight: "14px" }}>
          <img
            src="https://i.ibb.co/9HpcF0N/Group-1167.png"
            alt="alt"
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
          separator={<NavigateNextIcon fontSize="10px" color="#E0E0E0" />}
          aria-label="breadcrumb"
        >
          <Link style={{ color: "#BDBDBD" }} to="/">
            Home
          </Link>
          <Link style={{ color: "#BDBDBD" }} href="/" onClick={handleClick}>
            Grocery
          </Link>
          <Link style={{ color: "#BDBDBD" }} href="/" onClick={handleClick}>
            Snacks & Beverages
          </Link>
          <Typography color="#757575">
            Coca Cola Plastic Bottle (750 ml)
          </Typography>
        </Breadcrumbs>
      </div>
      <CartProgressBar/>
      <ProductCart />
     
      <ProductCheckoutComponent />
    </div>
  );
}
