import React from "react";
import "../../Mediaquery/Checkout/orderProcessing.css";
import "./CartProgressBar.css";
import { cartProgressBar } from "./CartProgressBarData";
export default function CartProgressBar() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mt-3">
          <div class="cart-card">
            <div class="card-Carthorizontal row progressdDispFlex">
              {cartProgressBar.map((item, index) => {
                return (
                  <div className="progressdDispFlex col-lg-4">
                    <div>
                      <img src={item.img} class="imageCart" />
                    </div>
                    <div style={{ display: "block" }}>
                      <progress
                        max="100"
                        value={item.value}
                        class="Progress-main"
                        aria-labelledby="Progress-id"
                      >
                        <div class="Progress-bar" role="presentation">
                          <span
                            class="Progress-value"
                            style={item.styleProgressValue}
                          >
                            &nbsp;
                          </span>
                        </div>
                      </progress>

                      <div class="ProgressBarTxt">{item.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
