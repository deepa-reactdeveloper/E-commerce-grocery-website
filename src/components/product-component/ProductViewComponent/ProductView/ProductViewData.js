import mainImg from "../../../../assets/productdetail/mainImg.png";
import subImg1 from "../../../../assets/productdetail/subImg1.png";
import subImg2 from "../../../../assets/productdetail/subImg2.png";
import subImg3 from "../../../../assets/productdetail/subImg3.png";
import subImg4 from "../../../../assets/productdetail/subImg4.png";
import cart from "../../../../assets/productdetail/cart.png";
import buy from "../../../../assets/productdetail/buy.png"
import fb from "../../../../assets/productdetail/fb.png";
import insta from "../../../../assets/productdetail/insta.png";
import twitter from "../../../../assets/productdetail/twitter.png";

export const mainImgData = [
{
    maineventKey: `first`,
    mainimg: mainImg,
  },
]
export const productImages = [
  
  {
    eventKey: `second`,
    img: subImg1,
  },
  {
    eventKey: `third`,
    img: subImg2,
  },
  {
    eventKey: `fourth`,
    img: subImg3,
  },
  {
    eventKey: `fifth`,
    img: subImg4,
  },
];

export const productCartBtn = [
  {
    name: `Buy`,
    img: buy,
    style: {
      display: "flex",
      background: "#66BB6A",
      border: "1px solid #66BB6A",
      color: "white",
      justifyContent: 'center',
      width:' 50%',
      padding: '10px 0px',
      fontSize: "14px",
      borderRadius: "3px",
    },
  },
  {
    name: `Add to Cart`,
    img: cart,
    style: {
      display: "flex",
      background: "#FFFFFF",
      border: "1px solid #BDBDBD",
      color: "black",
      justifyContent: 'center',
      width:' 50%',
      padding: '10px 0px',
      fontSize: "14px",
      marginLeft: "24px",
      borderRadius: "3px",
    },
  },
];

export const productShare = [
  {
    title: `Share with : `,
    titleStyle: {
      color: "#757575",
      fontSize: "15px",
      marginRight: "18px",
    },
    img: [
      {
        image: fb,
      },
      {
        image: twitter,
      },
      {
        image: insta,
      },
    ],
    imgStyle: {
      width: "15px",
      height: "22px",
      marginRight: "16px",
    },
  },
];

const style = {
  color: "#616161",
  fontSize: "14px",
  fontWeight: "300",
  paddingBottom: "10px",
};

export const faqData = [
  {
    tableBorder: {
      border: "2px solid #E0E0E0",
      marginTop: "3rem",
    },
    faqTitle: `Frequently asked questions`,
    faqStyle: {
      fontSize: "18px",
      color: "#424242",
      fontWeight: "600",
      padding: "10px",
      borderBottom: "2px solid #E0E0E0",
      padding: "10px",
    },

    faqdata: [
      {
        question: `1. What is the expiry date of the product ? `,
        answer: "Ans: 12 Jan 2020.",
        duration: "Typically replied within 12 mins",
        style: style,
      },
      {
        question: `1. What is the expiry date of the product ? `,
        answer: "Ans: 12 Jan 2020.",
        duration: "Typically replied within 12 mins",
        style: style,
      },
      {
        question: `1. What is the expiry date of the product ? `,
        answer: "Ans: 12 Jan 2020.",
        duration: "Typically replied within 12 mins",
        style: style,
      },
    ],

    buttonFaq : [{
      buttondivStyle: {
        display: "flex",
        justifyContent: "center",
        padding: "4rem 4rem",
      },
      buttonStyle: {
        padding: "1rem 7rem",
        color: "#424242",
        fontSize:'14px',
        fontWeight:'400',
        borderRadius:'3px',
        border:'1px solid #BDBDBD',
        backgroundImage:
          "linear-gradient(to bottom, #f4f4f4, #f3f3f3, #f3f3f3, #f2f2f2, #f1f1f1, #efefef, #eeeeee, #ececec, #e9e9e9, #e6e6e6, #e3e3e3, #e0e0e0)",
      },
    }],
  },
];


