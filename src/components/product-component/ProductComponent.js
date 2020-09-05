import React from "react";
import FilterBreadcrumb from "../product-component/FilterComponent/FilterBreadcrumb";
import SubCategoryfilter from "../product-component/FilterComponent/SubCategoryFilter";
import RangeSlider from "../product-component/FilterComponent/RangeSlider";
import OfferFilter from "../product-component/FilterComponent/OfferFilter";
import ProductListing from "./ProductListingComponent/ProductListing"
import AdvertiseFilter from "../home-component/categoryFilterComponents/AdvertiseFilter";
// import Pagination from "../../product-component/ProductsComponents/Pagination"

export default function ProductComponent() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12">
          <FilterBreadcrumb />
          <SubCategoryfilter />
          <RangeSlider />
          <OfferFilter />
          <AdvertiseFilter />
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12">
        <ProductListing/>
        </div>
      </div>
    </div>
  );
}
