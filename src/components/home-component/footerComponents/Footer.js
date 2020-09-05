import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
import "../../../App.css";
import "../../Mediaquery/Footer/footer.css"
import {
  greenbeltlogo,
  storeApps,
  socialMediaIcon,
  customerCare,
  ourStore,
  findInFast,
  paySecurely,
  footerParagraph,
  contactUs,
  countryCodeDropdown,
  paySecure,
} from "./FooterData";

export default function Footer() {
  const generateFooterLink = (title, link) => {
    return (
      <div className="footerProducts">
        <span className="footerProductsSpan responsiveFont">{title}</span>
        {link ? (
          link.map((item, index) => {
            return (
              <NavLink
                to={`${item.link}`}
                className="footerProductsLinkColor"
                key={index}
                style={{ "font-size": "13px",margin: '8px 0px'}}
              >
                {item.name}
              </NavLink>
            );
          })
        ) : (
          <div className="footerContactUsContainer">
            {greenbeltlogo.map((item, index) => {
              return (
                <div key={index}>
                  <img
                    src={item.greenbeltIcon}
                    alt={item.greenbeltIcon}
                    className="greenbeltlogoImg"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };
  return (
    <div className="container-fluid footerContainer padResNoPadd">
      <div className="row padResFooterRowWrap">
        <div className="col-lg-4 col-md-4 col-sm-12 col-12 footerContactUsContainer">
          {greenbeltlogo.map((item, index) => {
            return (
              <div className="greenbeltlogoMob " key={index}>
                <div className="greenbeltlogo">
                  <img
                    src={item.greenbeltIcon}
                    alt={item.greenbeltIcon}
                    className="greenbeltlogoImg"
                  />
                </div>
              </div>
            );
          })} 
          {footerParagraph.map((item, index) => {
            return (
              <Fragment key={index}>
                <p className="footerParagraph footerpara">{item.paragraph}</p>
              </Fragment>
            );
          })}
          <p
            style={{
              color: "#ffffff",
              fontSize: ".8rem",
              margin: "2.5rem 1rem 0rem 0rem",
              fontSize: "13px",
              wordSpacing: "2px",
            }}
            className="copyright footerPart"
          >
            Got queries? Call Us!
          </p>
          {contactUs.map((item, index) => {
            return (
              <Fragment  className="greenbeltlogoMob" key={index}>
                <p
                  className="footerParagraph"
                  style={{
                    "font-size": "32px",
                    color: "#609561",
                    "font-weight": "inherit",
                  }}
                >
                  {item.mobileNo}
                </p>
              </Fragment>
            );
          })}
          <p
            style={{
              color: "#ffffff",
              fontSize: ".8rem",
              margin: "2rem 1rem 0rem 0rem",
              fontSize: "13px",
              wordSpacing: "2px",
            }}
            className="copyright footerPart"
          >
            Write to us at
          </p>
          {contactUs.map((item, index) => {
            return (
              <Fragment  className="greenbeltlogoMob"  key={index}>
                <p
                  className="footerParagraph"
                  style={{
                    "font-size": "17px",
                    color: "#609561",
                    "font-weight": "inherit",
                  }}
                >
                  {item.email}
                </p>
              </Fragment>
            );
          })}
          <div className="mobileRes-SocialMedia">
          <NavLink to='#'><img src="https://i.ibb.co/N1M2jxS/fb.png"  alt="alt"  style={{width: '70px',height:'50px'}}/></NavLink>
          <NavLink  to='#'><img src="https://i.ibb.co/mhjbdQm/twitter.png"  alt="alt"  style={{width: '70px',height:'50px'}} /></NavLink>
          <NavLink to='#'><img src="https://i.ibb.co/Tcsq6jd/insta.png"  alt="alt"  style={{width: '70px',height:'50px'}} /></NavLink>
          <NavLink to='#'><img src="https://i.ibb.co/1bkv5xs/youtube.png"  alt="alt"  style={{width: '70px',height:'50px'}} /></NavLink>
        </div>
          <div className="footerSocialIConContainer hideNewsLetter">
            {socialMediaIcon.map((item, index) => {
              return (
                <img
                  src={item.icon}
                  alt={item.alt}
                  key={index}
                  style={{ width: "25px" }}
                />
              );
            })}
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 col-12 footerContactUsContainer">
        <div  className="greenbeltlogoMob storeApp">
          {storeApps.map((item, index) => {
            return (
              <div className="footer-displayInline" key={index}>
                <img
                  src={item.googleplayIcon}
                  alt={item.googleplayImgAlt}
                  style={{ height: "40px", "margin-top": "1rem" ,boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'}}
                />
                <img
                  src={item.applestoreIcon}
                  alt={item.applestoreImgAlt}
                  style={{
                    height: "40px",
                    marginTop: "1rem",
                    marginLeft: "1rem",
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
                  }}
                />
              </div>
            );
          })}
</div>
          <p
            style={{
              color: "#ffffff",
              fontSize: ".8rem",
              margin: "3rem 1rem 1rem 0rem",
              fontSize: "13px",
              wordSpacing: "2px",
            }}
            className="copyright footerPart storeApp"
          >
            Send download link to my phone number
          </p>
          <div class="input-group greenbeltlogoMob storeApp greenbeltlogoMobwidth" id="adv-search">
            <div class="input-group-btn">
              <div class="btn-group" role="group">
                <div class="dropdown dropdown-lg">
                  {countryCodeDropdown.map((item, id) =>
                    item.dropdownItem.map((menuItem, index) => {
                      return (
                        <div key={id}>
                          <form class="form-horizontal" role="form">
                            <button
                              type="button"
                              class="btn btn-default dropdown-toggle floa"
                              style={{ width: "66px", height: "44px",background:'white' }}
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                            
                            </button>
                            <div class="dropdown-menu" role="menu">
                              <option selected>{menuItem.name}</option>
                              <option value="aus">{menuItem.name}</option>
                              <option value="indo">{menuItem.name}</option>
                              <option value="france">{menuItem.name}</option>
                            </div>
                          </form>
                        </div>
                      );
                    })
                  )}
                </div>

                <input
                  type="text"
                  class="form-control footerFormwidth"
                  placeholder=""
                  pattern="/^[0-9]{6}$/"
                />

                <button
                  type="button"
                  class="btn footerSend"
                  style={{
                    width: "60px",
                    background: "#66BB6A",
                    color: "white",
                  }}
                >
                  <span class="" aria-hidden="true" style={{}}>
                    Send
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="footer-displayflex marProduct footerNone">
            {generateFooterLink("Customer Care", customerCare)}
            <div className="aligningstore">
              {generateFooterLink("Our Store", ourStore)}
            </div>
          </div>
          <div style={{display:'flex',justifyContent:'space-around'}}>
          <div className="mobileRes-SocialMedia padResShow">
          <div style={{color:'#424242',fontSize:'18px',margin:'10px 0px 18px 0px',fontWeight:'600'}}>My Account</div>
          <div style={{margin: '10px 0px',color:'#000000',fontWeight: '400'}}>Blog</div>
          <div style={{margin: '10px 0px',color:'#000000',fontWeight: '400'}} >Cart</div>
          <div style={{margin: '10px 0px',color:'#000000',fontWeight: '400'}}>Checkout</div>
          <div style={{margin: '10px 0px',color:'#000000',fontWeight: '400'}}>Order Tracking</div>
          <div style={{margin: '10px 0px',color:'#000000',fontWeight: '400'}}>Wishlist</div>
        </div>
        <div className="mobileRes-SocialMedia padResShow">
          <div style={{color:'#424242',fontSize:'18px',margin:'10px 0px 18px 0px',fontWeight:'600'}}>Why Buy from us</div>
          <div style={{margin: '10px 0px',color:'#000000',fontWeight: '400'}}>Shipping & Returns</div>
          <div style={{margin: '10px 0px',color:'#000000',fontWeight: '400'}}>Secure shipping</div>
          <div style={{margin: '10px 0px',color:'#000000',fontWeight: '400'}}>International Shipping</div>
          <div style={{margin: '10px 0px',color:'#000000',fontWeight: '400'}}>Affiliates</div>
          <div style={{margin: '10px 0px',color:'#000000',fontWeight: '400'}}>Group Sales</div>
        </div>
        </div>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-12 col-12 footerContactUsContainer">
        <div className="footerNone" style={{ marginTop: "0rem" }}>
        {generateFooterLink("Pay Securely with", paySecure)}
      </div>
      {paySecurely.map((item, index) => {
        return (
          <div key={index}>
            <div className="footerNone footer-displayInline">
              <img
                src={item.visaIconIcon}
                alt={item.visaIconImgAlt}
                style={{ height: "20px", "margin-top": "1rem" }}
              />
              <img
                src={item.mastercardIcon}
                alt={item.mastercardIconImgAlt}
                style={{
                  height: "26px",
                  marginTop: "1rem",
                  marginLeft: "5rem",
                }}
              />
            </div>
            <div className="footerNone footer-displayInline">
              <img
                src={item.mastercardsecurecodeIconIcon}
                alt={item.mastercardsecurecodeIconImgAlt}
                style={{
                  height: "22px",
                  marginTop: "3rem",
                  marginLeft: "5px",
                }}
              />
              <img
                src={item.verifiedbyvisaIconIcon}
                alt={item.verifiedbyvisaIconImgAlt}
                style={{
                  height: "29px",
                  marginTop: "3rem",
                  marginLeft: "4rem",
                }}
              />
            </div>
          </div>
        );
      })}
         <div className="footerNone" style={{ marginTop: "66px" }}> {generateFooterLink("Find in Fast", findInFast)}</div>
         
        { /* <p
            style={{
              color: "#ffffff",
              fontSize: ".8rem",
              margin: "3rem 1rem 1rem 0rem",
              fontSize: "13px",
              wordSpacing: "2px",
            }}
            className="copyright footerNone"
          >
            Powered by
          </p>
          {honeysyslogo.map((item, index) => {
            return (
              <div className="footerNone" key={index}>
                <div className="honeysyslogo">
                  <img
                    src={item.honeysyslogoIconIcon}
                    alt={item.honeysyslogoIconImgAlt}
                    className="honeysyslogoImg"
                  />
                </div>
              </div>
            );
          })}*/}
          <div style={{display:'flex',justifyContent:'space-around'}}>
          <div className="mobileRes-SocialMedia padResShow">
          <div style={{color:'#424242',fontSize:'18px',margin:'10px 0px',fontWeight:'600'}}>Pay securely </div>
          <NavLink to='#'><img src="https://i.ibb.co/LRYwNS7/visa.png"  alt="alt"  style={{width: '90px',height:'40px',padding: '4px 10px',display:'block',margin: '2rem 0rem'}}/></NavLink>
          <NavLink  to='#'><img src="https://i.ibb.co/d5pLkZQ/mastercard.png"  alt="alt"  style={{width: '90px',height:'40px',padding: '4px 10px',display:'block',margin: '2rem 0rem'}}/></NavLink>
          <NavLink to='#'><img src="https://i.ibb.co/rZL3zqP/mastercardsecurecode.png"  alt="alt"  style={{width: '90px',height:'40px',padding: '4px 10px',display:'block',margin: '2rem 0rem'}}/></NavLink>
          
        </div>
        </div>
        </div>
      </div>
      <div className="mobileRes-SocialMedia">
      <NavLink to='#'><img src="https://i.ibb.co/LRYwNS7/visa.png"  alt="alt"  style={{width: '80px',height:'35px',padding: '1px 10px'}}/></NavLink>
      <NavLink  to='#'><img src="https://i.ibb.co/d5pLkZQ/mastercard.png"  alt="alt"  style={{width: '80px',height:'35px',padding: '1px 10px'}}/></NavLink>
      <NavLink to='#'><img src="https://i.ibb.co/rZL3zqP/mastercardsecurecode.png"  alt="alt"  style={{width: '80px',height:'35px',padding: '1px 10px'}}/></NavLink>
      
    </div>
      <div className="row greenbeltlogoMob mobileRes">
      <div className="tabRes-SocialMedia">
        <NavLink to='#' className="mobfooterNone"><img src="https://i.ibb.co/N1M2jxS/fb.png"  alt="alt"  style={{width: '65px',height:'45px'}}/></NavLink>
        <NavLink  to='#' className="mobfooterNone"><img src="https://i.ibb.co/mhjbdQm/twitter.png"  alt="alt"  style={{width: '65px',height:'45px'}} /></NavLink>
        <NavLink to='#' className="mobfooterNone"><img src="https://i.ibb.co/Tcsq6jd/insta.png"  alt="alt"  style={{width: '65px',height:'45px'}} /></NavLink>
        <NavLink to='#' className="mobfooterNone"><img src="https://i.ibb.co/1bkv5xs/youtube.png"  alt="alt"  style={{width: '65px',height:'45px'}} /></NavLink>
      </div>
      <div className="PadResstoreapp">
      <div  className="greenbeltlogoMob padResShow">
      {storeApps.map((item, index) => {
        return (
          <div className="footer-displayInline" key={index}>
            <img
              src={item.googleplayIcon}
              alt={item.googleplayImgAlt}
              style={{ height: "40px", "margin-top": "1rem" }}
            />
            <img
              src={item.applestoreIcon}
              alt={item.applestoreImgAlt}
              style={{
                height: "40px",
                marginTop: "1rem",
                marginLeft: "1rem",
              }}
            />
          </div>
        );
      })}
</div>
</div>
        <p
          style={{
            color: "#ffffff",
            fontSize: ".8rem",
            margin: "1rem 1rem 0rem 0rem",
            fontSize: "13px",
          }}
          className="copyright copyrightMobMargin tabResCopyright"
        >
          All Rights reserved © Copyright 2019
        </p>
      </div>
    </div>
  );
}
