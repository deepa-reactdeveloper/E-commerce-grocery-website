import React from "react";
import { specificationData } from "./ProductdetailData";
export default function SpecificationTable() {
  return (
   
    specificationData.map((item, index) => {
      return (
        <div className="mobres_specificationtable" style={item.tableBorder}>
          <div style={item.specificationTitleStyle}>
            {item.specificationTitle}
          </div>
          <div style={item.boxPackTitleStyle}>
            <div
              style={{
                marginBottom: "1rem",
                paddingLeft: "1rem",
                paddingTop: "1rem",
              }}
            >
              {item.boxPackTitle}{" "}
            </div>
            {item.boxPackData.map((values, index) => {
              return (
                <div>
                  <section class="additionalcontainer additionalrow">
                    <div class="additionalrowitem" style={values.style}>
                      {values.title}
                    </div>

                    <div class="additionalrowitem" style={values.style}>
                      {values.value}
                    </div>
                  </section>
                </div>
              );
            })}
          </div>
          <div style={item.generalTitleStyle}>
            <div
              style={{
                marginBottom: "2rem",
                paddingLeft: "1rem",
                paddingTop: "1rem",
              }}
            >
              {item.generalTitle}{" "}
            </div>
            {item.generalData.map((values, index) => {
              return (
                <div>
                  <section class="additionalcontainer additionalrow">
                    <div class="additionalrowitem" style={values.style}>
                      {values.title}
                    </div>

                    <div class="additionalrowitem" style={values.style}>
                      {values.value}
                    </div>
                  </section>
                </div>
              );
            })}
          </div>
        </div>
      );
    })
  
  );
}
