import React,{Fragment} from "react";
import goldMembershipIcon from "./assets/myMembreship/goldMembership.svg";
import qrCode from "./assets/myMembreship/qrCode.svg";
import downArrow from "./assets/myMembreship/downArrow.svg";
import upArrow from "./assets/myMembreship/upArrow.svg";
import MaterialTable from "material-table";
import ProfileHeader from './ProfileHeader'
import "./myMembership.css";
import {mobileOrderData} from './MyOrder/myProfileOrderData'
import { membershipColumn, membershipData } from "./myMembershipData";

function MyMembership() {
  const [state, setState] = React.useState(false);

  return (
    <div className="container-fluid">
           <ProfileHeader title={'My Membership'} timing={'Last Logged In @ 11:39 AM 21 Oct 2019'}/>

      <div
        className="row"
        style={{
          background: "white",
          display: "flex",
          justifyContent: "space-evenly",
          
        }}
      >
        <div
          className="col-lg-2 col-xs-12"
          style={{
            padding: "0rem",
            background: "#F5F5F5",
            textAlign:'center'
          }}
        >
        <div >
               <img src={goldMembershipIcon} alt="" /> 
        </div>
        </div>
        <div
          className="col-lg-9 col-xs-12 white"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#F5F5F5"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: "1rem" }}>
              <span>Membership Type:</span>
              <span
                style={{
                  fontWeight: "bold",
                  marginBottom: "2rem",
                  marginLeft: "5px"
                }}
              >
                GOLD
              </span>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <span>Available Balance:</span>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#01579B",
                  marginLeft: "5px"
                }}
              >
                250
              </span>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <span>Member Since:</span>
              <span style={{ marginLeft: "5px" }}>07 Dec 2019</span>
            </div>
            <div style={{ cursor: "pointer" }} onClick={() => setState(!state)}>
              <span
                style={{
                  fontWeight: "500",
                  color: "#01579B",
                  marginRight: "5px"
                }}
              >
                View History
              </span>
              {state ? (
                <img src={upArrow} alt="" />
              ) : (
                <img src={downArrow} alt="" />
              )}
            </div>
          </div>
          <div>
            <img src={qrCode} alt="" />
          </div>
        </div>
      </div>
      {state && (
        <><div className='hide4mobile' style={{ marginTop: "20px" }}>
          <MaterialTable
          title='Membership Order List'
            columns={membershipColumn}
            data={membershipData}
            options={{
              emptyRowsWhenPaging: false
            }}
          />
        </div>
        {mobileOrderData.map((_,index)=>{
  return <Fragment key={index}>
  <div className='row hide4Web' style={{marginTop:'1rem',borderBottom:'1px solid #eee'}}>
  <div className="col-7">
  {_.order.map((__,id)=><div key={id} style={__.divStyle}>
<span>
{__.title}
</span>
<span style={__.style}
>
{__.value}

</span>
</div>)}

{_.product.map((__,index)=><div key={index}>
  <span style={__.style}>
   {__.title}
  </span>
</div>)}
{_.amount.map((__,index)=><div key={index} style={__.divStyle}>
 <span>
{__.title}
 </span>
 <span style={__.style}>
{__.value}
 </span>
</div>)}
{_.status.map((__,index)=><div key={index} style={__.divStyle}>
<span>
 {__.title}
</span>
<span style={__.style}>
 {__.value}
</span>
</div>)}
</div>
<div className="col-5">
{_.date.map((__,index)=><div key={index} style={__.style}>
  {__.title}
</div>)}


</div>
</div>
  </Fragment>
})}
        </>
             )}
    </div>
  );
}

export default MyMembership;
