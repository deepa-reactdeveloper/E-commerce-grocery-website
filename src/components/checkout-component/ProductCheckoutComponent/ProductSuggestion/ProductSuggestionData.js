import React from "react";
import cancel from "../../../../assets/productdetail/cancel.png"
import prod1 from "../../../../assets/productdetail/Suggestionproduct/prod1.png";
import prod2 from "../../../../assets/productdetail/Suggestionproduct/prod2.png";
import prod3 from "../../../../assets/productdetail/Suggestionproduct/prod3.png";
import prod4 from "../../../../assets/productdetail/Suggestionproduct/prod4.png";
import cart from "../../../../assets/grocery/cart.png";
import leftArrow from "../../../../assets/grocery/LeftArrow.png";
import rightArrow from "../../../../assets/grocery/RightArrow.png"

function ArrowButton(props) {
  const { className, style, onClick, arrow, rightArrow } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "60px",
        height: "60px",
        display: "flex",
        zIndex: "99",
        fontSize:'20px',
        marginRight:`${rightArrow}`
      }}
      onClick={onClick}
    >
      <img src={arrow} alt="arrow" style={{width:'26px'}}  />
    </div>
  );
}

export const suggestionBtn = [
    {
      title: `Save for later`,
      style: {
        color: "#BDBDBD",
        background: "#ffffff",
        border: "1px solid #E2E2E2",
        fontSize: "14px",
        fontWeight: "400",
        padding: "8px 3rem",
        marginRight:'3rem'
      },
    },
    {
      title: `Clear cart`,
      img:cancel,
      style: {
        color: "#BDBDBD",
        background: "#ffffff",
        border: "1px solid #E2E2E2",
        fontSize: "14px",
        fontWeight: "400",
        padding: "8px 4rem",
      },
    },
  ];

  export const suggestionProduct = [
    {
      img: prod1,
      title: "Goodlife Fresh milk",
      currency: "AED",
      price: "30.00",
      cart: cart,
      style: {},
    },
    {
      img: prod2,
      title: "Parachute Pure Edible Beetroot",
      currency: "AED",
      price: "30.00",
      cart: cart,
      style: {},
    },
    {
      img: prod3,
      title: `Bacca bucci men’s pu leather - 150 m.l`,
      currency: "AED",
      price: "30.00",
      cart: cart,
      style: {},
    },
    {
      img: prod4,
      title: "Parachute Pure Edible Beetroot",
      currency: "AED",
      price: "30.00",
      cart: cart,
      style: {},
    },
    {
      img: prod1,
      title: "Goodlife Fresh milk",
      currency: "AED",
      price: "30.00",
      cart: cart,
      style: {},
    },
    {
      img: prod2,
      title: "Parachute Pure Edible Beetroot",
      currency: "AED",
      price: "30.00",
      cart: cart,
      style: {},
    },
    {
      img: prod3,
      title: `Bacca bucci men’s pu leather - 150 m.l`,
      currency: "AED",
      price: "30.00",
      cart: cart,
      style: {},
    },
    {
      img: prod4,
      title: "Parachute Pure Edible Beetroot",
      currency: "AED",
      price: "30.00",
      cart: cart,
      style: {},
    },
    {
      img: prod1,
      title: "Goodlife Fresh milk",
      currency: "AED",
      price: "30.00",
      cart: cart,
      style: {},
    },
    {
      img: prod2,
      title: "Parachute Pure Edible Beetroot",
      currency: "AED",
      price: "30.00",
      cart: cart,
      style: {},
    },
    {
      img: prod3,
      title: `Bacca bucci men’s pu leather - 150 m.l`,
      currency: "AED",
      price: "30.00",
      cart: cart,
      style: {},
    },
    {
      img: prod4,
      title: "Parachute Pure Edible Beetroot",
      currency: "AED",
      price: "30.00",
      cart: cart,
      style: {},
    },
    {
      img: prod1,
      title: "Goodlife Fresh milk",
      currency: "AED",
      price: "30.00",
      cart: cart,
      style: {},
    },
    {
      img: prod2,
      title: "Parachute Pure Edible Beetroot",
      currency: "AED",
      price: "30.00",
      cart: cart,
      style: {},
    },
    {
      img: prod3,
      title: `Bacca bucci men’s pu leather - 150 m.l`,
      currency: "AED",
      price: "30.00",
      cart: cart,
      style: {},
    },
    {
      img: prod4,
      title: "Parachute Pure Edible Beetroot",
      currency: "AED",
      price: "30.00",
      cart: cart,
      style: {},
    },
    
  ]

  export const settings = {
    dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
    nextArrow: <ArrowButton arrow={rightArrow} rightArrow={'25px'}  />,
    prevArrow: <ArrowButton arrow={leftArrow} />,
      slidesToShow: 5,
      slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      }
    ]
  };
  