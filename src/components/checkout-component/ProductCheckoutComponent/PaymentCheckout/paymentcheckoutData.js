import checkoutArrrow from "../../../../assets/checkout/cart/checkoutArrrow.png"
const style = {
    color:'#848484',fontSize:'18px',fontWeight:'500',paddingBottom:'10px'
};

export const paymentData =[

    {
        title:'SUBTOTAL',
        value:'AED 30.00',
        style: style
    },
    {
        title:'TAXES & CHARGES',
        value:'AED 30.00',
        style: style
    },
    {
        title:'SHIPPING',
        value:'FREE',
        style: style
    },
    {
        title:'TOTAL',
        value:'AED 6,000.00',
        style: style
    },
]


export const cartDropdownData =[

    {
        title:'Total',
      
        value:'AED 30.00',
        style: style
    },
    
    {
        title:'Delivery',
        value:'FREE',
        style: style
    },
    {
        title:'Amount Payable',
        value:'AED 6,000.00',
        style: style
    },
]

export const checkoutBtn=[
    {   image: checkoutArrrow,
        imageStyle:{
            width:"25px",
            height:"21px",
            marginLeft:"5px",
            marginTop:'3px'
        },
        style : {
            color:'white',
            background:'#66BB6A',
            fontSize:'17px',
            height:'39px',
            width:'100%',
            fontWeight:'600',
            display:'flex',
            justifyContent:'center',
            paddingTop:'4px',
            paddingBottom:'4px',
            marginBottom:'2rem',
            marginTop:'3rem'
        },
        checkout:`PROCEED TO CHECKOUT`,
        payment:`PROCEED TO PAYMENT`,
    }
]
// export const paymentTitle = [
//   {
//     title: "SUBTOTAL",
//     style: {color:'#848484'},
//   },
//   {
//     title: "TAXES & CHARGES",
//     style: {color:'#848484'},
//   },
//   {
//     title: "SHIPPING",
//     style: {color:'#848484'},
//   },
//   {
//     title: "TOTAL",
//     style: {color:'#848484'},
//   },
// ];

// export const paymentValue = [
//   {
//     value: "AED 30.00",
//     style:{
//         color:'#848484'   
//     }
//   },
//   {
//     value: "AED 30.00",
//     style:{
//         color:'#BDBDBD'   
//     }
//   },
//   {
//     value: "FREE",
//     style:{
//         color:'#BDBDBD'   
//     }
//   },
//   {
//     value: "AED 6,000.00",
//     style:{
//         color:'#7CB342'   
//     }
//   },
// ];
