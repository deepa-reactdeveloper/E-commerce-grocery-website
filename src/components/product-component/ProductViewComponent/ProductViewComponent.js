import React from "react";
import ProductView from "./ProductView/ProductView";
import ProductDetail from "./ProductDetail/ProductDetail";
import SpecificationTable from "./ProductDetail/SpecificationTable";
import FrequencyTable from "./ProductView/FrequencyTable";
import ProductFAQ from "./ProductView/ProductFAQ";
import "../../../App.css";
import ProductSuggestion from "./ProductDetail/ProductSuggestion";
import CustomerReview from "./ProductDetail/CustomerReview/CustomerReview"
import "../../Mediaquery/Product/Product.css"
export default function ProductViewComponent() {
  return (
    <div className="container-fluid ProductViewComponentWrap" style={{ padding: " 0rem 8rem" }}>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <ProductView />
          <ProductFAQ />
          <FrequencyTable />
        </div>
        <div
          className="col-lg-6 col-md-6 col-sm-12 col-12 mobRes-ProductDetail"

          style={{ marginTop: "18rem" }}
        >
          <ProductDetail />
          <SpecificationTable />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <ProductSuggestion />
          <CustomerReview/>
        </div>
      </div>
    </div>
  );
}
