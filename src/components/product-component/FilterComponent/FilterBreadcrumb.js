import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export default function FilterBreadcrumb() {
  return (
      <div>
    <div style={{ marginTop: "14rem", display: "flex", flexDirection: "row",paddingLeft:'2rem'}}>
      <div style={{ lineHeight: "14px" }}>
        <img
          src="https://i.ibb.co/9HpcF0N/Group-1167.png"
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
        <Link style={{ color: "#BDBDBD" }} to="/">
          Home
        </Link>

        <Typography color="#757575">Shopping cart</Typography>
      </Breadcrumbs>
    </div>
    <div style={{paddingLeft:'26px',color:'#757575',paddingTop:'1.5rem'}}>
    <div style={{fontSize:'18px'}}>Filter</div>
    <div>Found 8725 Products</div>
    </div>
    </div>
  );
}
