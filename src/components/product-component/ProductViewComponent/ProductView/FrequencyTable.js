import React from "react";
import "../../../../App.css";
import { faqData } from "./ProductViewData";
export default function FrequencyTable() {
  return (
      <div>
      {faqData.map((item, index) => {
        return (
          <div style={item.tableBorder}>
            <div style={item.faqStyle}>{item.faqTitle}</div>
    
            {item.faqdata.map((values, index) => {
              return (
                <div style={{ borderBottom: "2px solid #E0E0E0", padding: "12px" }}>
                  <div style={values.style}>{values.question}</div>
                  <div style={{ color: "#616161",
                  fontSize: "12px",
                  fontWeight: "300",
                  paddingBottom: "10px"}}>{values.answer}</div>
                  <div
                    style={{
                      fontSize: "10px",
                      lineHeight: "0px",
                      float: "right",
                      fontWeight: "300",
                    }}
                  >
                    {values.duration}
                  </div>
                </div>
              );
            })}
            <div></div>
            {item.buttonFaq.map((values, index) => {
              return (
                <div classname="buttonFaqWrap" key={index} style={values.buttondivStyle}>
                <button className="buttonFaq" style={values.buttonStyle}>
                  Have a question in mind? Please type here...
                </button>
              </div>
              );
            })}
            
          </div>
        );
      })}
      
  </div>
  );
}
