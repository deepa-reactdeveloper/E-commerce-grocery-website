import React from "react";
import PaymentCheckout from "./PaymentCheckout/PaymentCheckout";
import ProductCoupoun from "./ProductCoupoun/ProductCoupoun"
import ProductSuggestion from "./ProductSuggestion/ProductSuggestion"
import "../../Mediaquery/Checkout/orderProcessing.css"
export default function ProductCheckoutComponent() {
  var segment_str = window.location.pathname;
  var segment_array = segment_str.split("/");
  var last_varibale = segment_array.pop();
 
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-12 padResProdCheckPadd mobResProdCheckPadd" style={{padding:'30px 0px'}}>
        {last_varibale === "cart-checkout" ? (
          <ProductCoupoun/>
        ) : (
          <ProductSuggestion />
        )}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12 mobResProdCheckPadd" style={{paddingTop:'30px',paddingBottom:'30px'}}>
          <PaymentCheckout /> 
        </div>
      </div>
    </div>
  );
}
