import React from "react";
import { cartBanner } from "../cartBanner/CartBannerData";
import "../../Mediaquery/Checkout/ProductCart.css"
export default function CartBanner() {
  return (
    <div
      className="container-fluid mobileRes-Cartbanner"
      style={{
        marginTop: "14rem",
        marginBottom: "5rem",
        paddingLeft: "0px",
        paddingRight: "0px",
      }}
    >
      <div className="row">
        {cartBanner.map((item, index) => {
          return (
            <div className="col-lg-12 col-sm-12 col-md-12 col-12">
              <img src={item.icon} alt="" style={item.style}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
