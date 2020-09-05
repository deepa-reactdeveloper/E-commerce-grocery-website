import user from "../assets/user1 small.svg";
import mobile from "../assets/mobile.svg";
import message from "../assets/message.svg";
import referal from "../assets/referal.svg";
import mapLocation from '../assets/mapLocation.svg'
import order from '../assets/order.svg'
import wishlist from '../assets/wishlist.svg'
import membership from '../assets/membership.svg'
import password from '../assets/password.svg'
import user2 from '../assets/user2 small.svg'

const myAccount1ContainerStyle={ display: "flex", margin: "0.7rem 0rem", alignItems:'center'}
const myAccount2ContainerStyle={ display: "flex", padding: "0.7rem 0rem",borderBottom:'1px solid #E0E0E0',color:'black',alignItems:'center' }

export const myAccount1 = [
  {
    src: user,
    alt: "",
    title: "Madan Kumar Gandam",
    containerStyle:myAccount1ContainerStyle,
    imgStyle: {
      width: "30px"
    },
    titleStyle: {
      margin: "0rem 0rem 0rem .5rem"
    }
  },
  {
    src: mobile,
    alt: "",
    title: "+91 998283778",
    containerStyle: myAccount1ContainerStyle,
    imgStyle: {
      width: "30px"
    },
    titleStyle: {
      margin: "0rem 0rem 0rem .5rem"
    }
  },
  {
    src: message,
    alt: "",
    title: "madankumar.g@gmail.com",
    containerStyle: myAccount1ContainerStyle,
    imgStyle: {
      width: "30px"
    },
    titleStyle: {
      margin: "0rem 0rem 0rem .5rem"
    }
  },
  {
    src: referal,
    alt: "",
    title: "My referral code : RT24",
    containerStyle: myAccount1ContainerStyle,
    imgStyle: {
      width: "30px"
    },
    titleStyle: {
      margin: "0rem 0rem 0rem .5rem"
    }
  }
];

export const myAccount2=[
    {
        src: user2,
        alt: "",
        url:'/my-account',
        title: "My Profile",
        containerStyle: myAccount2ContainerStyle,
        imgStyle: {
          width: "30px"
        },
        titleStyle: {
          margin: "0rem 0rem 0rem .5rem"
        }  
    },
    {
        src: mapLocation,
        alt: "",
        url:'account-address',
        title: "My Address",
        containerStyle: myAccount2ContainerStyle,
        imgStyle: {
          width: "30px"
        },
        titleStyle: {
          margin: "0rem 0rem 0rem .5rem"
        }  
    },
    {
        src: order,
        alt: "",
        title: "My Order",
        url:'account-order',
        containerStyle: myAccount2ContainerStyle,
        imgStyle: {
          width: "30px"
        },
        titleStyle: {
          margin: "0rem 0rem 0rem .5rem"
        }  
    },
    {
        src: wishlist,
        alt: "",
        title: "My Wishlist",
        url:'account-wishlist',
        containerStyle: myAccount2ContainerStyle,
        imgStyle: {
          width: "30px"
        },
        titleStyle: {
          margin: "0rem 0rem 0rem .5rem"
        }  
    },
    {
        src: membership,
        alt: "",
        title: "My Membership",
        url:'account-membership',
        containerStyle: myAccount2ContainerStyle,
        imgStyle: {
          width: "30px"
        },
        titleStyle: {
          margin: "0rem 0rem 0rem .5rem"
        }  
    },
    {
        src: password,
        alt: "",
        title: "Change Password",
        url:'account-password',
        containerStyle: myAccount2ContainerStyle,
        imgStyle: {
          width: "30px"
        },
        titleStyle: {
          margin: "0rem 0rem 0rem .5rem"
        }  
    },
]


export const myAccountFormData=[
  {
    placeholder:'Name',
    value:'',
    inputStyle:{
      border:'0px',
      borderBottom:'1px solid #E0E0E0',
      outline:'none',
      width:'100%',
      marginBottom:'3rem'}
  },
  {
    placeholder:'Last Name',
    value:'',
    inputStyle:{
      border:'0px',
      borderBottom:'1px solid #E0E0E0',
      outline:'none',
      width:'100%',
      marginBottom:'3rem'}
  },
  {
    placeholder:'Email ID',
    value:'',
    inputStyle:{
      border:'0px',
      borderBottom:'1px solid #E0E0E0',
      outline:'none',
      width:'100%',
      marginBottom:'3rem'}
  },
  {
    placeholder:'Mobile No.',
    value:'',
    inputStyle:{
      border:'0px',
      borderBottom:'1px solid #E0E0E0',
      outline:'none',
      width:'100%',
      marginBottom:'1rem'}
  },
]