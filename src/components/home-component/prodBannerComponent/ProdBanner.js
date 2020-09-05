import React from "react";
import { Link } from "react-router-dom";
import {
 
  prodban45,
  prodBannLink,

} from "./ProdBannerData";
import "./prodbanner.css";
import "../../../App.scss";
import "../../Mediaquery/Home/Home.css"

import MobileSlider from "./MobileSlider"
export default function ProdBanner() {
  return (
    <div className="container-marginTop">
   <MobileSlider/>
    <div className="gridViewProdBanner">
    
    <div className="prodBannLink">
        {prodBannLink.map((item, index) => {
          return (
            <div style={item.style}>
              <Link className="prodBannlinkColor">{item.name}</Link>
            </div>
          );
        })}
      </div>
      <div className="bannerline"></div>

      
      <div class='row' style={{padding:'20px 23px'}}>
      <div class="col-lg-8 customCol ready2CookPrimary">
      <div><img src="https://i.ibb.co/X8zQnvd/prodban1.png" style={{width: '100%',height: '100%'}}/></div>
      </div>
      <div class="col-lg-4 ready2CookSecodary">
      <div class="col threeImg"><img src="https://i.ibb.co/7bZrcgk/prodban2.png" alt="secondPic" style={{width: '100%',height: '100%'}}/></div>
       <div class="col threeImg"><img src="https://i.ibb.co/7bZrcgk/prodban2.png" alt="secondPic" style={{width: '100%',height: '100%'}}/></div>
      </div>
      </div>
     
      <section class="advertwrapper container-Padd">
        <div class="container-fostrap ">
          <div class="content">
            <div class="row">
              {prodban45.map((item, index) => {
                return (
                  <div class="col-lg-6 col-md-6 cardProdPadd">
                    <div style={item.style}>
                      <img src={item.Icon} style={{ width: "100%" }} />
                    </div>
                    <div className="ribbon-PosAbs">
                      <div class="box">
                        <div class="ribbon-3 pos-rel">
                          <div
                            className="offerName pos-abs"
                            style={item.ribbonTxt}
                          >
                            {item.offer}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
