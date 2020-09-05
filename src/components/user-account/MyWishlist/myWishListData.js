import React, { Fragment } from "react";
import product from "../assets/myWishList/product1.svg";
import redCross from "../assets/redCross.svg";
import star from "../assets/myWishList/star.svg";
import greenDot from '../assets/myWishList/greenDot.svg'
import fb from "../assets/myWishList/fb.svg";
import tweeter from "../assets/myWishList/tweeter.svg";
import insta from "../assets/myWishList/insta.svg";

const starImg = [
  {
    src: star,
    alt: ""
  },
  {
    src: star,
    alt: ""
  },
  {
    src: star,
    alt: ""
  },
  {
    src: star,
    alt: ""
  },
  {
    src: star,
    alt: ""
  },
];

export const wishListColumn = [
  {
    title: "Product",
    field: "name",
    render: () => {
      return (
        <Fragment key={"1"}>
          <div style={{display:'flex',alignItems:'center'}}>
            <img src={product} alt="" style={{width:'100px'}}/>
            <div >
              <span style={{padding:'1rem',fontWeight:'500'}}>Shalimar Perfume</span>
              <div className="row" style={{padding:'1.5rem 2rem'}}>
              {starImg.map((_,index)=>{
                  return <img src={_.src} alt={_.alt} key={index} style={{width: '12px',marginRight:'5px'}}/>
              })}
              </div>
            </div>
          </div>
        </Fragment>
      );
    },
    headerStyle: { color: "#616161",width:'40%' },
    cellStyle:{width:'40%'}
  },
  {
    title: "Unit Price",
    field: "price",
    render:(row)=><div style={{display:'flex',alignItems:'center'}}><span style={{fontSize:'.7rem',marginRight:'5px'}}>AED</span><div style={{fontWeight:'500',fontSize:'1rem'}}>{row.price}</div></div>,
    headerStyle: { color: "#616161" }
  },
  {
    title: "Stock Status",
    field: "birthCity",
    render:(row)=>{
      return <div><img src={greenDot} alt=""/><span style={{marginLeft:'5px'}}>{row.birthCity}</span></div>
    },
    lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
    headerStyle: { color: "#616161" }
  },
  {
    title: "Remove",
    field: "birthCity",
    lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
    headerStyle: { color: "#616161" },
    render: () => <img src={redCross} alt="" style={{width:'18px'}}/>
  }
];

export const wishListData = [
  { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: "InStock",price:'9.9' },
  { name: "Zerya Betül", surname: "Baran", birthYear: 2017, birthCity: "InStock",price:'3.9' }
];



export const socialIcon=[
  {
src:fb,
alt:'fb',
style:{ width: "8px", height: "20px", marginRight: "2rem" }
  },
  {
src:tweeter,
alt:'fb',
style:{ width: "15px", height: "20px", marginRight: "2rem" }

  },
  {
src:insta,
alt:'insta',
style:{ width: "15px", height: "20px", marginRight: "2rem" }

  },
]

export const button=[
  
{
  title:'Add selected to cart',
    style:{borderRadius: "20px",
    color: "white",
    background: "#7CB342",
    width: "190px",
    padding: " 0.2rem 1rem",
    border: "none",
    marginRight: "10px"}
  },
  {
    title:' Add all to cart',
    style:{borderRadius: "20px",
    color: "#7CB342",
    background: "white",
    width: "190px",
    padding: " 0.2rem 1rem",
    border: "1px solid #7CB342"}
  }
]