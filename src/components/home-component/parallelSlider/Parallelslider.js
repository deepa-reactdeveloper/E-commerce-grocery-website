import React from "react";
import "./parallelslider.css";
import "../../Mediaquery/Home/Home.css";
import { icondata } from "./ParallelsliderData";

export default function Parallelslider() {
  return (
    <div>
      <div className="parallexbody">
        <footer></footer>
        <div class="object one">
          <div class="row static-displayFlex staticPadd static-displayFlexmargin">
            {icondata.map((item, index) => {
              return (
                <div class="col-lg-4 col-md-4">
                  <div class="static-displayFlex">
                    <div style={item.imgWrap}>
                      <img src={item.icon}  alt="alt" class="img-icon" />
                    </div>
                    <div class="static-displayBlock">
                      <div class="contentHead">{item.heading}</div>
                      <div class="contentBody">{item.body}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <footer></footer>
      </div>
      <div className="mobResparallexbody">
       
        <div className="col-md-12 col-sm-12">
          <img
            src="https://i.ibb.co/LNcjvTc/Circle-rect.png"  alt="alt" 
            style={{ width: '100%' }}
          />
          <div className=""  style={{display:'block'}}>
          
            <div className="static-displayFlex" style={{padding: '2rem 0px'}}>
            <div>
              <img
                src="https://i.ibb.co/Qv5QRHH/Artboard1mdpi.png"  alt="alt" 
                style={{ width: '80px' }}
              />
            </div>
            <div style={{display:'block'}}>
            <div class="contentHead" style={{color:'#000000',paddingLeft: '4rem',fontSize:'15px'}}>Guarenteed delivery</div>
            <div class="contentBody" style={{color:'#000000',paddingLeft: '4rem',width: '90%'}}>
              Determined to providea tailor-made service transport is carried
              out by specialised carriers.
            </div>
            </div>
            <div>
              <img
                src="https://i.ibb.co/tcVM17Z/USP-icons.png"  alt="alt" 
                style={{ width: "100%", padding: "37px 0px" }}
              />
            </div>
          </div>
          <div className="static-displayFlex" style={{padding: '2rem 0px'}}>
          <div>
          <img
            src="https://i.ibb.co/x73f2h9/USP-icons.png"  alt="alt" 
            style={{ width: '100%', padding: "37px 0px" }}
          />
        </div>
            <div style={{paddingLeft: '2rem'}}>
              <img
                src="https://i.ibb.co/Qv5QRHH/Artboard1mdpi.png"  alt="alt" 
                style={{ width: '80px'}}
              />
            </div>
            <div style={{display:'block'}}>
            <div class="contentHead" style={{color:'#000000',paddingLeft: '3rem',fontSize:'15px'}}>Guarenteed delivery</div>
            <div class="contentBody" style={{color:'#000000',paddingLeft: '3rem',width: '93%'}}>
              Determined to providea tailor-made service transport is carried
              out by specialised carriers.
            </div>
            </div>
          
          </div>
          <div className="static-displayFlex" style={{padding: '2rem 0px'}}>
            <div>
              <img
                src="https://i.ibb.co/Qv5QRHH/Artboard1mdpi.png"  alt="alt" 
                style={{ width: '80px' }}
              />
            </div>
            <div style={{display:'block'}}>
            <div class="contentHead" style={{color:'#000000',paddingLeft: '4rem',fontSize:'15px'}}>Guarenteed delivery</div>
            <div class="contentBody" style={{color:'#000000',paddingLeft: '4rem',width: '90%'}}>
              Determined to providea tailor-made service transport is carried
              out by specialised carriers.
            </div>
            </div>
            <div>
              <img
                src="https://i.ibb.co/tcVM17Z/USP-icons.png"  alt="alt" 
                style={{ width: "100%", padding: "37px 0px" }}
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
