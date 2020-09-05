
import React, { Fragment } from "react";
import { Modal } from "react-bootstrap";
import minus from "../assets/minus.svg";
import circleMapLocation from "../assets/circleMapLocation.svg";
import locationIcon from "../assets/location.svg";
import FormControl from "@material-ui/core/FormControl";
import "../profileCancelModal.css";
import longitude from "../assets/longitude.svg";
import latitude from "../assets/latitude.svg";
import { addressForm1, addYourAddress, button } from "./addAddressModalData";
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
function AddAddressModal({
  show,
  size,
  onHide,
  landmark,
  myAddressItems,
  cityItems,
  localityItems,
  handleOnCityChange,
  handleOnLocalityChange,
  handlePincode,
  onSave
}) {

  console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')
  console.log(myAddressItems, "myAddressItems");
  console.log(cityItems, "cityItems");
  console.log(localityItems, "localityItems");
  return (
    <div>
{ !IsEmpty(myAddressItems) ? (
      <Modal
        show={show}
        size={size}
        onHide ={onHide}
        myAddressItems={myAddressItems}
        cityItems={cityItems}
        localityItems={localityItems}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* Modal Header */}
        <Modal.Header style={{ background: "#EB201E", color: "white", display: "flex", justifyContent: "center", borderRadius: "20px 20px 0px 0px" }}>
        {console.log("ooooooooooooooooooooookkkkkkkkkkkkkkkkkkkkkkkkkkk")} 
        <img src={minus} alt="minimize" style={{ position: "absolute", right: "15px", top: "30px", cursor: "pointer" }}  onClick={onHide}  />
          <Modal.Title id="contained-modal-title-vcenter">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ width: "50px", marginRight: "15px" }}>
                <img src={circleMapLocation} alt="" style={{ width: "100%" }} />
              </div>
              <span style={{ fontSize: "18px" }}>Add/Edit Your Location</span>
            </div>
          </Modal.Title>
        </Modal.Header>
​
        {/* Modal Body */}
        <Modal.Body className="modalContainer4Mobile" style={{ textAlign: "center", padding: "4rem" }}>
          <form onSubmit={onSave}>
            <div className="container-fluid placeholderCenter modalContainer4Mobile">
              <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                <div>
                  <span style={{ color: "#757575", fontSize: "18px" }}>
                    Please Select Your Location
                  </span>
                </div>
              </div>
              <div className="row addressModalSelect" style={{ padding: "2rem" }}>
​
                {/* Select City Dropdown */}
                <div className="col-lg-6 col-xs-12">
                  <div className="form-group">
                    <select onChange={handleOnCityChange} name="cityMasterId" className="form-control" placeholder="Select" required>
                      <option value="">Select City Name</option>
                      {cityItems && cityItems.length ? cityItems.map((item) => {
                        return <option value={item.id}>{item.city}</option>;
                      }) : null}
                    </select>
                  </div>
                </div>
​
                {/* Select Locality Dropdown */}
                <div className="col-lg-6 col-xs-12">
                  <FormControl style={{ width: "90%", borderBottom: ".5px solid #757575" }}>
                    <select onChange={handleOnLocalityChange} name="cityMasterId" className="form-control" placeholder="Select" required>
                      <option value="">Select Locality Name</option>
                      {localityItems && localityItems.length ? localityItems.map((item) => {
                          return <option value={item.id}>{item.location}</option>;
                      }) : null}
                    </select>
                  </FormControl>
                </div>
​
              </div>
​
              {/* Get Location */}
              <div className="row" style={{}}>
                <div className="col-lg-6 col-xs-12" style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ marginBottom: "1rem" }}>
                    <img src={locationIcon} alt="" style={{ width: "15px" }} />
                    <span style={{ marginLeft: "15px", color: "#757575" }}>Mark My Location</span>
                  </div>
                  {addressForm1.map((_, index) => {
                    return (
                      <Fragment key={index}>
                        <input type="text" placeholder={_.placeholder} style={_.inputStyle} className={_.button && "getLocation"} />
                        {_.button && _.button.map((__, id) => {
                          return <button style={__.buttonStyle} key={id}>{__.title}</button>;
                        })}
                      </Fragment>
                    );
                  })}
                </div>
​
                <div className="col-lg-6 col-xs-12 addressForm1" style={{ display: "flex", flexDirection: "column", marginTop: "-36px" }}>    
                  {/* Longitude */}
                  <Fragment>
                    <img src={longitude} alt="alt" style={{ position: "absolute", top: "27px", left: "100px", width: "17px" }} className="latitude" />
                    <input type="text" placeholder="Longitude" style={{ lineHeight: " 40px", border: "0px", borderBottom: ".5px solid #757575", outline: "none", margin: "1rem" }} />
                  </Fragment>
​
                  {/* Latitude */}
                  <Fragment>
                    <img src={latitude} alt="alt" style={{ position: "absolute", top: "95px", left: "103px", width: "17px" }} className="latitude" />
                    <input type="text" placeholder="Latitude" style={{ lineHeight: " 40px", border: "0px", borderBottom: ".5px solid #757575", outline: "none", margin: "1rem" }} />
                  </Fragment>
​
                  {/* Pincode */}
                  <Fragment>
                    <input type="text" placeholder="Zip/Postal Code" onChange={handlePincode} style={{ lineHeight: " 40px", border: "0px", borderBottom: ".5px solid #757575", outline: "none", margin: "1rem" }} />
                  </Fragment>
​
                  {/* Buidling */}
                  <Fragment>
                    <input type="text" placeholder="Building Name" value={myAddressItems[0].landmark} style={{ lineHeight: " 40px", border: "0px", borderBottom: ".5px solid #757575", outline: "none", margin: "1rem" }} />
                  </Fragment>
                </div>
              </div>
​
              {addYourAddress.map((_, index) => {
                return <input type="text" placeholder={_.placeholder} style={_.style} key={index} />;
              })}
​
              {/* Buttons */}
              <div className="row" style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                {button.map((_, index) => {
                  return (
                    <Fragment key={index}>
                      <button className={_.className} style={_.style}>{_.title}</button>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      ) : ""}
    </div>
  );
}
export default AddAddressModal;
