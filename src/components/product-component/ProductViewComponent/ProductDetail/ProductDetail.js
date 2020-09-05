import React, { useEffect, useState } from "react";
import $ from "jquery";
import { productDetail, prodDetaildropdown } from "./ProductdetailData";
import RangeSliders from "../ProductDetail/RangeSlider/RangeSliders";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./productDetail.css";
import "../ratingSlider.css";
import WishlistHeart from "../../../home-component/WishlistHeart/WishlistHeart"
import "../../../Mediaquery/Product/Product.css"
export default function ProductDetail() {
  const [data, setData] = useState({
    count: 1,
    readMore: false,
    indexValue: "",
  });

  useEffect(() => {
    setData({ ...data, count: 1 });
   
  }, []);
  const increaseQuantity = () => {
    setData({ ...data, count: data.count + 1 });
  };

  const decreaseQuantity = () => {
    setData({ ...data, count: data.count - 1 });
  };

  return (
    <div>
      {productDetail.map((item, index) => {
        return (
          <div>
            <div style={{ display: "flex" }}>
              <div className="mobResProductName" style={item.nameStyle}>{item.name}</div>

              <div className="mobRes-prodDetailWishList" style={{ marginLeft: "31px", marginTop: "13px" }}>
              <div style={{display:'flex',justifyContent:'flex-end'}}>
              <WishlistHeart/>
             </div>
              </div> 
            </div>
            <div style={{display:'flex'}}>
            <div style={{width:'100%'}}><RangeSliders /></div>
            <div className="productratingTxt" >Product rating</div>
            </div>
            <div style={item.ratingStyle}>{item.rating}</div>
            <div style={{ display: "flex", padding: "11px 0px" }}>
              <div className="prod-plus-minus-btn-wraper">
                <div className="quantityTitle">Qty</div>
                <div style={{align:"center",display:'flex',border: '0px solid transparent',
                borderRadius: '13px',background: '#43BF60',height: '25px',width: '80px'}}>

                <button
                  className="mobRespm-btn minus"
                  onClick={() =>
                    data.count > 1
                      ? setData({ ...data, count: data.count - 1 })
                      : setData({ ...data,addToCart:true})
                  }
                >
                  -
                </button>
                <div className="mobRespm-txt">{data.count}</div>
                <button
                  className="mobRespm-btn plus"
                  onClick={() => increaseQuantity()}
                >
                  +
                </button>
              </div>
              </div>

              <div
                style={{
                  position: "relative",
                  display: "flex",
                  marginTop: "2rem",
                }}
              >
                <div className="quantityTitle">Vol</div>
                {prodDetaildropdown.map((item, index) => {
                  return (
                    <DropdownButton
                      id="dropdown-basic-button"
                      title={item.title}
                      className="productDetailDrop prodDetailDropAlign"
                      style={{
                        fontSize: "15px",
                        border: "1px solid #757575",
                        width: "108px",
                        marginLeft: "20px",
                        marginTop: "5px",
                      }}
                    >
                      <Dropdown.Item
                        href="#/action-1"
                        className="grocdropdownlist "
                      >
                        {item.drop1}
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-2"
                        className="grocdropdownlist"
                      >
                        {item.drop2}
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-3"
                        className="grocdropdownlist"
                      >
                        {item.drop3}
                      </Dropdown.Item>
                    </DropdownButton>
                  );
                })}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "14px",
                borderBottom: "1.5px solid #BDBDBD",
                // paddingBottom: "4px",
                marginBottom: "8px",
              }}
            >
              <div style={{ display: "flex" }}>
                <div style={item.currencyStyle}>{item.currency}</div>
                <div style={item.amountStyle}>{item.amount}</div>
              </div>
              <div style={item.deliveryTimeStyle}>{item.deliveryTime}</div>
            </div>
            <div style={{ color: "#424242", fontSize: "18px" ,fontWeight:'600'}}>
              Description
            </div>
            <div style={item.descriptionStyle}>{item.description}</div>
            <div
              style={{
                color: "#00894B",
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
                marginTop: "8px",
              }}
            >
              Read more
            </div>
          </div>
        );
      })}
     
    </div>
  );
}
