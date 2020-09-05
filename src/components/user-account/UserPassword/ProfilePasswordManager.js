import React, { Fragment, useState, useEffect } from "react";
import { passwordFormData, button } from "./profilePasswordManagerData";
import ProfileHeader from "../ProfileHeader";
import "../MyAccount/myAccount.css";
import { useForm } from "react-hook-form";
import { storePassword } from "../../../api/password-apis";

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

export default function ProfilePasswordManager() {
  const { register, handleSubmit, reset, errors } = useForm();
  const [showncurrentpassword, setShowncurrentpassword] = useState(false);
  const [shownnewpassword, setShownnewpassword] = useState(false);
  const [shownretypenewpassword, setShownretypenewpassword] = useState(false);
  const [myprofile, setmyprofile] = useState([]);
  const [currentpassword, setcurrentpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [retypepassword, setretypepassword] = useState("");

  const handleReset = () => {
    document.getElementById("myInput").value = "";
    // reset();
  };

  useEffect(() => {}, []);

  const passwordValidation = (e) => {
    e.preventDefault();

    // const { customerId } = this.state;
    let customerId = "5f17ed278f9b6b681b9e3e5c";

    const data = {
      password: currentpassword,
      newPassword: newpassword,
    };
 console.log(data,"rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
    storePassword(customerId, data)
      .then((res) => {
        console.log("storeProfileResponse", res);
        //  getMyProfileData(res.data.customrId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid" style={{ marginBottom: "4rem" }}>
      <ProfileHeader
        title={"Change Your Password"}
        timing={"Last Logged In @ 11:39 AM 21 Oct 2019"}
      />
      {IsEmpty ? console.log(myprofile, "myprofile") : "dddddddd"}
      <div className="row">
        <div className="col-lg-8 col-xs-12">
          <form>
            <div style={{ padding: "2rem 2rem" }}>
              <Fragment>
                <input
                  type={showncurrentpassword ? "text" : "password"}
                  placeholder="Current Password"
                  id="myInput"
                  onChange={(e) => setcurrentpassword(e.target.value)}
                  style={{
                    border: "0px",
                    borderBottom: "3px solid #E0E0E0",
                    outline: "none",
                    width: "100%",
                    marginBottom: "2rem",
                    lineHeight: "44px",
                  }}
                />
                <button
                  onClick={() => setShowncurrentpassword(!showncurrentpassword)}
                  style={{
                    color: "#EB201E",
                    position: "absolute",
                    right: "50px",
                    marginTop: "12px",
                    background: "transparent",
                    border: 0,
                  }}
                >
                  Show
                </button>
              </Fragment>

              <Fragment>
                <input
                  type={shownnewpassword ? "text" : "password"}
                  placeholder="New Password"
                  onChange={(e) => setnewpassword(e.target.value)}
                  id="myInput"
                  style={{
                    border: "0px",
                    borderBottom: "3px solid #E0E0E0",
                    outline: "none",
                    width: "100%",
                    marginBottom: "2rem",
                    lineHeight: "44px",
                  }}
                />
                <button
                  onClick={() => setShownnewpassword(!shownnewpassword)}
                  style={{
                    color: "#EB201E",
                    position: "absolute",
                    right: "50px",
                    marginTop: "12px",
                    background: "transparent",
                    border: 0,
                  }}
                >
                  Show
                </button>
              </Fragment>

              <Fragment>
                <input
                  type={shownretypenewpassword ? "text" : "password"}
                  placeholder="Repeat Password"
                  id="myInput"
                  style={{
                    border: "0px",
                    borderBottom: "3px solid #E0E0E0",
                    outline: "none",
                    width: "100%",
                    marginBottom: "2rem",
                    lineHeight: "44px",
                  }}
                />
                <button
                  onClick={() =>
                    setShownretypenewpassword(!shownretypenewpassword)
                  }
                  style={{
                    color: "#EB201E",
                    position: "absolute",
                    right: "50px",
                    marginTop: "12px",
                    background: "transparent",
                    border: 0,
                  }}
                >
                  Show
                </button>
              </Fragment>
            </div>
            <div
              className="passwordButtonContainer"
              style={{
                display: " flex",
                justifyContent: "flex-end",
                marginRight: "30px",
              }}
            >
              <Fragment>
                <button
                  onClick={passwordValidation}
                  style={{
                    background: "#7CB342",
                    color: "white",
                    borderRadius: "20px",
                    border: "none",
                    width: "140px",
                    height: "30px",
                    marginRight: "20px",
                    outline: "none",
                  }}
                >
                  Save Changes
                </button>
              </Fragment>
              <Fragment>
                <button
                  onClick={handleReset}
                  style={{
                    background: "white",
                    borderRadius: "20px",
                    width: "140px",
                    height: "30px",
                    border: "1px solid #757575",
                    color: "#757575",
                    outline: "none",
                  }}
                >
                  Reset All
                </button>
              </Fragment>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
