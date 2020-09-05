import React from "react";
import login from "../../../assets/header/headerCard/login.png";
import cart from "../../../assets/header/headerCard/cart.png";
import delivery from "../../../assets/header/headerCard/delivery.png";
import logo from "../../../assets/header/headerCard/logo.png";
import dropdown from "../../../assets/header/headerCard/dropdown.png";
import prod1 from "../../../assets/grocery/prod1.png";
import prod2 from "../../../assets/grocery/prod2.png";
import prod3 from "../../../assets/grocery/prod3.png";
import leftArrow from "../../../assets/header/LeftArrow.png";
import rightArrow from "../../../assets/header/RightArrow.png";

function ArrowButton(props) {
  const { className, style, onClick, arrow, rightArrow } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "50px",
        height: "32px",
        display: "flex",
        zIndex: "99",
        fontSize:'20px',
        marginRight:`${rightArrow}`
      }}
      onClick={onClick}
    >
      <img src={arrow} alt="arrow" style={{width:'8px',height:"16px"}}  />
    </div>
  );
}


export const headercard = [
  {
    icon: login,
    alt: login,
    name: ` Login `,
  },
  {
    icon: cart,
    alt: cart,
    name: `Cart`,
  },
  {
    icon: delivery,
    alt: delivery,
    name: `Delivery`,
  },
];

export const headercardLogo = [
  {
    icon: logo,
    alt: logo,
  },
];

export const headerdropdown = [
  {
    icon: dropdown,
    alt: dropdown,
  },
];

export const headerdropdownList = [
  {
    title: `Dairy & Eggs`,
    drop1: `Dairy & Eggs`,
    drop2: `Dairy & Eggs`,
    drop3: `Dairy & Eggs`,
  },
  {
    title: `Frozen meat`,
    drop1: `Frozen meat`,
    drop2: `Frozen meat`,
    drop3: `Frozen meat`,
  },
  {
    title: `Bakery`,
    drop1: `Dairy & Eggs`,
    drop2: `Dairy & Eggs`,
    drop3: `Dairy & Eggs`,
  },
  {
    title: `Tea & coffee`,
    drop1: `Tea & coffee`,
    drop2: `Tea & coffee`,
    drop3: `Tea & coffee`,
  },
  {
    title: `All`,
    drop1: `All`,
    drop2: `All`,
    drop3: `All`,
  },

  {
    title: `Homecare`,
    drop1: `Homecare`,
    drop2: `Homecare`,
    drop3: `Homecare`,
  },
  {
    title:`Frozen meat`,
    drop1:`Frozen meat`,
    drop2:`Frozen meat`,
    drop3:`Frozen meat`,

  },
  {
    title:`Pet care`,
    drop1:`Pet care`,
    drop2:`Pet care`,
    drop3:`Pet care`,

  },
  {
    title:`Dairy & Eggs`,
    drop1:`Dairy & Eggs`,
    drop2:`Dairy & Eggs`,
    drop3:`Dairy & Eggs`,

  },
  {
    title:`Dairy & Eggs`,
    drop1:`Dairy & Eggs`,
    drop2:`Dairy & Eggs`,
    drop3:`Dairy & Eggs`,

  },
  {
    title:`Dairy & Eggs`,
    drop1:`Dairy & Eggs`,
    drop2:`Dairy & Eggs`,
    drop3:`Dairy & Eggs`,

  },
  {
    title:`Dairy & Eggs`,
    drop1:`Dairy & Eggs`,
    drop2:`Dairy & Eggs`,
    drop3:`Dairy & Eggs`,

  },
];

export const sidedropdown = [
 
  {
    name: `About us `,
    href:"/"
  },
  {
    name: `Locate us`,
    href:"/"
  },
  {
    name: `Careers`,
    href:"/"
  },
  {
    name: `FAQs`,
    href:"/"
  },
  {
    name: `Terms & Conditions`,
    href:"/"
  },
  {
    name: `Privacy policy`,
    href:"/"
  },
];

const styleCategorydropdown = [{
  display: 'flex',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: '300',
    color: 'darkgray'
}]
export const Categorydropdown =[
  {
    name: `About us `,
    style :  styleCategorydropdown
  }
]
// function ArrowButton(props) {
//   const { className, style, onClick, rotateArrow, left, right } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         width: "60px",
//         height: "60px",
//         display: "flex",
//         zIndex: "99",
//         marginLeft: `${left}`,
//         marginRight: `${right}`,
//         marginTop: "-32px",
//         fontSize: "20px",
//       }}
//       onClick={onClick}
//     >
//       <img
//         src={RightArrow}
//         alt="arrow"
//         className={`topOffersArrow ${rotateArrow}`}
//       />
//     </div>
//   );
// }

export const settings = {
  dots: false,
  slidesToShow: 7,
  arrows: true,
  nextArrow: <ArrowButton arrow={rightArrow} rightArrow={'25px'}  />,
  prevArrow: <ArrowButton arrow={leftArrow} />,
  arrows:true,
  infinite:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
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

const titlestyle = {
  fontSize:'11px',
  color:'#757575',
  
}
const buttonStyle = {
  background: '#66BB6A',
  border: '0px',
  color: 'white',
  fontSize: '8px',
  paddingLeft: '5px',
  paddingRight: '5px'
}
export const cartData = [
  {
    img: prod1,
    title: "Parachute Pure Edible Beetroot",
    currency: "AED",
    price: "30.00",
    cart: cart,
    quantity:1,
    noOFItem:'1',
    style: {},
    button:`+ Add more`,
    titlestyle:titlestyle,
    buttonStyle:buttonStyle,

  },
  {
    img: prod2,
    title: "Parachute Pure Edible Beetroot",
    currency: "AED",
    price: "30.00",
    cart: cart,
    quantity:1,
    noOFItem:'1',
    style: {},
     button:`+ Add more`,
    titlestyle:titlestyle,
    buttonStyle:buttonStyle,
    
  },
  {
    img: prod3,
    title: "Parachute Pure Edible Beetroot",
    currency: "AED",
    price: "30.00",
    cart: cart,
    quantity:1,
    noOFItem:'1',
    style: {},
    button:`+ Add more`,
    titlestyle:titlestyle,
    buttonStyle:buttonStyle,
    
  },
  {
    img: prod3,
    title: "Parachute Pure Edible Beetroot",
    currency: "AED",
    price: "30.00",
    cart: cart,
    quantity:1,
    noOFItem:'1',
    style: {},
    button:`+ Add more`,
    titlestyle:titlestyle,
    buttonStyle:buttonStyle,
    
  },
]

export const cartviewAllList = [
  {
    title: `View All Items`,
    drop1: `Dairy & Eggs`,
    drop2: `Dairy & Eggs`,
    drop3: `Dairy & Eggs`,
  },

];
