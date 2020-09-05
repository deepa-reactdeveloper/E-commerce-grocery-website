import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";
import {Tab, Nav, Col, Row, } from "react-bootstrap";
import { productImages, productCartBtn,mainImgData } from "./ProductViewData";
import "react-tabs/style/react-tabs.css";
import "./productView.css";
import "../../../Mediaquery/Product/Product.css"
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function ProductView() {
  return (
    <div>
      <div
      className="productViewWrap"
        style={{
          display: "flex",
          paddingLeft: "0px",
          paddingBottom: "4%",
          marginTop: "15rem",
        }}
      >
        <div style={{ lineHeight: "14px" }}>
          <img
            src="https://i.ibb.co/9HpcF0N/Group-1167.png" alt="alt"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <Link
          style={{
            color: "#BDBDBD",
            fontSize: "10px",
            paddingLeft: "4px",
            paddingRight: "2px",
            lineHeight: "15px",
          }}
          href="/"
          onClick={handleClick}
        >
          Back
        </Link>
        <div
          style={{
            color: "#BDBDBD",
            fontSize: "13px",
            paddingLeft: "4px",
            paddingRight: "4px",
            lineHeight: "15px",
          }}
        >
          |
        </div>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="10px" color="#E0E0E0" />}
          aria-label="breadcrumb"
        >
          <Link style={{ color: "#BDBDBD" }} href="/" onClick={handleClick}>
            Home
          </Link>
          <Link style={{ color: "#BDBDBD" }} href="/" onClick={handleClick}>
            Grocery
          </Link>
          <Link style={{ color: "#BDBDBD" }} href="/" onClick={handleClick}>
            Snacks & Beverages
          </Link>
          <Typography color="#757575">
            Coca Cola Plastic Bottle (750 ml)
          </Typography>
        </Breadcrumbs>
      </div>

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={9}>
            <div className="productDetailcard">
              {mainImgData.map((item, index) => {
                return (
                  <Tab.Content>
                   
                      <div>
                        {" "}
                        <img
                          src="https://i.ibb.co/hsw2mBg/mainImg.png" alt="alt"
                          className="padResproductDetailcard"
                          style={{ height: "393px", width: "auto" }}
                        />
                      </div>
                    
                  </Tab.Content>
                );
              })}
            </div>{" "}
          </Col>

          <Col sm={2}>
            <Nav variant="pills" className="flexcolumn">
              {productImages.map((item, index) => {
                return (
                
                  <Nav.Item>
                    <Nav.Link eventKey={item.eventKey}>
                      {" "}
                      <img src={item.img}  alt="alt" className="mobRes-TabImgSize" style={{ width: "90px" }} />
                    </Nav.Link>
                  </Nav.Item>
             

                );
              })}
              <Nav.Item className="mobResShow">
              <Nav.Link>
                {" "}<div>
                <div style={{display: 'flex',justifyContent: 'center'}}><img src="https://i.ibb.co/dD06dV5/Group-366.png"  alt="alt" style={{ width: "25px" }} /></div>
                <p style={{fontSize:'14px',color:'#424242'}}>Product<br/> detail</p>
                </div>
              </Nav.Link>
            </Nav.Item>
            </Nav>
          </Col>

          <div class="col-sm-9" style={{ display: "flex", marginTop: "3rem" }}>
            {productCartBtn.map((item, index) => {
              return (
                <button style={item.style} className="productCartBtn padResproductCartBtn">
                  <img
                    className=""
                    src={item.img} alt="alt"
                    style={{ marginRight: "10px", width: "18px" }}
                  />
                  <div>{item.name}</div>
                </button>
              );
            })}
          </div>
        </Row>
      </Tab.Container>
    </div>
  );
}
