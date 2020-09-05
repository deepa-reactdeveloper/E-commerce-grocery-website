import React ,{useEffect} from "react";
import { paymentData ,checkoutBtn} from "./paymentcheckoutData";
import "../../../Mediaquery/Checkout/orderProcessing.css"
import { Link } from "react-router-dom";
export default function PaymentCheckout() {

  var segment_str = window.location.pathname;
  var segment_array = segment_str.split('/');
  var last_varibale = segment_array.pop();
  useEffect(() => {}, []);
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
  return (
    
  <div className="PaymentPadd" style={{padding:'22px 44px'}}>{paymentData.map((item, id) => {
    return (
      <div className="row">
        <div className="col-lg-6 col-md 6 col-sm-6 col-6 mobRespaymentCheckout" style={item.style}>{item.title}</div>
        <div className="col-lg-6 col-md 6 col-sm-6 col-6 mobRespaymentCheckout" style={{color:'#848484',fontSize:'18px',fontWeight:'500',paddingBottom:'10px',display:'flex',justifyContent:'flex-end'}}>{item.value}</div>
       
      </div>
    );
  })}
  {checkoutBtn.map((item, id) => {
    return (
      <Link to='/order-processing'>
  <div className="col-lg-12 col-md 12 col-sm-12" style={item.style}> 
  {last_varibale === "cart-checkout" ? "PROCEED TO CHECKOUT":"PROCEED TO PAYMENT"}
  <img src={item.image} style={item.imageStyle}/>
  </div>
  </Link>
    )})}
  </div>
  )
}

// import React from "react";
// import { paymentTitle, paymentValue } from "./paymentcheckoutData";
// export default function PaymentCheckout() {
//   return (
//     <div className="row">
//       {paymentTitle.map((item, id) => {
//         return <div className="col-lg-6 col-md 6 col-sm-6" style={item.style}>{item.title}</div>;
//       })}
//       {paymentValue.map((item, id) => {
//         return <div className="col-lg-6 col-md 6 col-sm-6" style={item.style}>{item.value}</div>;
//       })}
//       <div className="col-lg-12 col-md 12 col-sm-12"></div>
//     </div>
//   );
// }
