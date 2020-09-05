import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./CustomerimagesCardSlick.css";

class CustomerimagesCardSlick extends React.Component {
  render() {
    const setting = {
      dots: false,
      slidesToShow: 1,
      centerMode: true,
      centerPadding: '40px',
      arrows:false,
      infinite:true
    };

    return (
      <div className="advertiseSlickcontainer " style={{padding:'0px 2rem'}}>
    
        <Slider {...setting}>
     <div><h4>sddsaasd</h4></div>
     <div><h4>sddsaasd</h4></div>
     <div><h4>sddsaasd</h4></div>
     <div><h4>sddsaasd</h4></div>
     <div><h4>sddsaasd</h4></div>
     <div><h4>sddsaasd</h4></div>
     <div><h4>sddsaasd</h4></div>
     <div><h4>sddsaasd</h4></div>
     <div><h4>sddsaasd</h4></div>
     <div><h4>sddsaasd</h4></div>
     <div><h4>sddsaasd</h4></div>
     <div><h4>sddsaasd</h4></div>
        </Slider>
      </div>
    );
  }
}

export default CustomerimagesCardSlick;