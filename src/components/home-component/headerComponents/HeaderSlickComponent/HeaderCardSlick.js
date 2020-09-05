import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import {
 
  headerdropdownList,settings
  
} from "../HeaderData";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./headerCardSlick.css";

class HeaderCardSlick extends React.Component {
  render() {
   

    const dropdownstyle={
     color:'#757575',
     fontSize:'12px',
     fontWeight:'500',
    }
    return (
      <div className="advertiseSlickcontainer" style={{marginTop:'0rem'}}>
    
        <Slider {...settings}>
        {headerdropdownList.map((item, index) => {
          return (
        <div>
        <div><DropdownButton
        id="dropdown-basic-button"
        title={item.title}
        className="prodNameDrop"
        style={dropdownstyle}
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
      </DropdownButton></div>
     
     
        </div>
          )})}
        </Slider>
      </div>
    );
  }
}

export default HeaderCardSlick;