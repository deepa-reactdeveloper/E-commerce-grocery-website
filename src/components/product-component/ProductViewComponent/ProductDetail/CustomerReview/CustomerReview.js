import React from "react";
import RangeSliders from "../RangeSlider/RangeSliders";
import { customerRating, topReviews } from "./CustomerReviewData";
import { DropdownButton, Dropdown } from "react-bootstrap";
import CustomerData from './CustomerData'
import "../../../../Mediaquery/Product/Product.css"
export default function CustomerReview() {
  return (
    <div>
      <div className="mobResCustReviewHeading" style={{ padding: "3rem 0.6rem", display: "flex" }}>
        <div class="headDesBox">
          <div class="headImgWrap" style={{ width: "44px", left: "11px" }}>
            <img
              src="https://i.ibb.co/dGYRX9f/Group-384.png"
              class="headDesImg"
            />
          </div>
          <div className="groceryProd">
            <h3>CustomerReview</h3>
          </div>
          <div class="headDesLine"></div>
        </div>
        <div
          style={{
            position: "absolute",
            right: "2%",
            marginTop: "15px",
            backgroundImage:
              "linear-gradient(rgb(244, 244, 244), rgb(243, 243, 243), rgb(243, 243, 243), rgb(242, 242, 242), rgb(241, 241, 241), rgb(239, 239, 239), rgb(238, 238, 238), rgb(236, 236, 236), rgb(233, 233, 233), rgb(230, 230, 230), rgb(227, 227, 227), rgb(224, 224, 224))",
            border: "0.8px solid rgb(189, 189, 189)",
            borderRadius: "2px",
          }}
        >
          <button className="mobResHide">
            {topReviews.map((item, index) => {
              return (
                <DropdownButton
                  id="dropdown-basic-button"
                  title={item.title}
                  className="productDetailDrop prodDetailDropAlign"
                  style={{
                    fontSize: "15px",
                    width: "136px",
                    marginLeft: "0px",
                    marginTop: "5px",
                  }}
                >
                  <Dropdown.Item
                    href="#/action-1"
                    className="grocdropdownlist "
                  >
                    {item.drop1}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="grocdropdownlist">
                    {item.drop2}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" className="grocdropdownlist">
                    {item.drop3}
                  </Dropdown.Item>
                </DropdownButton>
              );
            })}
          </button>
        </div>
      </div>
      <div className="mobResCustReviewPadd" style={{ display: "flex" ,borderBottom: "2px solid rgb(189, 189, 189)" }}>
        <div>
          {customerRating.map((item, index) => {
            return (
              <div>
                <span style={item.ratingCountstyle}>{item.ratingCount}</span>
                <span style={item.ratingOutOfStyle}>{item.ratingOutOf}</span>

                <RangeSliders />
                <div className="mobResratingOutOfStyle" style={item.ratingOutOfStyle}>{item.overAllRating}</div>
              </div>
            );
          })}
        </div>

        <div
        className="mobResCustReviewBtn"
          style={{
            display:'flex',
            position: "absolute",
            right: "2%",
            marginTop: "31px",
            padding: "12px 35px",
            fontSize: "12px",
            backgroundImage:
              "linear-gradient(rgb(244, 244, 244), rgb(243, 243, 243), rgb(243, 243, 243), rgb(242, 242, 242), rgb(241, 241, 241), rgb(239, 239, 239), rgb(238, 238, 238), rgb(236, 236, 236), rgb(233, 233, 233), rgb(230, 230, 230), rgb(227, 227, 227), rgb(224, 224, 224))",
            border: "0.8px solid rgb(189, 189, 189)",
            borderRadius: "2px",
          }}
        >
        <img src="https://i.ibb.co/FqpSPHs/Group-923.png" className="mobRescustReviewBtnImg" style={{width:'16px',marginRight:'8px'}}/>
          <button style={{ border: "0" }}>Write a review</button>
        </div>
        <div
        className="mobResCustReviewBtn"
          style={{
            position: "absolute",
            right: "2%",
            marginTop: "90px",
            padding: "12px 35px",
            fontSize: "12px",
            backgroundImage:
              "linear-gradient(rgb(244, 244, 244), rgb(243, 243, 243), rgb(243, 243, 243), rgb(242, 242, 242), rgb(241, 241, 241), rgb(239, 239, 239), rgb(238, 238, 238), rgb(236, 236, 236), rgb(233, 233, 233), rgb(230, 230, 230), rgb(227, 227, 227), rgb(224, 224, 224))",
            border: "0.8px solid rgb(189, 189, 189)",
            borderRadius: "2px",
          }}
        >
        <img src="https://i.ibb.co/BrmYqVk/Group-916.png" className="mobRescustReviewBtnImg" style={{width:'16px',marginRight:'8px'}}/>
          <button style={{ border: "0" }}>Rate this product</button>
        </div>
      </div>
      <CustomerData/>
      <CustomerData/>
    </div>
  );
}
