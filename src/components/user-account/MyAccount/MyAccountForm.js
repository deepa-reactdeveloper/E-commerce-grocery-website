
import React, { useEffect, useState } from "react";
import user2 from "../assets/user2.svg";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import downArrow from "@material-ui/icons/ExpandMore";
import "./myAccountForm.css";
import { myAccountFormData } from "./myAccountData";
import ProfileHeader from "../ProfileHeader";
import { fetchProfile, storeProfile } from "../../../api/profile-apis";

function MyAccountForm() {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ mobileNumber, setMobileNumber ] = useState("");
  const [ emailId, setEmailId ] = useState("");
  const [ gender, setGender ] = useState("");

  useEffect(() => {
    let customerId = "5f17ed278f9b6b681b9e3e5c";
    getMyProfileData(customerId);    
  }, []);

  const getMyProfileData = (customerId) => {
    Promise.all([fetchProfile(customerId)])
      .then((allResponses) => {
     

        let profileData = allResponses[0].data;
     

        setFirstName(profileData.firstName);
        setLastName(profileData.lastName);
        setMobileNumber(profileData.mobileNumber);
        setEmailId(profileData.emailId);
      })
      .catch((err) => console.log(err));
  }

  const onSave = (e) => {
    e.preventDefault();

    // const { customerId } = this.state;
    let customerId = "5f17ed278f9b6b681b9e3e5c";

    const data = {
      "firstName": firstName,
      "lastName": lastName,
      "mobileNumber": mobileNumber,
      "emailId": emailId
    }
    
 

    storeProfile(customerId, data)
      .then((res) => {
        console.log("storeProfileResponse", res.data);
        //  getMyProfileData(res.data.customrId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid" style={{ marginBottom: "3rem" }}>
    <form onSubmit={e => onSave(e)}>
      <div className="myAccountForm" style={{}}>
        <ProfileHeader
          title={"My Profile"}
          timing={"Last Logged In @ 11:39 AM 21 Oct 2019"}
        />
        <div className="row">
            <div
              className="col-lg-6 col-xs-12 myAccountForm"
              style={{ paddingRight: "9rem" }}
            >
              <input
                type="text"
                placeholder="firstName"
                defaultValue={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={{
                  border: "0px",
                  borderBottom: "1px solid #E0E0E0",
                  outline: "none",
                  width: "100%",
                  marginBottom: "3rem",
                }}
              />
              <input
                type="text"
                placeholder="Lastname"
                defaultValue={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={{
                  border: "0px",
                  borderBottom: "1px solid #E0E0E0",
                  outline: "none",
                  width: "100%",
                  marginBottom: "3rem",
                }}
              />
              <input
                type="text"
                placeholder="EmailId"
                defaultValue={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                style={{
                  border: "0px",
                  borderBottom: "1px solid #E0E0E0",
                  outline: "none",
                  width: "100%",
                  marginBottom: "3rem",
                }}
              />
              <input
                type="text"
                placeholder="Mobile Number"
                defaultValue={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                style={{
                  border: "0px",
                  borderBottom: "1px solid #E0E0E0",
                  outline: "none",
                  width: "100%",
                  marginBottom: "3rem",
                }}
              />
              <FormControl style={{ width: "100%" }}>
                <InputLabel
                  id="demo-simple-select-label"
                  className="myAccountFormSelect"
                >
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  IconComponent={downArrow}
                >
                  <MenuItem value="">Male</MenuItem>
                  <MenuItem value="">Female</MenuItem>
                </Select>
              </FormControl>
            </div>
          <div
            className="col-lg-6 col-xs-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="myAccountFormImg" style={{ width: "250px" }}>
              <img src={user2} alt="" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{ display: "flex", justifyContent: "center", margin: "5rem" }}
      >
        <button
          style={{
            background: "#7CB342",
            color: "white",
            width: "150px",
            borderRadius: "20px",
            outline: "none",
            border: "none",
            height: "35px",
            fontWeight: "500",
          }}
        >
          Save
        </button>
      </div>
      </form>
    </div>
  );
}

export default MyAccountForm;

