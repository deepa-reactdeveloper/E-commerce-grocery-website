import React, { useEffect , useState} from "react";
import {productList} from './ProductListingData'
import "./productListing.css"
import WishlistHeart from "../../home-component/WishlistHeart/WishlistHeart"
import "../../Mediaquery/Home/Home.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
export default function ProductListing() {
  const [data, setData] = useState({
    count: 1,
    addToCart:true,
  });
  const increaseQuantity = () => {
    setData({ ...data, count: data.count + 1 });
  };
    return (
        <div className="mobRes-productPageWrap">
        <div style={{display:'flex'}}>
        <div>Showing 1 - 24 of 8717 products</div>
        <div style={{display:'flex'}}>
         <div>Sort</div>
         <div>
         <button>
         
         </button>
         </div>
        </div>
        </div>
        <div class="container-fluid grocerycontainer-Padd">
        <div class="row">
          {productList.map((item, index) => {
            return (
              <div class="col-lg-3 col-md-3 col-sm-4 col-6 product-card  mx-bottom">
              <div style={{display:'flex',justifyContent:'flex-end'}}>
              <WishlistHeart/>
             </div>
             <div class="product-wraper">
             <div className="productImgWrap">
               {" "}
               <img className="card-product-img" src={item.img} alt="" />
             </div>
             <div class="product-detail">{item.title}</div>
             <div className="prodpriceWrap">
               <div class="product-price  MobileViewHide-Home">
                 <span
                   class="product-price-currency"
                   style={{ color: "white" }}
                 >
                   {item.currency}
                 </span>
                 <span
                   class="product-price-number"
                   style={{ color: "white" }}
                 >
                   {item.price}
                 </span>
               </div>
               <div>
                 <DropdownButton
                   id="dropdown-basic-button"
                   title="2kg"
                   className="prodQuantityDrop MobileViewHide-Home"
                 >
                   <Dropdown.Item
                     href="#/action-1"
                     className="grocdropdownlist"
                   >
                     1kg
                   </Dropdown.Item>
                   <Dropdown.Item
                     href="#/action-2"
                     className="grocdropdownlist"
                   >
                     2kg
                   </Dropdown.Item>
                   <Dropdown.Item
                     href="#/action-3"
                     className="grocdropdownlist"
                   >
                     3kg
                   </Dropdown.Item>
                 </DropdownButton>
               </div>
               <div className="cartWrap MobileViewHide-Home">
                 <img src={item.cart} className="cart-Img" />
               </div>

               <div className="mobRes-CartWrap">
               <div class="mobproductList-price">
               <span
                 class="productlist-price-currency"
                 
               >
                 {item.currency}
               </span>
               <span
                 class="productlist-price-number"
                
               >
                 {item.price}
               </span>
             </div>

             <div style={{position: 'absolute',right: '20px'}}>
               { data.addToCart ? 
                 (
                 <button
                 className="mobRes-addToCart"
                   style={{ border: "0", background: "transparent" }}
                   onClick={() =>
                     setData({
                       ...data,
                       addToCart: false,
                     })
                   }
                 >
                   <img
                     src={item.Addicon}
                     alt="Add-icon"
                     style={{ width: "25px" 
                     }}
                   />
                 </button>
                 ):(
                   
                   <div style={{align:"center",display:'flex',border: '0px solid transparent',
                   borderRadius: '13px',background: '#43BF60',height: '25px'}}>

                   <button
                     className="mobRespm-btn minus"
                     onClick={() =>
                       data.count > 1
                         ? setData({ ...data, count: data.count - 1 })
                         : setData({ ...data,addToCart:true})
                     }
                   >
                     -
                   </button>
                   <div className="mobRespm-txt">{data.count}</div>
                   <button
                     className="mobRespm-btn plus"
                     onClick={() => increaseQuantity()}
                   >
                     +
                   </button>
                 </div>
                   
                 )}

                 </div>
               </div>
             </div>
           </div>
              </div>
            );
          })}
        </div>
      </div>
        </div>
    )}