import React, { useEffect, useState } from "react";
import "./groceryProduct.css";
import "../../../App.css";
import { Link } from "react-router-dom";
import {
  fetchProductByProductId,
  fetchProducts,
} from "../../../api/product-apis";
import { fetchStores } from "../../../api/store-apis";
import {
  createShoppingCart,
  fetchShoppingCart,
  addProductToStoreByCartId,
  getSavedProductsByCartId,
} from "../../../api/shopping-cart-apis";
import { useDispatch, useSelector } from "react-redux";
// import {Dropdown,DropdownButton} from 'react-dropdown';
import { productData } from "./GroceryProductData";
import { DropdownButton, Dropdown } from "react-bootstrap";
import WishlistHeart from "../WishlistHeart/WishlistHeart";
import "../../Mediaquery/Home/Home.css";
import { useCookies } from "react-cookie";


export default function GroceryProduct() {
  const [cookies, setCookie] = useCookies(["cartId"]);

  let cartIdInCookie = cookies.cartId;
  console.log("cartId", cartIdInCookie);
  const [data, setData] = useState({
    count: 1,
    addToCart: true,
  });
  const [product, setproduct] = useState([]);
  const [productDescriptionItem, setProductDescriptionItem] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const increaseQuantity = () => {
    setData({ ...data, count: data.count + 1 });
  };
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleAddToCart = (productId) => {
    console.log(productId, "productId");
    let customerId = "5f292a84f6723e5694e675b5";
    let storeId = "5efab6885f3b8231a5a4f04e";
    let productBody = {
      totalCount: 0,
      productList: [
        {
          productId: `${productId}`,
          quantity: 1,
        },
      ],
    };
    // let productId = "5f293cb7f6723e5694e675b6";
    let productInCart = cartItems.find((cartItem) => {
      return cartItem.productId === productId ? cartItem : null;
    });

    if (!productInCart) {
      if (!cartIdInCookie) {
        console.log(
          "CartId is not in cookies! Create a shopping cart first and then add the product to the cart."
        );
        let data = {
          customerId: `${customerId}`,
          stores: [
            {
              storeId: `${storeId}`,
            },
          ],
        };

        createShoppingCart(data)
          .then((res) => {
            console.log("createdShoppingCartKey", res.data.keyValue);
            let key = res.data.keyValue;
            fetchShoppingCart(key).then((res) => {
              if (res.data !== null) {
                console.log("getShoppingCartDetails", res.data);
                let cartId = res.data.stores[0].cartId;
                console.log("obtainedCartId", cartId);
                setCookie("cartId", cartId, { path: "/" });

                addProductToStoreByCartId(cartId, productBody).then(
                  (res) => {
                    console.log(
                      "successfullyAddedProductToCart",
                      res
                    );

                    getSavedProductsByCartId(storeId, cartId).then(
                      (res) => {
                        console.log("getAddedProductsInCart", res.data);
                        dispatch({ type: "ADD_TO_CART", payload: res.data });
                      }
                    );
                  }
                );
              }
            });
          })

          .catch((err) => {
            console.log(err);
          });
      } else {
       
        let storeId = "5efab6885f3b8231a5a4f04e";
        let productData = {
          totalCount: 0,
          productList: [
            {
              productId: `${productId}`,
              quantity: 1,
            },
          ],
        };

        addProductToStoreByCartId(cartIdInCookie, productData).then((res) => {
          console.log("successfullyAddedProductToCart", res.data);

          getSavedProductsByCartId(storeId, cartIdInCookie).then((res) => {
            console.log("getAddedProductsInCart", res.data);
            dispatch({ type: "ADD_TO_CART", payload: res.data });
          });
        });
      }
    } else {
      dispatch({ type: "INCREMENT_PRODUCT_QUANTITY", productId });
    }
  };

  useEffect(() => {
  
    fetchProducts()
      .then((res) => {
        console.log("response", res.data);
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    const storeId = "5efab6885f3b8231a5a4f04e";
    const productId = "5f03f4bd8840226da1d6f09c";

    console.log("storeIdInProductDescription", storeId);
    console.log("productIdInProductDescription", productId);

    fetchProductByProductId(storeId, productId)
      .then((res) => {
        console.log("productDescriptionItem", res.data);
        setProductDescriptionItem([res.data]);
        setProductImages(res.data.images);
      })
      .catch((err) => {
        console.log(err);
      });

    fetchStores(storeId).then((res) => {
      //  console.log("fetchStores", res.data);
    });

    
  }, []);
 console.log(product,"productproductproduct")
 console.log(cartItems,"cartItems")
  return (
    <div className="groceryWrapper">
      <div className="grocery-dispFlex">
        <div class="headDesBox">
          <div class="headImgWrap">
            <img
              src="https://i.ibb.co/5xm326n/Group-1825.png"
              class="headDesImg"
            />
          </div>
          <div className="groceryProd">
            <p>Vegetables</p>
          </div>
          <div class="headDesLine"></div>
        </div>
        <div id="background">
          <p id="bg-text">Farm Fresh</p>
        </div>
      </div>
      <div class="container-fluid grocerycontainer-Padd">
        <div class="row zoom-effect-container mobResGroceryWrap">
        {/*
        
          {productData.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index % 2 === 0
                    ? "col-lg-3 col-md-4 col-sm-6 col-6 product-card  mx-bottom productBorderRight productBorderBtm mobResGroceryAlign"
                    : "col-lg-3 col-md-4 col-sm-6 col-6 product-card  mx-bottom  productBorderBtm mobResGroceryAlign"
                }
              >
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <WishlistHeart />
                </div>
                <div class="product-wraper">
                  <Link to="/product-detail">
                    <div className="productImgWrap">
                      {" "}
                      <img className="card-product-img" src={item.img} alt="" />
                    </div>
                  </Link>
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
                        <span class="productlist-price-currency">
                          {item.currency}
                        </span>
                        <span class="productlist-price-number">
                          {item.price}
                        </span>
                      </div>

                      <div style={{ position: "absolute", right: "20px" }}>
                        {data.addToCart ? (
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
                              style={{ width: "25px" }}
                            />
                          </button>
                        ) : (
                          <div
                            style={{
                              align: "center",
                              display: "flex",
                              border: "0px solid transparent",
                              borderRadius: "13px",
                              background: "#43BF60",
                              height: "20px",
                            }}
                          >
                            <button
                              className="mobRespm-btn minus"
                              style={{
                                width: "18px",
                                fontSize: "14px",
                                height: "21px",
                              }}
                              onClick={() =>
                                data.count > 1
                                  ? setData({ ...data, count: data.count - 1 })
                                  : setData({ ...data, addToCart: true })
                              }
                            >
                              -
                            </button>
                            <div
                              className="mobRespm-txt"
                              style={{
                                width: "20px",
                                fontSize: "14px",
                                height: "22px",
                              }}
                            >
                              {data.count}
                            </div>
                            <button
                              className="mobRespm-btn plus"
                              style={{
                                width: "18px",
                                fontSize: "14px",
                                height: "21px",
                              }}
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
          */}

          {product.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index % 2 === 0
                    ? "col-lg-3 col-md-4 col-sm-6 col-6 product-card  mx-bottom productBorderRight productBorderBtm mobResGroceryAlign"
                    : "col-lg-3 col-md-4 col-sm-6 col-6 product-card  mx-bottom  productBorderBtm mobResGroceryAlign"
                }
              >
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <WishlistHeart />
                </div>
                <div class="product-wraper">
                  <Link to="/product-detail">
                    <div className="productImgWrap">
                      {" "}
                      <img className="card-product-img" src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${item.image}`} alt="" />
                    </div>
                  </Link>
                  <div class="product-detail">{item.productName}</div>
                  <div className="prodpriceWrap">
                    <div class="product-price  MobileViewHide-Home">
                      <span
                        class="product-price-currency"
                        style={{ color: "white" }}
                      >
                        AED
                      </span>
                      <span
                        class="product-price-number"
                        style={{ color: "white" }}
                      >
                        30.00
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
                    <button className="cartWrap MobileViewHide-Home" style={{border:0}}  onClick={(e) => handleAddToCart(item.id)}>
                      <img src="https://i.ibb.co/zffNH34/cart.png" className="cart-Img" />
                    </button>

                    <div className="mobRes-CartWrap">
                      <div class="mobproductList-price">
                        <span class="productlist-price-currency">
                          AED
                        </span>
                        <span class="productlist-price-number">
                         30.00
                        </span>
                      </div>

                      <div style={{ position: "absolute", right: "20px" }}>
                        {data.addToCart ? (
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
                              style={{ width: "25px" }}
                            />
                          </button>
                        ) : (
                          <div
                            style={{
                              align: "center",
                              display: "flex",
                              border: "0px solid transparent",
                              borderRadius: "13px",
                              background: "#43BF60",
                              height: "20px",
                            }}
                          >
                            <button
                              className="mobRespm-btn minus"
                              style={{
                                width: "18px",
                                fontSize: "14px",
                                height: "21px",
                              }}
                              onClick={() =>
                                data.count > 1
                                  ? setData({ ...data, count: data.count - 1 })
                                  : setData({ ...data, addToCart: true })
                              }
                            >
                              -
                            </button>
                            <div
                              className="mobRespm-txt"
                              style={{
                                width: "20px",
                                fontSize: "14px",
                                height: "22px",
                              }}
                            >
                              {data.count}
                            </div>
                            <button
                              className="mobRespm-btn plus"
                              style={{
                                width: "18px",
                                fontSize: "14px",
                                height: "21px",
                              }}
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

          <div className="col-lg-3 col-md-4 col-sm-6 col-12 product-card  mx-bottom productBorderRight productBorderBtm mobResNoBorder">
            <Link to="/product-page">
              <div
                className="mobResViewAllWrap"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10em",
                }}
              >
                <img
                  src="https://i.ibb.co/3CDyHwF/Group-1912.png"
                  alt="Group-1912"
                  border="0"
                ></img>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2em",
                }}
              >
                <div className="viewAllTxt">View All</div>
                <img
                  src="https://i.ibb.co/xS7Tn4n/Group-1915.png"
                  className="viewAllArrow"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
