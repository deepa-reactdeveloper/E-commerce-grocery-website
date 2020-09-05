import React from "react";
import Slider from "react-slick";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./slick.css"
import {headerdropdownList} from "../components/home-component/headerComponents/HeaderData"
class Slick extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    return (
        <div style={{ background:'lightgrey',}}>
      <Slider {...settings}>
        
       {/*  {headerdropdownList.map((item, index) => {
          return (
            <div>
            
            <div key={index}>
              <DropdownButton
                id="dropdown-basic-button"
                title="ruejewnje"
                className="prodNameDrop"
                style={{fontSize:'15px',color:'black'}}
              >
                <Dropdown.Item
                  href="#/action-1"
                  className="grocdropdownlist"
                  
                >
                  {item.drop1}
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  className="grocdropdownlist"
                >
                  {item.drop2}
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  className="grocdropdownlist"

                >
                  {item.drop3}
                </Dropdown.Item>
              </DropdownButton>
             <div className="dropdownarrowCard">
                <i
                  class="fas fa-angle-down"
                  aria-hidden="true"
                  style={{ opacity: "0.4", fontSize: "16px" }}
              ></i> 
              </div>
            </div>
            </div>
          );
        })}*/}
        
      
       <div>
       <h4>2</h4>
       </div>  <div>
       <h4>2</h4>
       </div>  <div>
       <h4>2</h4>
       </div>  <div>
       <h4>2</h4>
       </div> 
      </Slider>
      </div>
    );
  }
}

export default Slick;