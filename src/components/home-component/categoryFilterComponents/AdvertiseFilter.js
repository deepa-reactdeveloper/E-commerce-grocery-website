import React from "react";
import "./categoryFilter.css";
import { advertise } from "./AdvertiseFilterData";
import "../../Mediaquery/Home/Home.css"
export default function AdvertiseFilter() {
  return (
    <div className="advertiseWrapper MobileViewHide-Home">
      {advertise.map((item, index) => {
        return (
          <div className="advertisecard">
            <img
              src={item.Icon}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        );
      })}
    </div>
  );
}
