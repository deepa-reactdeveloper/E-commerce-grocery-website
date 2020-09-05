import React, { Fragment } from "react";
import MaterialTable from "material-table";
import ProfileHeader from '../ProfileHeader'
import {tableData} from '../MyOrder/profileOrderModalData'
import {
  wishListColumn,
  wishListData,
  socialIcon,
  button
} from "./myWishListData";
function MyWishList() {
  return (
    <div className="container-fluid" style={{}}>
           <ProfileHeader title={'My Wishlist'} timing={'Last Logged In @ 11:39 AM 21 Oct 2019'}/>
<div className="hide4mobile">
   <MaterialTable
        title="Wishlist"
        columns={wishListColumn}
        data={wishListData}
        options={{
          selection: true,
          emptyRowsWhenPaging: false,
        }}
      />
</div>
<div className="hide4Web">
{
  tableData.map((_,index)=><div key={index} className='hide4Web' style={{display:'flex',justifyContent:'space-between'}}>
  <div className='' style={{display:'flex',alignItems:'center'}}>
    <div style={{width:'50px'}}>
      <img src={_.src} alt='' style={{width:'100%'}}/>
    </div>
    <div style={{display:'flex',flexDirection:'column',marginLeft:'1rem',justifyContent:'center'}}>
<span style={{marginBottom:'15px',fontWeight:'500'}}>{_.title}</span>
<span style={{marginBottom:'15px'}}>{_.subTitle}</span>
<span style={{textDecoration:'line-through'}}>{_.oldPrice}</span>
    </div>
  </div>
  <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>
    <div style={{}}>
     {_.newPrice}
    </div>
  </div>
</div>)
}

</div>
     
      <div className="row" style={{margin:'1rem 0rem'}}>
        <div className="col-6">
          <div className='hide4mobile' style={{ display: "flex", padding: "2rem 2rem" }}>
            <span style={{ marginRight: "2rem", fontSize: "1.2rem" }}>
              Share Us
            </span>
            <div >
              {socialIcon.map((_, index) => {
                return (
                  <Fragment key={index}>
                    <img src={_.src} alt={_.alt} style={_.style} />
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-6 hide4mobile">
          <div style={{ padding: "1.3rem 0rem" }}>
            {button.map((_, index) => {
              return (
                <Fragment key={index}>
                  <button style={_.style}>{_.title}</button>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWishList;
