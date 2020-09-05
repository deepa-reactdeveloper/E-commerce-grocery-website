import React from "react";
import "./advertiseCards.css";
import { advertcards } from "./AdvertiseCardsData";
import "../../Mediaquery/Home/Home.css";


export default function AdvertiseCards() {
  return (
    <div class="advertwrapper MobileViewHide-Home">
      <div class="container-fostrap">
        <div className="advertMainHead-align">
          <div class="headDesBox">
            <div class="headImgWrap">
              <img
                src="https://i.ibb.co/5xm326n/Group-1825.png"
                class="headDesImg"
              />
            </div>
            <div className="groceryProd">
              <p>Vegetables</p>
            </div>
            <div class="headDesLine"></div>
          </div>
        </div>
        <div class="content">
          <div class="container">
            <div class="row">
              {advertcards.map((item, index) => {
                return (
                  <div class="col-xs-12 col-sm-4 advCardPadd">
                    <div class="card">
                      <img src={item.Icon}  alt="alt" style={item.cardImgStyle} />

                      <div class="card-content">
                        <p class="">{item.data}</p>
                      </div>
                      <div class="adverflex">
                        <div class="card-read-more">{item.readmore}</div>
                        <div class="card-shop-now">
                          {item.shopnow}
                          <span>
                            <img src={item.arrow} alt="alt"  style={item.arrowStyle} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
