import React, { useState } from "react";
import "./productCart.css";
import "../../../../App.css";
import "../../../Mediaquery/Checkout/ProductCart.css";
import {
  prodHeading,
  mobResprodHeading,
  productBody,
  viewall,
} from "./ProductCartData";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import "../../../Mediaquery/Home/Home.css";
import "../../../home-component/groceryComponents/groceryProduct.css";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ProductCart() {
  const [data, setData] = useState({
    count: 1,
  });
  const increaseQuantity = () => {
    setData({ ...data, count: data.count + 1 });
  };
  const classes = useStyles();
  return (
    <div
      className="conainer-fluid cart-padding"
      style={{ paddingLeft: "5rem", paddingRight: "5rem" }}
    >
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className="mobResHide">
              {prodHeading.map((item, id) => {
                return <TableCell style={item.style}>{item.name}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow className="mobResShow" style={{ display: "none" }}>
              {mobResprodHeading.map((item, id) => {
                return <TableCell style={item.style}>{item.name}</TableCell>;
              })}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productBody.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ display: "flex" }}
                >
                  <img
                    className="mobResCartImg"
                    src={row.img}
                    style={row.imgStyle}
                  />
                  &nbsp;&nbsp;&nbsp;
                  <div
                    className="mobResProdNameWrap"
                    style={{ display: "block" }}
                  >
                    <div className="" style={{ display: "flex" }}>
                      <div className="mobResProdName" style={row.nameQuanStyle}>
                        {row.name}
                      </div>
                      <img
                        className="mobResShowFlex"
                        src={row.deleteImg}
                        style={{
                          width: "20px",
                          position: "absolute",
                          right: "10px",
                        }}
                      />
                    </div>
                    <div
                      className="prodCartQuantStyle"
                      style={{ display: "flex", lineHeight: "30px" }}
                    >
                      {row.quantity}
                      <span
                        className="mobResShow"
                        style={{ padding: "0rem 5px" }}
                      >
                        X
                      </span>
                      <span
                        className="mobResShow"
                        style={{ padding: "0px 0px 0px 5px", fontSize: "12px" }}
                      >
                        AED
                      </span>
                      <span
                        className="mobResShow"
                        style={{
                          padding: "0rem 5px",
                          fontSize: "14px",
                          fontSize: "18px",
                        }}
                      >
                        30.00
                      </span>
                    </div>
                    <div className="mobResShowFlex">
                      <div
                        style={{
                          align: "center",
                          display: "flex",
                          border: "0px solid transparent",
                          borderRadius: "13px",
                          background: "#43BF60",
                          height: "25px",
                          width: "80px",
                        }}
                      >
                        <button
                          className="mobRespm-btn minus"
                          onClick={() =>
                            data.count > 1
                              ? setData({ ...data, count: data.count - 1 })
                              : setData({ ...data, addToCart: true })
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
                      <div
                        style={{
                          display: "flex",
                          position: "absolute",
                          right: "15px",
                          color: "#44BD60",
                          fontWeight: "600",
                        }}
                      >
                        <span
                          className="mobResShow"
                          style={{
                            padding: "0px 0px 0px 5px",
                            fontSize: "12px",
                            lineHeight: "26px",
                          }}
                        >
                          AED
                        </span>
                        <span
                          className="mobResShow"
                          style={{
                            padding: "0rem 5px",
                            fontSize: "14px",
                            fontSize: "18px",
                          }}
                        >
                          30.00
                        </span>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell
                  className="mobResHide"
                  style={row.priceStyle}
                  align="center"
                >
                  {row.price}
                </TableCell>
                <TableCell className="mobResHide" align="center">
                  <div
                    style={{
                      align: "center",
                      display: "flex",
                      border: "0px solid transparent",
                      borderRadius: "13px",
                      background: "#43BF60",
                      height: "25px",
                      width: "80px",
                    }}
                  >
                    <button
                      className="mobRespm-btn minus"
                      onClick={() =>
                        data.count > 1
                          ? setData({ ...data, count: data.count - 1 })
                          : setData({ ...data, addToCart: true })
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
                </TableCell>
                <TableCell
                  className="mobResHide"
                  style={row.priceStyle}
                  align="center"
                >
                  {row.subtotal}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {viewall.map((item, id) => {
        return (
          <div>
            <div style={item.lineStyle}>
              <div className="mobResviewalldiv" style={item.viewalldiv}>
                <button style={item.viewallBtn}>
                  <img src={item.viewall} style={item.viewallImg} />
                </button>
                <div className="mobResHide" style={item.viewallTxt}>
                  View all
                </div>
              </div>
            </div>

            <div
              className="mobRescartWrapDelete"
              style={{ display: "flex", paddingLeft: "3rem" }}
            >
              {item.suggestionBtn.map((item, index) => {
                return (
                  <div>
                    <button style={item.style}>
                      {" "}
                      <img
                        src={item.img}
                        style={{ width: "15px", marginRight: "8px" }}
                      />
                      {item.title}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
