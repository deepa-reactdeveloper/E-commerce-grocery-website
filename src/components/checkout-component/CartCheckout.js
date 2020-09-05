import React,{useEffect} from "react";
import CartBanner from "../checkout-component/cartBanner/CartBanner";
import ProductCheckout from "../checkout-component/ProductCheckoutComponent/ProductCheckout"
import ProductCheckoutComponent from "../checkout-component/ProductCheckoutComponent/ProductCheckoutComponent"
export default function CartCheckout() {
  useEffect(() => {}, []);
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
    return (
      <div>
       <CartBanner/>
       <ProductCheckout/>
       <ProductCheckoutComponent/>
      </div>
    );
  }
  