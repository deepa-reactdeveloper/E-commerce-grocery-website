import React from "react"; 
import { suggestionBtn } from "./ProductSuggestionData";
import Slick from "../../orderProcessing/Slick";
import "./ProductSuggestion.css" 
import "../../../home-component/groceryComponents/groceryProduct.css"
import "../../../Mediaquery/Checkout/orderProcessing.css"
export default function ProductSuggestion() {
  return (
    <div className="mobResNoBorder" style={{borderRight:'2px solid #BDBDBD'}}>
     
      <div style={{ padding: "0rem 7rem" }}>
        <div class="headDesBox">
          <div class="headImgWrap" style={{ width: "44px", left: "11px" }}>
            <img
              src="https://i.ibb.co/dGYRX9f/Group-384.png"
              class="headDesImg"
            />
          </div>
          <div className="groceryProd">
            <h3>SuggestedProducts</h3>
          </div>
          <div class="headDesLine"></div>
        </div>
      </div>
      <div class="cartSuggestion" style={{padding :'1rem 8.5rem'}}>
        <Slick />
      </div>
    </div>
  );
}
