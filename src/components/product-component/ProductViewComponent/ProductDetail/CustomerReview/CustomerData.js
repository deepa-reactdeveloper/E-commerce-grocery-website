import React from 'react'
import Customerimages from "./Customerimages"
import "./CustomerImages.css"
import RangeSliders from "../RangeSlider/RangeSliders";
import "../../../../Mediaquery/Product/Product.css"
export default function CustomerData() {
    return (
        <div className="row" style={{ borderBottom: "2px solid rgb(189, 189, 189)" }}>
        <div className="col-lg-1 col-md-1 col-sm-2 col-2 paddBtm paddTop avtardiv">
        <img src="https://i.ibb.co/6WmzqCM/avatar2.png" alt="Avatar" class="avatar"/>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-10 col-10 paddBtm mobResNoPaddLeftright" style={{paddingLeft:'0px'}}>
            <div class="custwrap">
            <div class="imageGalleryDisplay paddBtm">
              <div class="custName">Mr. Frank</div>
              <div class="custUpdate">12 July 2019</div>
            </div>
            <RangeSliders/>
            <div class="imageGalleryDisplay paddBtm" style={{paddingTop:'11px'}}>
              <div class="verifiedCust">Verified Purchase</div>
              <div><img src="https://i.ibb.co/jJywf5D/Group-910.png" style={{width: '1.2em'}}/></div>
            </div>
            <div class="custReview">A customer review is a review of a product or service made by a customer who has purchased and used, or had experience with, the product or service. Customer reviews are a form of customer feedback on electronic commerce and online shopping sites.
            </div>
           
            <div class="imageGalleryDisplay paddTop paddBtm">
            <div class="userreview"><img src="https://i.ibb.co/pX5mrN1/Group-926.png"/>  </div>  
            <div class="userreview"> <img src="https://i.ibb.co/0M7m3DM/Group-928.png"/> </div> 
              <div class="userReview usercomment">Comment</div>
              <div class="userReview userreport">Report</div>
            </div>
          </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <Customerimages/>
            </div>
        </div>
    )
}
