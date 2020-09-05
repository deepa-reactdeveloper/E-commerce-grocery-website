import longitude from "../assets/longitude.svg";
import latitude from "../assets/latitude.svg";

export const cityData = [
  {
    formControlStyle: { width: "90%", borderBottom: ".5px solid #757575" },
    inputLabelStyle: {
textIndent: "87px",
      lineHeight: "0px",
      color: "#757575",
      fontSize: "16px"
    },
    title: "Select City",
    menuItem: [
      {
        name: "Dubai",
        value: ""
      },
      {
        name: "Dubai",
        value: ""
      },
      {
        name: "Ajman",
        value: ""
      }
    ]
  }
];
export const localityData = [
  {
    formControlStyle: { width: "90%", borderBottom: ".5px solid #757575" },
    inputLabelStyle: {
textIndent: "67px",
      lineHeight: "0px",
      color: "#757575",
      fontSize: "16px"
    },
    title: "Select Locality",
    menuItem: [
      {
        name: "Dubai",
        value: ""
      },
      {
        name: "Dubai",
        value: ""
      },
      {
        name: "Ajman",
        value: ""
      }
    ]
  }
];

export const map = [
  {
    src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.878006366068!2d77.63428661413036!3d12.979653690850594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae123348a91f11%3A0x4a0c1396aba9ce0a!2sHoneysys%20IT%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1582050089250!5m2!1sen!2sin",
    title: "myLocation",
    style: {
      width: "100%",
      height: "30vh",
      border: "none"
    },
    allowFullScreen: ""
  }
];

export const addressForm1 = [
  {
    placeholder: "Enter Your Location",
    value: "",
    inputStyle: {
      lineHeight: " 40px",
      border: "0px",
      borderBottom: ".5px solid #757575",
      outline: "none",
      margin: "1rem"
    },
    button: [
      {
        title: "Get",
        buttonStyle: {
          background: "#EB201E",
          color: "white",
          borderRadius: "20px",
          width: "42px",
          border: "none",
          outline: "none",
          position: "absolute",
          right: "35px",
          top: "60px"
        }
      }
    ]
  },
  {
    placeholder: "Address Nickname",
    value: "",
    inputStyle: {
      lineHeight: " 40px",
      border: "0px",
      borderBottom: ".5px solid #757575",
      outline: "none",
      margin: "1rem"
    }
  },
  {
    placeholder: "Flat No.",
    value: "",
    inputStyle: {
      lineHeight: " 40px",
      border: "0px",
      borderBottom: ".5px solid #757575",
      outline: "none",
      margin: "1rem"
    }
  }
];
export const addressForm2 = [
  {
    placeholder: "Longitude",
    src: longitude,
    alt: "",
    imgStyle: {
      position: "absolute",
      top: "27px",
      left: "100px",
      width: "17px"
    },
    value: "",
    inputStyle: {
      lineHeight: " 40px",
      border: "0px",
      borderBottom: ".5px solid #757575",
      outline: "none",
      margin: "1rem"
    }
  },
  {
    placeholder: "Latitude",
    src: latitude,
    alt: "",
    imgStyle: {
        position: "absolute",
        top: "95px",
        left: "103px",
        width: "17px"
      },
    value: "",
    inputStyle: {
      lineHeight: " 40px",
      border: "0px",
      borderBottom: ".5px solid #757575",
      outline: "none",
      margin: "1rem"
    }
  },
  {
    placeholder: "Zip/Postal Code",
    value: "",
    inputStyle: {
      lineHeight: " 40px",
      border: "0px",
      borderBottom: ".5px solid #757575",
      outline: "none",
      margin: "1rem"
    }
  },
  {
    placeholder: "Building Name",
    value: "",
    inputStyle: {
      lineHeight: " 40px",
      border: "0px",
      borderBottom: ".5px solid #757575",
      outline: "none",
      margin: "1rem"
    }
  }
];

export const addYourAddress = [
  {
    placeholder: "Enter Your Address",
    style: {
      lineHeight: " 40px",
      border: "0px",
      borderBottom: ".5px solid #757575",
      outline: "none",
      margin: "1rem",
      width: "100%"
    }
  }
];

export const button = [
  {
    title: "Reset",
    style: {
      borderRadius: "20px",
      width: "115px",
      height: "25px",
      color: "#64B5F6",
      outline: "none",
      border: ".5px solid #64B5F6",
      background: "white"
    },
    className:'resetButton'
  },
  {
    title: `Let's Go!`,
    style: {
      width: "160px",
      borderRadius: "20px",
      border: "none",
      background: "#7CB342",
      color: "white",
      padding: "0.3rem",
      outline: "none",
      fontSize: "17px"
    }
    ,
    className:'goButton'
  },
  {
    title: "Cancel",
    style: {
      borderRadius: "20px",
      width: "115px",
      height: "25px",
      color: "#F46B6F",
      outline: "none",
      border: ".5px solid #F46B6F",
      background: "white"
    },
    className:'cancelButton'
  }
];
