import React, { useState, useEffect } from "react";
import "./categoryFilter.css";
import {
  categoryViewBtn,
  CategoryImgTypes,
  collageImgTypes,
  collageImgTypesgrp2,
  collageImgTypesgrp3,
} from "./CategoryFilterData";
export default function CategoryFilter() {
  const [category, setCategory] = useState({
    listview: true,
  });
  return (
    <div className="categoryWrapper container-marginTop">
      <div className="categorycard">
        <div className="category-dispFlex" style={{justifyContent:'space-between'}}>
          <div className="categoryHeading ">Categories</div>
          <div class="category-dispFlex">
          {categoryViewBtn.map((item, index) => {
            return (
              <div className="category-dispFlex">
                <div
                  className=""
                  style={{ padding: '0px 6px'}}
                  onClick={() =>
                    setCategory({
                      ...category,
                      listview: true,
                    })
                  }
                >
                  <img
                    src={item.Listview}
                    alt={item.ListviewAlt}
                    key={index}
                  
                  />
                </div>
                <div
                style={{ padding: '0px 6px'}}
                  onClick={() =>
                    setCategory({
                      ...category,
                      listview: false,
                    })
                  }
                >
                  <img
                    src={item.Collageview}
                    alt={item.CollageviewAlt}
                    key={index}
                  
                  />
                </div>
              </div>
            );
          })}
            </div>
        </div>
        {category.listview ? (
          <div>
            {CategoryImgTypes.map((item, index) => {
              return (
                <div class="card-horizontal">
                  <div class="img-square-wrapper">
                    <img
                      src={item.icon}
                      alt={item.alt}
                      key={index}
                      className="img-square"
                    />
                  </div>
                  <div class="categorycard-body">
                    <h4 class="categorycard-title">{item.name}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div class="row collage-viewPadd">
            {collageImgTypes.map((item, index) => {
              return (
                <div class="col-12">
                  <div class="collagecard-horizontal">
                    <div class="collageimg-square-wrapper">
                      <img
                        src={item.icon}
                        alt="Card image cap"
                        className="collageimg-square"
                      />
                    </div>
                    <div class="card-body">
                      <h4 class="collagecard-title">{item.name}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
            <div class="row category-dispFlex" style={{padding: '10px 13px'}}>
              {collageImgTypesgrp3.map((item, index) => {
                return (
                  <div class="col-4">
                    <div class="collagecard-horizontal">
                      <div class="smallimg-square-wrapper">
                        <img
                          src={item.icon}
                          alt="Card image cap"
                          className="smallimg-square"
                        />
                      </div>
                      <div class="card-body">
                        <h4 class="smallImgcard-title">{item.name}</h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {collageImgTypesgrp2.map((item, index) => {
              return (
                <div class="col-12">
                  <div class="collagecard-horizontal">
                    <div class="collageimg-square-wrapper">
                      <img
                        src={item.icon}
                        alt="Card image cap"
                        className="collageimg-square"
                      />
                    </div>
                    <div class="card-body">
                      <h4 class="collagecard-title">{item.name}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
            <div class="category-dispFlex " >
              {collageImgTypesgrp3.map((item, index) => {
                return (
                  <div class="col-4">
                    <div class="collagecard-horizontal">
                      <div class="smallimg-square-wrapper">
                        <img
                          src={item.icon}
                          alt="Card image cap"
                          className="smallimg-square"
                        />
                      </div>
                      <div class="card-body">
                        <h4 class="smallImgcard-title">{item.name}</h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
