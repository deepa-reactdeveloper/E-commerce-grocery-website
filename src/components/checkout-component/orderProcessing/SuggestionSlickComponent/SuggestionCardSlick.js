import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import WishlistHeart from "../../../home-component/WishlistHeart/WishlistHeart";
import { suggestionProduct } from "../../../checkout-component/ProductCheckoutComponent/ProductSuggestion/ProductSuggestionData";
import "./SuggestionCardSlick.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { suggestionSlick } from "./SuggestionCardSlickData";

class SuggestionCardSlick extends React.Component {
  render() {
    const settings = {
      dots: false,
      slidesToShow: 5,
      // centerMode: true,
      // centerPadding: '40px',
      arrows: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true
          }
        }
      ]
    };

    return (
      <div className="advertiseSlickcontainer" style={{}}>

      
        <Slider {...settings}>
          <div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <WishlistHeart />
            </div>
            <div class="product-wraper">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="http://localhost:3000/static/media/prod6.ed795fd6.png"
                  className="card-product-img"
                  style={{ height: "116px", width: "120px" }}
                />
              </div>
              <div class="product-detail">Cup Cakes</div>
              <div className="prodpriceWrap">
                <div class="product-price">
                  <span
                    class="product-price-currency"
                    style={{ color: "white" }}
                  >
                    AED
                  </span>
                  <span class="product-price-number" style={{ color: "white" }}>
                    70.00
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
                <div className="cartWrap"></div>
              </div>
            </div>
           
          </div>

          <div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <WishlistHeart />
          </div>
          <div class="product-wraper">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="http://localhost:3000/static/media/prod6.ed795fd6.png"
                className="card-product-img"
                style={{ height: "116px", width: "120px" }}
              />
            </div>
            <div class="product-detail">Cup Cakes</div>
            <div className="prodpriceWrap">
              <div class="product-price">
                <span
                  class="product-price-currency"
                  style={{ color: "white" }}
                >
                  AED
                </span>
                <span class="product-price-number" style={{ color: "white" }}>
                  70.00
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
              <div className="cartWrap"></div>
            </div>
          </div>
         
        </div>

        <div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <WishlistHeart />
        </div>
        <div class="product-wraper">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="http://localhost:3000/static/media/prod6.ed795fd6.png"
              className="card-product-img"
              style={{ height: "116px", width: "120px" }}
            />
          </div>
          <div class="product-detail">Cup Cakes</div>
          <div className="prodpriceWrap">
            <div class="product-price">
              <span
                class="product-price-currency"
                style={{ color: "white" }}
              >
                AED
              </span>
              <span class="product-price-number" style={{ color: "white" }}>
                70.00
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
            <div className="cartWrap"></div>
          </div>
        </div>
       
      </div>

      <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <WishlistHeart />
      </div>
      <div class="product-wraper">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="http://localhost:3000/static/media/prod6.ed795fd6.png"
            className="card-product-img"
            style={{ height: "116px", width: "120px" }}
          />
        </div>
        <div class="product-detail">Cup Cakes</div>
        <div className="prodpriceWrap">
          <div class="product-price">
            <span
              class="product-price-currency"
              style={{ color: "white" }}
            >
              AED
            </span>
            <span class="product-price-number" style={{ color: "white" }}>
              70.00
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
          <div className="cartWrap"></div>
        </div>
      </div>
     
    </div>

    <div>
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <WishlistHeart />
    </div>
    <div class="product-wraper">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="http://localhost:3000/static/media/prod6.ed795fd6.png"
          className="card-product-img"
          style={{ height: "116px", width: "120px" }}
        />
      </div>
      <div class="product-detail">Cup Cakes</div>
      <div className="prodpriceWrap">
        <div class="product-price">
          <span
            class="product-price-currency"
            style={{ color: "white" }}
          >
            AED
          </span>
          <span class="product-price-number" style={{ color: "white" }}>
            70.00
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
        <div className="cartWrap"></div>
      </div>
    </div>
   
  </div>

  <div>
  <div style={{ display: "flex", justifyContent: "flex-end" }}>
    <WishlistHeart />
  </div>
  <div class="product-wraper">
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src="http://localhost:3000/static/media/prod6.ed795fd6.png"
        className="card-product-img"
        style={{ height: "116px", width: "120px" }}
      />
    </div>
    <div class="product-detail">Cup Cakes</div>
    <div className="prodpriceWrap">
      <div class="product-price">
        <span
          class="product-price-currency"
          style={{ color: "white" }}
        >
          AED
        </span>
        <span class="product-price-number" style={{ color: "white" }}>
          70.00
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
      <div className="cartWrap"></div>
    </div>
  </div>
 
</div>
         
        </Slider>
      </div>
    );
  }
}

export default SuggestionCardSlick;
