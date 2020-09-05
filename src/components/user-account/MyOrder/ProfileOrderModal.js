import React, { Fragment, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import minus from "../assets/minus.svg";
import { data, tableColumn, tableData } from "./profileOrderModalData";
import { fetchProfile } from "../../../api/profile-apis";
import { fetchOrderById } from "../../../api/order-apis";
function ProfileOrderModal({ show, size, onHide, }) {
 
  const [myprofile, setmyprofile] = useState([]);
  const [myorder, setmyorder] = useState([]);
  useEffect(() => {
    let customerId = "5f112f4ab84c2a71fdc5039a";
    let storeId = "5efb03a38281825c3896dbc0";
    let orderId = "5f152351b84c2a71fdc503a1";

    Promise.all([fetchProfile(customerId), fetchOrderById(storeId, orderId)])
      .then((allResponses) => {
       
        let profilefetch = allResponses[0].data;
        let fetchOrderById = allResponses[1].data;
       
        setmyprofile(profilefetch);
        setmyorder([...myorder,fetchOrderById]);
        // setProfile({ profilefetch });
      })
      .catch((err) => console.log(err));
  }, []);

 
 
  return (
    <div>
    
      <Modal
        show={show}
        size={size}
       
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{
            background: "#EB201E",
            color: "white",
            display: "flex",
            justifyContent: "center",
            borderRadius: "20px 20px 0px 0px",
          }}
        >
          <img
            src={minus}
            alt=""
            style={{
              position: "absolute",
              right: "15px",
              top: "30px",
              cursor: "pointer",
            }}
            onClick={onHide}
          />
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>Order Invoice</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{}}>
          <div className="container-fluid">
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
                borderBottom: ".5px solid #E0E0E0",
              }}
            >
              {data.map((_, index) => {
                return (
                  <Fragment key={index}>
                    {_.reOrderPrint.map((__, id) => {
                      return (
                        <Fragment key={id}>
                          <div style={{ display: "flex" }}>
                            <div style={{}}>
                              <img src={__.src} alt={__.alt} />
                            </div>
                            <div style={__.titleContainerStyle}>
                              <span style={__.title1Style}>{__.title1}</span>
                              <span style={__.title2Style}>{__.title2}</span>
                            </div>
                          </div>

                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <button style={__.orderButtonStyle}>
                              {__.button1Title}
                            </button>
                            <button style={__.printButtonStyle}>
                              {__.button2Title}
                            </button>
                          </div>
                        </Fragment>
                      );
                    })}
                  </Fragment>
                );
              })}
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
              }}
            >
              <div style={{ color: "#424242" }}>
                <div style={{ marginBottom: "10px" }}>
                  <span style={{ fontWeight: "500", marginRight: "2px" }}>
                    Name :{" "}
                  </span>
                  <span>{myprofile.firstName}</span>
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <span style={{ fontWeight: "500", marginRight: "2px" }}>
                    Mobile No:{" "}
                  </span>
                  <span>{myprofile.mobileNumber}</span>
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <span style={{ fontWeight: "500", marginRight: "2px" }}>
                    Email:{" "}
                  </span>
                  <span>{myprofile.emailId}</span>
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <span style={{ fontWeight: "500", marginRight: "2px" }}>
                    Delivery Address:{" "}
                  </span>
                  <span>{myprofile.firstName}</span>
                </div>
              </div>
              <div style={{ color: "#424242" }}>
              {myorder.map((_, id) => {
                    return (
                      <div>
                      <div style={{ marginBottom: "10px" }} key={id}>
                        <span style={{ fontWeight: "500", marginRight: "2px" }}>Order No:</span>
                        <span style={{ color: "#039BE5" }}>
                          {_.id}
                        </span>
                      </div>
                      <div style={{ marginBottom: "10px" }} key={id}>
                        <span style={{ fontWeight: "500", marginRight: "2px" }}> Order Status:</span>
                        <span style={{ color: "#039BE5" }}>
                          {_.orderStatus}
                        </span>
                      </div>
                      <div style={{ marginBottom: "10px" }} key={id}>
                        <span style={{ fontWeight: "500", marginRight: "2px" }}>Order Type:</span>
                        <span style={{ color: "#039BE5" }}>
                          {_.id}
                        </span>
                      </div>
                      <div style={{ marginBottom: "10px" }} key={id}>
                      <span style={{ fontWeight: "500", marginRight: "2px" }}>Order Date:</span>
                      <span style={{ color: "#039BE5" }}>
                        {_.id}
                      </span>
                    </div>
                    <div style={{ marginBottom: "10px" }} key={id}>
                    <span style={{ fontWeight: "500", marginRight: "2px" }}>Payment Method: (COD)</span>
                    <span style={{ color: "#039BE5" }}>
                      {_.transaction[0].modeOfPayment}
                    </span>
                  </div>
                  <div style={{ marginBottom: "10px" }} key={id}>
                    <span style={{ fontWeight: "500", marginRight: "2px" }}>Delivery On:</span>
                    <span style={{ color: "#039BE5" }}>
                      {_.id}
                    </span>
                  </div>
                      </div>
                    )})}
              </div>
            </div>
            <div
              className="row"
              style={{
                padding: "1rem 0rem",
                borderBottom: ".5px solid #E0E0E0",
              }}
            >
              <div className="col-12">
                <div className="hide4mobile">
                  {tableColumn.map((_, index) => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          borderBottom: ".5px solid #E0E0E0",
                          padding: "1rem",
                        }}
                        key={index}
                      >
                        <div style={{ marginLeft: "30px" }}>{_.title}</div>
                        <div>
                          {_.priceQtyAmt.map((_, id) => {
                            return (
                              <span style={{ margin: "2rem" }} key={id}>
                                {_.title}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
<div>

                  {myorder.map((_, index) => {
                   
                     
                    return (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          margin: "1rem 0rem",
                        }}
                        key={index}
                      >
                   

                        <div style={{ display: "flex", marginLeft: "40px" }}>
                         {/*  <div>
                            <img src={_.src} alt="" style={_.imgStyle} />
                         </div> */}
                     
                          <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "10px"
                          }}
                        >
                          <span>{_.orderProduct[0].productName}</span>
                          <span>{_.orderProduct[0].quantity}</span>
                        </div>
                        
                        
                        </div>
                       
                        <div style={{ display: "flex", marginLeft: "40px" }}>
                        {/*  <div>
                           <img src={_.src} alt="" style={_.imgStyle} />
                        </div> */}
                    
                        <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: "10px"
                        }}
                      >
                        <span style={{padding:'0rem 4rem'}}>{_.finalAmount}</span>
                       
                      </div>
                       
                       </div>
                       <div style={{ display: "flex", marginLeft: "40px" }}>
                       {/*  <div>
                          <img src={_.src} alt="" style={_.imgStyle} />
                       </div> */}
                   
                       <div
                       style={{
                         display: "flex",
                         flexDirection: "column",
                         marginLeft: "10px"
                       }}
                     >
                       <span style={{padding:'0rem 1.2rem'}}>{_.finalAmount}</span>
                      
                     </div>
                      
                      </div>
                      <div style={{ display: "flex", marginLeft: "40px" }}>
                      {/*  <div>
                         <img src={_.src} alt="" style={_.imgStyle} />
                      </div> */}
                  
                      <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "10px"
                      }}
                    >
                      <span style={{padding:'0rem 4rem'}}>{_.finalAmount}</span>
                     
                    </div>
                     
                     </div>
                      </div>
                    );
                 
                  })}
                  </div>
                </div>

                {/* Product Detail Table 4 Mobile Device */}
                {myorder.map((_, index) => (
                  <div
                    key={index}
                    className="hide4Web"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div
                      className=""
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <div style={{ width: "50px" }}>
                        <img src={_.src} alt="" style={{ width: "100%" }} />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: "1rem",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{ marginBottom: "15px", fontWeight: "500" }}
                        >
                          {_.orderProduct[0].productName}
                        </span>
                        <span style={{ marginBottom: "15px" }}>
                          {_.subTitle}
                        </span>
                        <span style={{ textDecoration: "line-through" }}>
                          {_.oldPrice}
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <select name="" id="">
                        <optgroup>
                          <option value="">Qty {_.qty}</option>
                        </optgroup>
                      </select>
                      <div style={{}}>{_.newPrice}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {myorder.map((_, index) => {

            return(
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
                borderBottom: ".5px solid #E0E0E0",
                color: "#424242",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontWeight: "500", marginBottom: "3rem" }}>
                  Total Quantity: 1
                </span>
                <span>All Amount in AED</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontWeight: "500", marginBottom: "1rem" }}>
                  Total Amt: {_.finalAmount}
                </span>
                <span style={{ fontWeight: "500", marginBottom: "1rem" }}>
                  Delivery Charge: 12
                </span>
                <span style={{ fontWeight: "500", marginBottom: "1rem" }}>
                  Amount Payable: {_.finalAmount}
                </span>
              </div>
            </div>
            );
                 
          })}
            <div
              className="row"
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#424242",
                borderBottom: ".5px solid #E0E0E0",
                margin: "1rem 0rem",
              }}
            >
              <p style={{ marginLeft: "22px" }}>
                Note: please ignore this is demo order.
              </p>
              <div style={{ display: "flex" }}>
                {data.map((_) =>
                  _.deliverBy.map((__, id) => {
                    return (
                      <Fragment key={id}>
                        <img src={__.src} alt={__.alt} style={__.imgStyle} />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "1rem",
                          }}
                        >
                          {__.person.map((item, key) => {
                            return (
                              <span
                                style={item.titleStyle && item.titleStyle}
                                key={key}
                              >
                                {item.title}
                              </span>
                            );
                          })}
                        </div>
                      </Fragment>
                    );
                  })
                )}
              </div>
            </div>
            <div className="row" style={{ color: "#424242", margin: "1rem" }}>
              <span style={{ fontWeight: "500" }}>Terms & Conditions</span>
              <p>
                Product can be returned with in 2 hours of delivery. Products
                should be in company packing only. Ice Creams and Fresh products
                should be returned only to the delivery person.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProfileOrderModal;
