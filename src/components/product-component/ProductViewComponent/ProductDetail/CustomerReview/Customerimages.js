import React from "react";
import "./CustomerImages.css";
import "../../../../Mediaquery/Customer/CustomerImg.css"
import CustomerimagesCardSlick from "./CustomerimagesSlickComponent/CustomerimagesCardSlick"
import SuggestionCardSlick from "../../../../checkout-component/orderProcessing/SuggestionSlickComponent/SuggestionCardSlick"
import Slick from "../Slick"
export default function Customerimages() {
  return (
    <div class="imageWrapper">
      <div class="imageGalleryDisplay paddBtm">
        <div class="customerName">Mr. Frank’s pictures</div>
        <div class="customerUpdate">Uploaded on : 12 July 2019</div>
      </div>
      <div className="mobResSliderImg">
      <CustomerimagesCardSlick/>
      </div>
      <div class="imageGalleryDisplay mobResCustomerImg">
        <img src="https://i.ibb.co/y6C3S3r/pic1.png" class="imageDimension1" />
        <img src="https://i.ibb.co/10mkXGb/pic2.png" class="imageDimension2" />
        <img src="https://i.ibb.co/0qW6krQ/pic3.png" class="imageDimension3" />
      </div>
      
    </div>
  );
}
