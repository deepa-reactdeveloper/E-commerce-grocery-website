import React from "react"; 
import Slick from "./Slick";
import "../../../checkout-component/ProductCheckoutComponent/ProductSuggestion/ProductSuggestion.css"
import "../../../home-component/groceryComponents/groceryProduct.css"
export default function ProductSuggestion() {
  return (
    <div style={{}}>
    
      <div style={{ padding: "3rem 0rem" }}>
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
      <div style={{padding :'1rem 2rem',borderBottom: '2px solid #BDBDBD'}}>
        <Slick/>
      </div>
    </div>
  );
}
