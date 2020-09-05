
import React, { Fragment ,useState,useEffect} from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import downArrow from "@material-ui/icons/ExpandMore";
import AddAddressModal from "./AddAddressModal";
import ProfileHeader from "../ProfileHeader";
import { addressData } from "./myAddressData";
import {
  fetchAddresses,
  fetchLocalitiesByFilterDropdown,
  fetchCitiesByFilterDropdown,
  createOrUpdateAddress
} from '../../../api/address-apis';
function MyAddress() {
  const [ showModal, setShowModal ] = useState(false);
  const [ showEditModal, setShowEditModal ] = useState(false);
  // states holding data from the server response
  const [ cities, setCities ] = useState([]);
  const [ localities, setLocalities ] = useState([]);
  const [ address, setAddress ] = useState([]);
  // states required to maintain the values onChange() of input fields or on click of selected address
  const [ addressId, setAddressId ] = useState("");
  const [ addressType, setAddressType ] = useState("");
  const [ streetAddress, setStreetAddress ] = useState("");
  const [ landmark, setLandmark ] = useState("");
  const [ pincode, setPincode ] = useState("");
  const [ stateId ] = useState("5ee83d9a8547aa77f0e91a77");
  const [ cityMasterId, setCityMasterId ] = useState("");
  const [ localityMasterId, setLocalityMasterId ] = useState("");
  useEffect(() => {
    let customerId = "5f17ed278f9b6b681b9e3e5c";
    Promise.allSettled([
      fetchAddresses(customerId),
      fetchLocalitiesByFilterDropdown(),
      fetchCitiesByFilterDropdown()
    ])
    .then(allResponses => {
        console.log('myAddressResponses', allResponses);
        if(allResponses[0].status === 'fulfilled') {
          setAddress(!allResponses[0].value ? [] : allResponses[0].value.data)
        }
        if(allResponses[1].status === 'fulfilled') {
          setLocalities(!allResponses[1].value ? [] : allResponses[1].value.data)
        }
        if(allResponses[2].status === 'fulfilled') {
          setCities(!allResponses[2].value ? [] : allResponses[2].value.data)
        }
    })
    .catch(err => console.log(err));
  },[]);
  const handleOnCityChange = (e) => {
    console.log("selectedCity", e.target.value);
    setCityMasterId(e.target.value);
  };
  const handleOnLocalityChange = (e) => {
    console.log("selectedLocality", e.target.value);
    setLocalityMasterId(e.target.value);
  };
  const handlePincode = (e) => {
    console.log("changedPincode", e.target.value);
    setPincode(e.target.value);
  };
  const onSave = (e) => {
    e.preventDefault();
    let customerId = "5f17ed278f9b6b681b9e3e5c";
    const data = {
      "addressId": !addressId ? 0 : addressId,
      "addressType": !addressType ? "Home" : addressType,
      "streetAddress": streetAddress,
      "landmark": landmark,
      "pincode": pincode,
      "stateId": stateId,
      "localityMasterId": localityMasterId,
      "cityMasterId": cityMasterId
    }
    createOrUpdateAddress(customerId, data)
    .then((res) => {
      console.log("storeProfileResponse", res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };
  return (
    <div className="container-fluid">
      <div className="myAccountForm" style={{}}>
        <ProfileHeader
          title={"My Address"}
          timing={"Last Logged In @ 11:39 AM 21 Oct 2019"}
        />
        <div className="row">
          <div
            className="col-lg-5 col-xs-12 myAddress4mobile"
            style={{ paddingRight: "5rem", marginLeft: "2rem" }}
          >
            {addressData.map((_, index) => {
              return (
                <FormControl style={{ width: "100%" }} key={index}>
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ fontSize: "17px" }}
                  >
                    {_.inputLabel}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    IconComponent={downArrow}
                    value=''
                  >
                    {_.menuItem.map((__, id) => {
                      return (
                        <MenuItem value="" key={id}>
                          {__.item}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              );
            })}
​
            <FormControlLabel
              value=""
              control={<Radio color="primary" />}
              label="5th main, 2nd stage,3rd phase"
              checked
              style={{ margin: "2rem 0rem" }}
            />
            <div className='myAddressEditDeleteButton' style={{ marginLeft: "40px" }}>
              <Fragment >
                <button
                  className=''
                  style={{
                    background: "#7CB342",
                    color: "white",
                    width: "90px",
                    borderRadius: "20px",
                    outline: "none",
                    border: "none",
                    height: "25px ",
                    fontWeight: "500",
                    marginRight: "1rem"
                  }}
                  onClick={ (() => setShowEditModal(true))}
                >
                  Edit
                </button>
              </Fragment>
              <Fragment >
                <button
                  className=''
                  style={{
                    background: "#F46B6F",
                    color: "white",
                    width: "90px",
                    borderRadius: "20px",
                    outline: "none",
                    border: "none",
                    height: "25px",
                    fontWeight: "500"
                  }}
                  // onClick={(e) => onDelete(e)}
                >
                  Delete
                </button>
              </Fragment>
            </div>
          </div>
          <div
            className="col-6"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <button
              className='myAddress4mobilebutton'
              style={{
                background: "white",
                color: "#EB201E",
                width: "140px",
                borderRadius: "20px",
                outline: "none",
                border: "1px solid #707070",
                fontWeight: "300",
                height: "30px",
                marginBottom: "2rem",
                position: "absolute",
                right: "0"
              }}
              onClick={() => setShowModal(true)}
            >
              <span
                style={{
                  position: "absolute",
                  left: "5px",
                  fontSize: "x-large",
                  fontWeight: "500",
                  marginTop: "-7px"
                }}
              >
                +
              </span>{" "}
              Add Address
            </button>
          </div>
        </div>
      </div>
      <AddAddressModal
        show={showModal}
        size={"lg"}
        landmark={landmark}
        myAddressItems={address}
        localityItems={localities}
        cityItems={cities}
        handleOnCityChange={(e) => handleOnCityChange(e)}
        handleOnLocalityChange={(e) => handleOnLocalityChange(e)}
        handlePincode={(e) => handlePincode(e)}
        onSave={(e) => onSave(e)}
        onHide={() => setShowModal(false)}
      />
      
    </div>
  );
}
export default MyAddress;
