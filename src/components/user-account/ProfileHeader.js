import React from "react";
import './MyAccount/myAccount.css'
function ProfileHeader({ title, timing ,orderFilter }) {
  return (
    <div
      className="row border-bottom profileHeaderContainer4Mobile"
      style={{ margin: "2rem 0rem", padding: "1rem 0rem" }}
    >
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ color: "#616161", fontSize: "1.3rem", width: "70%" }}>
          {title}
        </div>
        <div
          className="hide4mobile"
          style={{ width: "40%", display: "flex", justifyContent: "flex-end" }}
        >
          {timing}
        </div>
        {orderFilter && <div
          className="hide4Web"
          style={{ width: "40%", display: "flex", justifyContent: "flex-end" }}
        >
          <button
          
            style={{
              width: "70%",
              color: "#EB201E",
              border: ".5px solid #EB201E",
              outline: "none",
              borderRadius: "20px",
              background: "white",
              height:'25px'
            }}
          >
            Filter
          </button>
        </div>}
      </div>
    </div>
  );
}

export default ProfileHeader;
