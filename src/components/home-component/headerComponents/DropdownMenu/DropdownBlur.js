import React,{useState} from "react";
import {
  sidedropdown,
} from "../HeaderData";
import "../header.css";
import "../../../Mediaquery/Checkout/orderProcessing.css"
export default function DropdownBlur() {
  const [data, setdata] = useState({
    isOpen: false,
    category: false,
    timeOutId : null
  });
 
  
  const onClickHandler = () => {
    setdata(currentState => ({
      isOpen: !currentState.isOpen
    }));
  };

  
  const onBlurHandler = () => {
    data.timeOutId = setTimeout(() => {
      setdata({
        isOpen: false
      });
    });
  };

  // If a child receives focus, do not close the popover.
  const onFocusHandler = () => {
    clearTimeout(data.timeOutId);
  };


    return (
      <div
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        style={{
          display: "block",
          position: "relative",
          margin:'0px'
        }}
      >
      <button
      onClick={onClickHandler}
      aria-haspopup="true"
      aria-expanded={data.isOpen}
      class="headerDropdownmenu"
     
    >
    <img
    class="grid-nav-headerLink"
    src="https://i.ibb.co/RvPWq8Q/dropdown.png"
    alt="header"
  />
    </button>
    {data.isOpen ? (
      <ul
      class="dropdown-contentmenu"
      style={{
        display: "block",
        position: "absolute",
        listStyle: "none",
        paddingLeft: 10,
        paddingRight: 10,
        zIndex: 3,
        whiteSpace: "nowrap"
      }}
    > 
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
    </ul>
    ) : null}
    
      </div>
    );
  }

