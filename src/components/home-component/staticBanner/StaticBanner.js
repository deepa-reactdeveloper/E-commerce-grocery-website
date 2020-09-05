import React from "react";
import { staticBanner,mobstaticBanner } from "../staticBanner/StaticBannerData";
import "../../Mediaquery/Home/Home.css"
export default function StaticBanner() {
  return (
    <div
      className="container-fluid"
      style={{ paddingLeft: "0px", paddingRight: "0px" }}
    >
    <div className="row MobileViewHide-Home">
    {staticBanner.map((item, index) => {
      return (
        <div className="col-lg-12 col-sm-12 col-md-12 col-12">
          <img src={item.icon} alt="" style={item.style} className=""></img>
        </div>
      );
    })}
  </div>

  <div className="row">
  {mobstaticBanner.map((item, index) => {
    return (
      <div className="col-lg-12 col-sm-12 col-md-12 col-12">
       
        <img src={item.icon} alt="" style={item.style} className="mobResShow"></img>
      </div>
    );
  })}
</div>
    </div>
  );
}
