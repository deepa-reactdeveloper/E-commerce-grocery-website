import React from "react";
import CategoryFilter from "../categoryFilterComponents/CategoryFilter";
import AdvertiseFilter from "../categoryFilterComponents/AdvertiseFilter";
import ProdBanner from "../prodBannerComponent/ProdBanner";
import GroceryProduct from "../groceryComponents/GroceryProduct";
import "../../Mediaquery/Home/Home.css";
// import Pagination from "../../product-component/ProductsComponents/Pagination"
import "../../../App.css";

export default function ProductAdvertComponents() {
  // var segment_str = window.location.pathname;
  // var segment_array = segment_str.split("/");
  // var last_varibale = segment_array.pop();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12">
          <CategoryFilter />
          <AdvertiseFilter />
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12 mobileViewHome-Padd">
          <ProdBanner />
          <GroceryProduct />
          <div className="col-sm-12 mobReshomeAdvert" style={{padding:'0'}}><img src="https://i.ibb.co/DWDym4n/Group-610.png"  style={{width:'100%' ,marginBottom:'6rem'}}/></div>
          <GroceryProduct />
          <div className="col-sm-12 mobReshomeAdvert" style={{padding:'0'}}><img src="https://i.ibb.co/gZ74kCC/Group-618.png"  style={{width:'100%' ,marginBottom:'6rem'}}/></div>
          <GroceryProduct />
        </div>
      </div>
    </div>
  );
}
