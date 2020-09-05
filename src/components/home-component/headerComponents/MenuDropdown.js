import React, { useEffect,useState } from "react";
import "../../home-component/headerComponents/header.css";
import { Link } from "react-router-dom";
import {
  sidedropdown,
} from "../../home-component/headerComponents/HeaderData";
import "../../Mediaquery/Checkout/orderProcessing.css"
export default function MenuDropdown() {

   const [data, setdata] = useState({
    category: false,
  });
  useEffect(() => {
    window.onclick = function (event) {
      if (!event.target.matches(".headerDropdown")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };
  }, []);
  const myFunction = (e) => {
    e.preventDefault();
    document.getElementById("myDropdown").classList.toggle("show");
    console.log("The link was clicked.");
  };
  return (
    <div>
      <div class="dropdown">
        <button onClick={myFunction} class="headerDropdown">
          <img
            class="grid-nav-headerLink"
            src="https://i.ibb.co/RvPWq8Q/dropdown.png"
            alt="header"
          />
        </button>
        <div id="myDropdown" class="dropdown-content">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                border: "0",
                background: "transparent",
                color: "black",
                padding: "12px 16px",
              }}
              onClick={() =>
                data.category === false
                  ? setdata({ ...data, category: true })
                  : setdata({ ...data, category: false })
              }
            >
              Category <i class="fas fa-caret-down"></i>
              
            </button>
            <div className="borderBtm"></div>
          </div>
          {data.category ? (
            <div style={{fontSize: "12px",fontWeight: "300",color: "darkgray"}}>
            <div style={{display: "flex",justifyContent: "center",padding: '8px 0px',}}>
              Chocolate snack
            </div>
            <div style={{display: "flex",justifyContent: "center",padding: '8px 0px',}}>
              Chocolate snack
            </div>
            <div style={{display: "flex",justifyContent: "center",padding: '8px 0px',}}>
              Chocolate snack
            </div>
            <div style={{display: "flex",justifyContent: "center",padding: '8px 0px',}}>
              Chocolate snack
            </div>
            <div style={{display: "flex",justifyContent: "center",padding: '8px 0px',}}>
              Chocolate snack
            </div>
            <div style={{display: "flex",justifyContent: "center",padding: '8px 0px',}}>
              Chocolate snack
            </div>
            <div style={{display: "flex",justifyContent: "center",padding: '8px 0px',}}>
             <span style={{textDecoration:'underline'}}> View All</span> <i class="fas fa-caret-down" style={{lineHeight: 'inherit',marginLeft: '7px'}}></i>
            </div>
            </div>
          ) : (
            ""
          )}
          {sidedropdown.map((item, index) => {
            return (
              <a href={item.href}>
                {item.name}
                <div className="borderBtm"></div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
