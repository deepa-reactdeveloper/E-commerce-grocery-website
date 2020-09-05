

import React, { useState, useEffect } from "react";
import gift from "../assets/gift.svg";
import referal from "../assets/referal.svg";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { myAccount1, myAccount2 } from "./myAccountData";
import user from "../assets/user1 small.svg";
import mobile from "../assets/mobile.svg";
import message from "../assets/message.svg";

import "./myAccount.css";
import { fetchProfile } from "../../../api/profile-apis";

function IsEmpty(val) { 
  // test results
  //---------------
  // []        true, empty array
  // {}        true, empty object
  // null      true
  // undefined true
  // ""        true, empty string
  // ''        true, empty string
  // 0         false, number
  // true      false, boolean
  // false     false, boolean
  // Date      false
  // function  false

  if (val === undefined) return true;

  if (
    typeof val == "function" ||
    typeof val == "number" ||
    typeof val == "boolean" ||
    Object.prototype.toString.call(val) === "[object Date]"
  )
    return false;

  if (val == null || val.length === 0)
    // null or 0 length array
    return true;

  if (typeof val == "object") {
    // empty object

    var r = true;

    for (var f in val) r = false;

    return r;
  }

  return false;
}

export default function MyAccount({ myProfile }) {
  const [state, setState] = React.useState(false);

  const [myprofile, setmyprofile] = useState([]);
  const [profile, setProfile] = useState({
    customerId: !localStorage.getItem("customerId")
      ? ``
      : localStorage.getItem("customerId"),
    customerMasters: [],
    userId: "",
    email: "",
    fname: "",
    gender: "",
    myprofilefetch: [],
  });


  useEffect(() => {
    let customerId = "5f17ed278f9b6b681b9e3e5c";

    Promise.all([fetchProfile(customerId)])
      .then((allResponses) => {
      

        let profilefetch = allResponses[0].data;
       
        setmyprofile([...myprofile, profilefetch]);
        // setProfile({ profilefetch });
      })
      .catch((err) => console.log(err));
  }, []);

 
  

  return (
    <>
      <div
        className="container-fluid myAccountContainer"
        style={{ paddingTop: "2rem", marginTop: "19rem" }}
      >
      {console.log(myprofile,"uuuuuuuuuuuuuuuuuuuuuuuuu")}
        <div className="row">
          <button
            onClick={() => setState(!state)}
            className="myProfileToggler hide4Web"
            style={{ marginBottom: "1rem" }}
          >
            My Profile
          </button>
          <div
            className={
              state ? "col-lg-2 col-xs-12" : "col-lg-2 col-xs-12 hide4mobile"
            }
          >
            <div className="row ">
              <div
                className="col myAccount1Container"
                style={{ fontSize: ".8rem" }}
              >
                {/*{myAccount1.map((_, index) => {
               return (*/}
                {!IsEmpty(myprofile) ? (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        margin: "0.7rem 0rem",
                        alignItems: "center",
                      }}
                    >
                      <img src={user} alt="alt" style={{ width: "30px" }} />
                      <span style={{ margin: "0rem 0rem 0rem .5rem" }}>
                        {" "}
                        {myprofile[0].firstName}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        margin: "0.7rem 0rem",
                        alignItems: "center",
                      }}
                    >
                      <img src={mobile} alt="alt" style={{ width: "30px" }} />
                      <span style={{ margin: "0rem 0rem 0rem .5rem" }}>
                        {" "}
                        {myprofile[0].mobileNumber}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        margin: "0.7rem 0rem",
                        alignItems: "center",
                      }}
                    >
                      <img src={message} alt="alt" style={{ width: "30px" }} />
                      <span style={{ margin: "0rem 0rem 0rem .5rem" }}>
                        {" "}
                        {myprofile[0].emailId}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        margin: "0.7rem 0rem",
                        alignItems: "center",
                      }}
                    >
                      <img src={referal} alt="alt" style={{ width: "30px" }} />
                      <span style={{ margin: "0rem 0rem 0rem .5rem" }}>
                        {" "}
                        My referral code : RT24
                      </span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {/*   );
                })}*/}
              </div>
            </div>
            <div className="row myProfile4Mobile" style={{ marginTop: "4rem" }}>
              <div className="col" style={{ fontSize: ".8rem" }}>
                {myAccount2.map((_, index) => {
                  return (
                    <NavLink
                      to={`${_.url}`}
                      style={_.containerStyle}
                      key={index}
                      className="myAccount2"
                    >
                      <img src={_.src} alt={_.alt} style={_.imgStyle} />
                      <span style={_.titleStyle}>{_.title}</span>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            className="col-lg-10 col-xs-12 dataContainer"
            style={{ padding: "0rem 4rem" }}
          >
            <div
              className="row hide4mobile"
              style={{
                display: "flex",
                justifyContent: "space-between",
                background: "#7CB442",
                color: "white",
              }}
            >
              <div>
                <div
                  className="giftTextContainer"
                  style={{ padding: ".5rem 2rem" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      lineHeight: "1",
                      margin: "",
                    }}
                  >
                    <span style={{ fontSize: "6rem", fontWeight: "500" }}>
                      Gift
                    </span>
                    <span style={{ fontWeight: "500" }}>
                      Send 10 AED & Get 20 AED
                    </span>
                  </div>
                  <div style={{ margin: "1rem 0rem" }}>
                    <p>
                      Send your friend 10 AED and get 20 AED when they order
                    </p>
                  </div>
                  <div>
                    <button
                      style={{
                        borderRadius: "20px",
                        width: "100px",
                        position: "relative",
                        outline: "none",
                        border: "none",
                        fontSize: ".8rem",
                      }}
                    >
                      <img
                        src={referal}
                        alt=""
                        style={{
                          width: "15px",
                          height: "19px",
                          position: "absolute",
                          left: "5px",
                        }}
                      />
                      <span style={{ marginLeft: "9px" }}>Refer Now</span>{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div
                style={{
                  paddingRight: "2rem",
                  width: "340px",
                  display: "flex",
                }}
              >
                <img src={gift} alt="" style={{ width: "100%" }} />
              </div>
            </div>
            {myProfile}
            <div
              className="row hide4Web"
              style={{
                display: "flex",
                background: "#EB201E",
                color: "white",
                margin: "0px",
                borderRadius: "2px",
              }}
            >
              <div className="col-6">
                <div
                  className="giftTextContainer"
                  style={{ padding: ".5rem 0rem" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      lineHeight: "1",
                      margin: "",
                    }}
                  >
                    <span style={{ fontSize: "4rem", fontWeight: "500" }}>
                      Gift
                    </span>
                    <span style={{ fontWeight: "500", fontSize: ".7rem" }}>
                      Send 10 AED & Get 20 AED
                    </span>
                  </div>
                  <div style={{ margin: "1rem 0rem" }}>
                    <p style={{ fontSize: ".7rem" }}>
                      Send our friend 10 AED and get 20 AED when they order
                    </p>
                  </div>
                  <div>
                    <button
                      style={{
                        borderRadius: "20px",
                        width: "115px",
                        position: "relative",
                        outline: "none",
                        border: "none",
                        background: "white",
                      }}
                    >
                      <img
                        src={referal}
                        alt=""
                        style={{
                          width: "15px",
                          height: "24px",
                          position: "absolute",
                          left: "5px",
                        }}
                      />
                      <span style={{ marginLeft: "9px", fontSize: ".9rem" }}>
                        Refer Now
                      </span>{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="col-6"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "5px",
                  margin: "0px",
                }}
              >
                <div style={{ marginBottom: "10px" }}>
                  <img src={gift} alt="" style={{ width: "100%" }} />
                </div>

                <button
                  style={{
                    borderRadius: "20px",
                    border: ".5px solid white",
                    padding: ".1rem",
                    background: "#EB201E",
                    color: "white",
                  }}
                >
                  <span>Coupon :</span>
                  <span style={{ fontWeight: "500", marginLeft: "3px" }}>
                    RJ20
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

