import React, { Fragment, useState } from "react";
import { passwordFormData, button } from "./profilePasswordManagerData";
import ProfileHeader from "./ProfileHeader";
import "./MyAccount/myAccount.css";
import { useForm } from "react-hook-form";

export default function ProfilePasswordManager() {
  const { register, handleSubmit, reset, errors } = useForm();
  const [showncurrentpassword, setShowncurrentpassword] = useState(false);
  const [shownnewpassword, setShownnewpassword] = useState(false);
  const [shownretypenewpassword, setShownretypenewpassword] = useState(false);

  const handleReset = () => {
    reset();
  };

  return (
    <div className="container-fluid" style={{ marginBottom: "4rem" }}>
      <ProfileHeader
        title={"Change Your Password"}
        timing={"Last Logged In @ 11:39 AM 21 Oct 2019"}
      />

      <div className="row">
        <div className="col-lg-8 col-xs-12">
<form>
          <div style={{ padding: "2rem 2rem" }}>
           
                <Fragment>
                  <input
                    type={showncurrentpassword ? "text" : "password"}
                    placeholder="Current Password"
                    style={{
                      border: "0px",
                      borderBottom: "3px solid #E0E0E0",
                      outline: "none",
                      width: "100%",
                      marginBottom: "2rem",
                      lineHeight: "44px"
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
                    style={{
                      border: "0px",
                      borderBottom: "3px solid #E0E0E0",
                      outline: "none",
                      width: "100%",
                      marginBottom: "2rem",
                      lineHeight: "44px"
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
                    style={{
                      border: "0px",
                      borderBottom: "3px solid #E0E0E0",
                      outline: "none",
                      width: "100%",
                      marginBottom: "2rem",
                      lineHeight: "44px"
                    }}
                  />
                  <button
                    onClick={() => setShownretypenewpassword(!shownretypenewpassword)}
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
           
                <Fragment >
                  <button style={{
                    background: "#7CB342",
                    color: "white",
                    borderRadius: "20px",
                    border: "none",
                    width: "140px",
                    height: "30px",
                    marginRight: "20px",
                    outline:'none'
                  }}>Save Changes</button>
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
                  outline:'none'
                }}>Reset All</button>
              </Fragment>
             
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
