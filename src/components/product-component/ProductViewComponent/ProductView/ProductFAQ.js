import React from "react";
import "../../../../App.css";
import { productShare } from "./ProductViewData";

export default function ProductFAQ() {
  return (
    <div className="row" style={{ paddingTop: "3rem" }}>
      <div class="col-sm-9" style={{ display: "flex" }}>
        {productShare.map((item, index) => {
          return (
            <div style={{ display: "flex" }}>
              <div style={item.titleStyle}>{item.title}</div>
              {item.img.map((value, index) => {
                return <img src={value.image} style={item.imgStyle} />;
              })}
            </div>
          );
        })}
      </div>
      <div>
     
      </div>
    </div>
  );
}
