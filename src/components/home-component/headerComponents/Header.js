import React from "react";
import "../../Mediaquery/Header/header.css";
import "../../../App.css";
import "./header.css";

import HeaderCardSlick from "./HeaderSlickComponent/HeaderCardSlick"
import { Link } from "react-router-dom";
import { FormControl} from "react-bootstrap";
import {
 
  headercardLogo,
 
} from "./HeaderData";
import CartDropdown from "./CartDropdown";
import MenuDropdown from "./MenuDropdown"
import DropdownMenu from "./DropdownMenu/DropdownMenu"
export default function Header() {
  return (
    <div className="stableHeader">
      <div class="header-topWrap">
        <div class="col-lg-4 col-md-4">
          <div class="static-displayFlex" style={{ justifyContent: "initial" }}>
            <div className="">
              <img
                src="https://i.ibb.co/q5wcdHx/Group-1800.png" alt="alt"
                class="img-icon"
              />
            </div>
            <div class="static-displayBlock">
              <div class="contentHeader">Free Delivery upto 7 kms</div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div class="static-displayFlex" style={{ justifyContent: "center" }}>
            <div className="">
              <img
                src="https://i.ibb.co/q5wcdHx/Group-1800.png" alt="alt"
                class="img-icon"
              />
            </div>
            <div class="static-displayBlock">
              <div class="contentHeader">COD-Cash on delivery available</div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div
            class="static-displayFlex"
            style={{ justifyContent: "flex-end" }}
          >
            <div className="">
              <img
                src="https://i.ibb.co/q5wcdHx/Group-1800.png" alt="alt"
                class="img-icon"
              />
            </div>
            <div class="static-displayBlock">
              <div class="contentHeader">
                All types of wallet payment are accepted
              </div>
            </div>
          </div>
        </div>

        {/*
    <div className="header-toptxt">Free Delivery upto 7 kms</div>  
       <div className="header-toptxt">Free Delivery upto 7 kms</div>
       <div className="header-toptxt">Free Delivery upto 7 kms</div>
     */}
      </div>

      <div
        className="col-lg-12 col-md-12 headerfirst-card"
        style={{ position: "fixed" }}
      >
        <div className="flex-nav" style={{ paddingLeft: "39px" }}>
          <div class="grid-nav ">
            <a class="headerLink" style={{ color: "rgb(255, 255, 255)" }}>
              <img
                class="grid-nav-headerLink"
                src="https://i.ibb.co/WppW0bF/login.png"
                alt="Login"
              />
            </a>
            <div class="grid-nav-header">Login</div>
          </div>

          <CartDropdown />

          <div class="grid-nav ">
            <a class="headerLink" style={{ color: "rgb(255, 255, 255)" }}>
              <img
                class="grid-nav-headerLink"
                src="https://i.ibb.co/fYd6V0p/delivery.png"
                alt="Delivery"
              />
            </a>
            <div class="grid-nav-header">Delivery</div>
          </div>
          {/*
          {headercard.map((item, index) => {
            return (
              <div class="grid-nav ">
                <a class="headerLink" style={{ color: "rgb(255, 255, 255)" }}>
                  <img
                    class="grid-nav-headerLink"
                    src={item.icon}
                    alt={item.alt}
                  />
                </a>
                <div class="grid-nav-header">{item.name}</div>
              </div>
            );
          })}
        */}
          <div className="headerSearch">
            <div className="searchBoxContainer">
              <img
                src="https://i.ibb.co/JvXJ6f7/Group-1782.png"
                class="img-responsive zmdi zmdi-link searchimagePos"
                alt="Responsive image "
                width="30"
                height="24"
              />
              <FormControl
                type="text"
                placeholder="Search for Products by name or brand"
                className=" mr-sm-2 searchBox"
              />
              <div className="headerSearchIconBtn">
                <i className="fas fa-search headerSearchIcon"></i>
              </div>
            </div>
          </div>
        </div>
        <Link to="/">
          <div className="flex-nav logo-align">
            {headercardLogo.map((item, index) => {
              return (
                <div class="">
                  <a
                    class="headerLink mobRes-LogoAlign mobResLogoWidth"
                    style={{ color: "rgb(255, 255, 255)" ,}}
                    to="/"
                  >
                    <img
                      class="grid-nav-headerLink"
                      src={item.icon}
                      alt={item.alt}
                    />
                  </a>
                </div>
              );
            })}
            <DropdownMenu/>
          </div>
        </Link>
      </div>
      <div className="secondCardWrapper">
        <span class="pseudo">
        <HeaderCardSlick/>
        </span>
        <div>
          <span class="before"> </span>
          <span class="after"> </span>
        </div>
        {/* 
    
        <div style={{position:'relative',display: 'flex'}}>
        {headerdropdownList.map((item, index) => {
          return (
            <div key={index}>
              <DropdownButton
                id="dropdown-basic-button"
                title={item.title}
                className="prodNameDrop"
                style={{fontSize:'15px'}}
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
          );
        })}
      <Slick/>
        </div>

       */}
      </div>
    </div>
  );
}
