import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import {advertcards} from "../../home-component/advertiseCardComponents/AdvertiseCardsData"

import "./advertiseCardSlick.css";

class AdvertiseCardSlick extends React.Component {
  render() {
    const settings = {
      dots: false,
      slidesToShow: 1,
      centerMode: true,
      centerPadding: '40px',
      arrows:false,
      infinite:true
    };

    return (
      <div className="advertiseSlickcontainer mobResadverSlick" style={{}}>
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
        <Slider {...settings} className="">
        {advertcards.map((item, index) => {
          return (
            <div style={{}}>
          <div class="card advertiseSlickCard" style={{margin: '0px 22px'}}>
            <img src={item.Icon} style={{height: '200px',width: '100%'}}/>
            <div class="card-content">
            <p class="">
             {item.data}
            </p>
          </div>
          <div class="adverflex">
          <div class="card-read-more">Read More...</div>
          <div class="card-shop-now">Shop now</div>
        </div>
          </div>
          
    </div>
          )})}
        </Slider>
      </div>
    );
  }
}

export default AdvertiseCardSlick;