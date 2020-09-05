import logo from "../assets/logo.svg";
import cartProduct from "../assets/cart product.svg";
import user1 from "../assets/user1.svg";


export const data = [
  {
    reOrderPrint: [
      {
        src: logo,
        alt: "",
        imgStyle: {
          display: "flex",
          flexDirection: "column",
          width: "200px",
          marginLeft: "10px"
        },
        titleContainerStyle: {
          display: "flex",
          flexDirection: "column",
          width: "200px",
          marginLeft: "10px"
        },
        title1Style: { fontWeight: "500", color: "#EB201E" },
        title2Style: { color: "#EB201E" },
        title1: "Grand Hypermarket",
        title2: "Al Khail, Al Quoz Fourth",
        button1Title: "Re-order",
        orderButtonStyle: {
          background: "#EB201E",
          color: "white",
          borderRadius: "20px",
          outline: "none",
          border: "none",
          width: "110px",
          marginBottom: "1rem"
        },
        button2Title: "Print",
        printButtonStyle: {
          background: "white",
          color: "#EB201E",
          borderRadius: "20px",
          outline: "none",
          border: "1px solid #EB201E",
          width: "110px"
        }
      }
    ],
    orderDetail1:[
      {
        divStyle:{ marginBottom: "10px" },
        titleStyle:{ fontWeight: "500", marginRight: "2px" },
        title:'Madan Kumar Gandam',
        value:'',
      },
      {
        divStyle:{ marginBottom: "10px" },
        titleStyle:{ fontWeight: "500", marginRight: "2px" },
        title:'Mobile No:',
        value:'9923987323',
      },
      {
        divStyle:{ marginBottom: "10px" },
        titleStyle:{ fontWeight: "500", marginRight: "2px" },
        title:'Email:',
        value:'madankumar.g@gmail.com',
      },
      {
        divStyle:{ marginBottom: "10px" },
        titleStyle:{ fontWeight: "500", marginRight: "2px" },
        title:'Delivery Address:',
        value:'111 new building 1-3, 13 A Street, Dubai',
      },
    ],

    orderDetail2:[
      {
        divStyle:{ marginBottom: "10px" },
        titleStyle:{ fontWeight: "500", marginRight: "2px" },
        title:'Order No:',
        value:'SB-24',
      },
      {
        divStyle:{ marginBottom: "10px" },
        titleStyle:{ fontWeight: "500", marginRight: "2px" },
        title:' Order Status:',
        value:'Delivered',
      },
      {
        divStyle:{ marginBottom: "10px" },
        titleStyle:{ fontWeight: "500", marginRight: "2px" },
        title:'Order Type:',
        value:'Online',
        valueStyle:{ color: "#039BE5" }
      },
      {
        divStyle:{ marginBottom: "10px" },
        titleStyle:{ fontWeight: "500", marginRight: "2px" },
        title:' Order Date:',
        value:'11-Apr-2019 02:40 P.M',
      },
      {
        divStyle:{ marginBottom: "10px" },
        titleStyle:{ fontWeight: "500", marginRight: "2px" },
        title:' Payment Method: (COD)',
        value:'Cash on Delivery',
      },
      {
        divStyle:{ marginBottom: "10px" },
        titleStyle:{ fontWeight: "500", marginRight: "2px" },
        title:' Delivery On:',
        value:'14th april 2020',
      },
    ],
    deliverBy:[
      {
        src:user1,
        alt:'',
        imgStyle:{ width: "85px" },
        person:[
          {
            title:'Order to be delivered by:',
            titleStyle:{ fontWeight: "500" },

          },
          {
            title:'Vinesh',
           

          },
          {
            title:'Contact: 971 507249951:',
           

          },
          {
            title:'Language Known: Hindi,Telugu:',
           

          },
          {
            title:'Person is in Dubai past from 4 years:',
           

          },
        ]

      }
    ]
  }
];

export const tableColumn = [
  {
    title: "Product",
    priceQtyAmt:[
    {
    title: "Price"
  },
  {
    title: "Qty"
  },
  {
    title: "Amount"
  }
  ]
  }
];

export const tableData = [
  {
src:cartProduct,
alt:'',
imgStyle:{width:'40px'},
title:'Dairy Milk Silk',
subTitle:'50 gms',
oldPrice:'AED 30',
newPrice:' AED 30',
qty:'1',
priceQtyAmt:[
  {
  title: "36",
  style:{padding:'0rem 4rem'}
},
{
  title: "1",
  style:{padding:'0rem 1.2rem'}
},
{
  title: "36",
  style:{padding:'0rem 4rem'}
}
]

}
];
