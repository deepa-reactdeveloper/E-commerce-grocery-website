import React, { useEffect, useState } from "react";
import "../../home-component/headerComponents/header.css";
import { cartData } from "../../home-component/headerComponents/HeaderData";
import { Link } from "react-router-dom";
import { cartDropdownData } from "../../checkout-component/ProductCheckoutComponent/PaymentCheckout/paymentcheckoutData";
import "../../Mediaquery/Checkout/orderProcessing.css";
import { useDispatch, useSelector } from "react-redux";


export default function CartDropdown() {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const [state, setstate] = useState({
    productShow: true,
  });
  const [data, setData] = useState({
    count: 1,
  });
  const increaseQuantity = () => {
    setData({ ...data, count: data.count + 1 });
  };
  useEffect(() => {
    window.onclick = function (event) {
      if (!event.target.matches(".headerDropdown")) {
        var dropdowns = document.getElementsByClassName("Cartdropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("cartshow")) {
            openDropdown.classList.remove("cartshow");
          }
        }
      }
    };
  }, []);
  const myFunction = (e) => {
    e.preventDefault();
    document.getElementById("myCartDropdown").classList.toggle("cartshow");
    console.log("The link was clicked.");
  };

  const scrollview = () => {
    setstate({ ...state, productShow: false });
  };

  console.log(cartItems,"uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")
  return (
    <div className="cart-margin" style={{ marginRight: "3rem" }}>
      <div class="dropdown">
        <button onClick={myFunction} class="headerDropdown">
          <img
            class="cartImg"
            src="https://i.ibb.co/M5X9zMJ/cart.png"
            alt="Cart"
          />
          <div class="grid-nav-header">Cart</div>
        </button>
        <div
          id="myCartDropdown"
          class="Cartdropdown-content"
          style={{ padding: "10px", background: "#ffffff" }}
        >
          <div style={{ display: "flex", padding: "3px 1rem" }}>
            <div>
              {" "}
              <img
                class="cartImg"
                src="https://i.ibb.co/M5X9zMJ/cart.png"
                alt="Cart"
              />
            </div>
            <div
              style={{ fontSize: "17px", fontWeight: "300", color: "#424242" }}
            >
              Shopping Cart{" "}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              borderBottom: "1px solid #EEEEEE",
            }}
          >
            <button
              style={{
                border: "0",
                background: "transparent",
                fontSize: "11px",
                fontWeight: "300",
              }}
            >
              Clear Cart
            </button>
          </div>

          <div>
            {
              state.productShow ? (
              cartItems.map((item, index) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      borderBottom: "1px solid #EEEEEE",
                      padding: "0.8rem 4px",
                    }}
                  >
                    <div>
                      <img
                        src={item.img}  alt="alt" 
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                    <div style={{ paddingLeft: "8px" }}>
                      <div style={{
                        fontSize:'11px',
                        color:'#757575',
                        
                      }}>{item.productName}</div>
                      <div
                        style={{
                          display: "flex",
                          fontSize: "10px",
                          fontWeight: "300",
                          color: "#757575",
                        }}
                      >
                        <div>{item.quantity}</div>
                        <div>X</div>
                        <div>{item.noOFItem}</div>
                      </div>
                      <div>
                        <div
                          style={{
                            align: "center",
                            display: "flex",
                            border: "0px solid transparent",
                            borderRadius: "13px",
                            background: "#43BF60",
                            height: "15px",
                            width: "45px",
                          }}
                        >
                          <button
                            className="mobRespm-btn minus"
                            style={{
                              width: "15px",
                              fontSize: "12px",
                              height: "17px",
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
                              width: "15px",
                              height: "17px",

                              fontSize: "11px",
                            }}
                          >
                            {data.count}
                          </div>
                          <button
                            className="mobRespm-btn plus"
                            style={{
                              width: "15px",
                              fontSize: "12px",
                              height: "17px",
                            }}
                            onClick={() => increaseQuantity()}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div style={{ marginLeft: "30px" }}>
                      <button
                        style={{ border: "0", background: "transparent" }}
                      >
                        <img
                          src="https://i.ibb.co/r237rbv/delete-Product.png"  alt="alt" 
                          style={{ width: "10px", height: "10px" }}
                        />
                      </button>
                    </div>
                  </div>
                );
              })
              ) : (
              <div id="overflowTest">
                {cartItems.map((item, index) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        borderBottom: "1px solid #EEEEEE",
                        padding: "0.8rem 4px",
                      }}
                    >
                      <div>
                        <img
                          src={item.img}  alt="alt" 
                          style={{ width: "50px", height: "50px" }}
                        />
                      </div>
                      <div style={{ paddingLeft: "8px" }}>
                        <div style={{
                          fontSize:'11px',
                          color:'#757575',
                          
                        }}>{item.productName}</div>
                        <div
                          style={{
                            display: "flex",
                            fontSize: "10px",
                            fontWeight: "300",
                            color: "#757575",
                          }}
                        >
                          <div>{item.quantity}</div>
                          <div>X</div>
                          <div>{item.noOFItem}</div>
                        </div>
                        <div>
                        <div
                          style={{
                            align: "center",
                            display: "flex",
                            border: "0px solid transparent",
                            borderRadius: "13px",
                            background: "#43BF60",
                            height: "15px",
                            width: "45px",
                          }}
                        >
                          <button
                            className="mobRespm-btn minus"
                            style={{
                              width: "15px",
                              fontSize: "12px",
                              height: "17px",
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
                              width: "15px",
                              height: "17px",

                              fontSize: "11px",
                            }}
                          >
                            {data.count}
                          </div>
                          <button
                            className="mobRespm-btn plus"
                            style={{
                              width: "15px",
                              fontSize: "12px",
                              height: "17px",
                            }}
                            onClick={() => increaseQuantity()}
                          >
                            +
                          </button>
                        </div>
                        </div>
                      </div>
                      <div style={{ marginLeft: "30px" }}>
                        <button
                          style={{ border: "0", background: "transparent" }}
                        >
                          <img
                            src="https://i.ibb.co/r237rbv/delete-Product.png"  alt="alt" 
                            style={{ width: "10px", height: "10px" }}
                          />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
             )
          
            }

          {  /* 

            {
              state.productShow ? (
              cartData.map((item, index) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      borderBottom: "1px solid #EEEEEE",
                      padding: "0.8rem 4px",
                    }}
                  >
                    <div>
                      <img
                        src={item.img}  alt="alt" 
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                    <div style={{ paddingLeft: "8px" }}>
                      <div style={item.titlestyle}>{item.title}</div>
                      <div
                        style={{
                          display: "flex",
                          fontSize: "10px",
                          fontWeight: "300",
                          color: "#757575",
                        }}
                      >
                        <div>{item.quantity}</div>
                        <div>X</div>
                        <div>{item.noOFItem}</div>
                      </div>
                      <div>
                        <div
                          style={{
                            align: "center",
                            display: "flex",
                            border: "0px solid transparent",
                            borderRadius: "13px",
                            background: "#43BF60",
                            height: "15px",
                            width: "45px",
                          }}
                        >
                          <button
                            className="mobRespm-btn minus"
                            style={{
                              width: "15px",
                              fontSize: "12px",
                              height: "17px",
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
                              width: "15px",
                              height: "17px",

                              fontSize: "11px",
                            }}
                          >
                            {data.count}
                          </div>
                          <button
                            className="mobRespm-btn plus"
                            style={{
                              width: "15px",
                              fontSize: "12px",
                              height: "17px",
                            }}
                            onClick={() => increaseQuantity()}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div style={{ marginLeft: "30px" }}>
                      <button
                        style={{ border: "0", background: "transparent" }}
                      >
                        <img
                          src="https://i.ibb.co/r237rbv/delete-Product.png"  alt="alt" 
                          style={{ width: "10px", height: "10px" }}
                        />
                      </button>
                    </div>
                  </div>
                );
              })
              ) : (
              <div id="overflowTest">
                {cartData.map((item, index) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        borderBottom: "1px solid #EEEEEE",
                        padding: "0.8rem 4px",
                      }}
                    >
                      <div>
                        <img
                          src={item.img}  alt="alt" 
                          style={{ width: "50px", height: "50px" }}
                        />
                      </div>
                      <div style={{ paddingLeft: "8px" }}>
                        <div style={item.titlestyle}>{item.title}</div>
                        <div
                          style={{
                            display: "flex",
                            fontSize: "10px",
                            fontWeight: "300",
                            color: "#757575",
                          }}
                        >
                          <div>{item.quantity}</div>
                          <div>X</div>
                          <div>{item.noOFItem}</div>
                        </div>
                        <div>
                        <div
                          style={{
                            align: "center",
                            display: "flex",
                            border: "0px solid transparent",
                            borderRadius: "13px",
                            background: "#43BF60",
                            height: "15px",
                            width: "45px",
                          }}
                        >
                          <button
                            className="mobRespm-btn minus"
                            style={{
                              width: "15px",
                              fontSize: "12px",
                              height: "17px",
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
                              width: "15px",
                              height: "17px",

                              fontSize: "11px",
                            }}
                          >
                            {data.count}
                          </div>
                          <button
                            className="mobRespm-btn plus"
                            style={{
                              width: "15px",
                              fontSize: "12px",
                              height: "17px",
                            }}
                            onClick={() => increaseQuantity()}
                          >
                            +
                          </button>
                        </div>
                        </div>
                      </div>
                      <div style={{ marginLeft: "30px" }}>
                        <button
                          style={{ border: "0", background: "transparent" }}
                        >
                          <img
                            src="https://i.ibb.co/r237rbv/delete-Product.png"  alt="alt" 
                            style={{ width: "10px", height: "10px" }}
                          />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
             )
          
            }
            */}
            {cartDropdownData.map((item, index) => {
              return (
                <div
                  className="row"
                  style={{ fontSize: "11px", padding: "3px 18px" }}
                >
                  <div className="col-lg-6 col-md-6">{item.title}</div>
                  <div
                    className="col-lg-6 col-md-6"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    {item.value}
                  </div>
                </div>
              );
            })}
            <div style={{ padding: "1px 16px" }}>
              <Link to="/cart-checkout">
                <button
                  style={{
                    border: "0",
                    padding: "6px 90px",
                    background: "#66BB6A",
                    color: "white",
                  }}
                >
                  Checkout
                </button>
              </Link>
            </div>
            <div className="viewAllWrap">
              <button className="viewallcart" onClick={scrollview}>
                View All items
                <span class="caret" style={{ opacity: "0.3" }}></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
