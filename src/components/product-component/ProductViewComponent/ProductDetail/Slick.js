import React from "react";
import Slider from "react-slick";
import "../../../checkout-component/orderProcessing/slick.css";
import "../../../checkout-component/ProductCheckoutComponent/ProductSuggestion/ProductSuggestion.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import {suggestionProduct,settings} from '../../../checkout-component/ProductCheckoutComponent/ProductSuggestion/ProductSuggestionData'
import WishlistHeart from "../../../home-component/WishlistHeart/WishlistHeart"
import "../../../common-component/AdvertiseCardSlickComponent/advertiseCardSlick.css"
class Slick extends React.Component {

  render() {
    // var settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 5,
    //   slidesToScroll: 1,
    // };
    return (
      <div style={{ background: "lightgrey" }}>
        <Slider {...settings}>
        {suggestionProduct.map((item, index) => {
          return (
          <div className="product-card" style={{width:'75%'}}>
          <div style={{display:'flex',justifyContent:'flex-end'}}>
          <WishlistHeart/>
         </div>

            <div class="product-wraper">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={item.img}
                  className="card-product-img"
                  style={{ height: "116px", width: "120px" }}
                />
              </div>
              <div class="product-detail">{item.title}</div>
              <div className="prodpriceWrap">
              <div class="product-price">
              <span
              class="product-price-currency"
              style={{ color: "white" }}
            >
            {item.currency}
            </span>
            <span
              class="product-price-number"
              style={{ color: "white" }}
            >
            {item.price}
            </span>
              </div>
              <div>
                      <DropdownButton
                        id="dropdown-basic-button"
                        title="2kg"
                        className="prodQuantityDrop"
                      >
                        <Dropdown.Item
                          href="#/action-1"
                          className="grocdropdownlist"
                        >
                          1kg
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-2"
                          className="grocdropdownlist"
                        >
                          2kg
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-3"
                          className="grocdropdownlist"
                        >
                          3kg
                        </Dropdown.Item>
                      </DropdownButton>
                     
                    </div>
                    <div className="cartWrap">
                    <img src={item.cart} className="cart-Img" />
                  </div>
              </div>
            </div>
          </div>
    )})}
         
        </Slider>
      </div>
    );
  }
}

export default Slick;
