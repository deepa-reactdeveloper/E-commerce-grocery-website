import React from "react";
import { coupounBtn, coupounOffer } from "./ProductCoupounData";
import "../ProductCart/productCart.css";
import { Link } from "react-router-dom";
import "../../../Mediaquery/Checkout/ProductCart.css"
export default function ProductCoupoun() {
  return (
    <div className="coupounwrapper">
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      > 
        {coupounBtn.map((item, index) => {
          return (
            <div>
              <button className="padResCoupounPadd" style={item.style}>{item.title}</button>
            </div>
          );
        })}
      </div>
      <div className="MobResScroll">
        <div id="overflowTest">
          {coupounOffer.map((item, index) => {
            return (
              <div>
                <img src={item.img} style={item.imgStyle} />
                <div style={item.infoStyle}>{item.info}</div>
                 <div
                  style={{
                    display: "flex",
                    paddingTop: "1rem",
                    paddingBottom: "2.5rem",
                  }}
                >
                  <button style={item.btnStyle}>{item.btnText}</button>
                  <div className="MobRes-AddCoupoun" style={item.addCoupounStyle}>{item.addCoupoun}</div>
                  <Link style={item.viewmoreStyle}>{item.viewMore}</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
