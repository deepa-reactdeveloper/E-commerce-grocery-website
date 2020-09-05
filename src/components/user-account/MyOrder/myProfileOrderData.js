import React from "react";
import redCross from "../assets/redCross.svg";

export function orderColumn(setCancelModal,setOrderModal) {
  return [
    { title: "Order No.", field: "id", headerStyle: { color: "#616161" } },
    {
      title: "Product Name",
      field: "orderProduct[0].productName",
      headerStyle: { color: "#616161" }
    },
    {
      title: "Order date",
      field: "orderProduct[0].productName",
      type: "numeric",
      headerStyle: { color: "#616161" }
    },
    {
      title: "Amount",
      field: "orderProduct[0].quantity",
      type: "numeric",
      headerStyle: { color: "#616161" }
    },
    {
      title: "Status",
      field: "orderProduct[0].productName",
      type: "numeric",
      headerStyle: { color: "#616161" }
    },
    {
      title: "Action",
      field: "birthCity",
      lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
      headerStyle: { color: "#616161" },
      render: () => (
        <div>
          <span style={{color:'#0097A7',cursor:'pointer'}} onClick={()=>setOrderModal(true)}>View</span>
          <img
            src={redCross}
            alt=""
            style={{ cursor: "pointer", marginLeft: "15px",width:'18px' }}
            onClick={()=>setCancelModal(true)}
          />
        </div>
      )
    }
  ];
}

export const orderData = [
  { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
  { name: "Zerya Betül", surname: "Baran", birthYear: 2017, birthCity: 34 }
];

export const mobileOrderData=[
  {
  order:[{
    divStyle:{fontWeight:'500',color:'#EB201E',margin:'1rem 0rem'},
    title:'Order NO. :',
    value:'SB1',
    style:{marginLeft:'3px'}
  }],
  product:[{
    title:'Veran wang Eau de Perfume',
    style:{fontWeight:'500',color:'#EB201E',margin:'1rem 0rem'}
  }],
  amount:[
    {
      title:'Amount',
      value:'28 AED',
      style:{marginLeft:'3px'},
      divStyle:{color:'#EB201E',margin:'1rem 0rem'}
    }
  ],
  status:[{
    title:'Status',
    value:'Completed',
    divStyle:{color:'#EB201E',margin:'1rem 0rem'},
    style:{color:'green',marginLeft:'3px'}
  }],
  date:[
    {
      title:' 11-April-2019',
      style:{width:'100%',color:'#EB201E',height:'50%',paddingTop:'1rem'}
    }
  ],
  viewButton:[
    {
      title:'View',
      divStyle:{width:'100%',height:'50%',paddingBottom:'1rem',display:'flex',alignItems:'flex-end'},
      style:{width:'100%',color:'#EB201E',border:'.5px solid #EB201E',outline:'none',borderRadius:'20px',background:'white',height:'25px'}
    }
  ]
  },
  {
  order:[{
    divStyle:{fontWeight:'500',color:'#EB201E',margin:'1rem 0rem'},
    title:'Order NO. :',
    value:'SB1',
    style:{marginLeft:'3px'}
  }],
  product:[{
    title:'Veran wang Eau de Perfume',
    style:{fontWeight:'500',color:'#EB201E',margin:'1rem 0rem'}
  }],
  amount:[
    {
      title:'Amount',
      value:'28 AED',
      style:{marginLeft:'3px'},
      divStyle:{color:'#EB201E',margin:'1rem 0rem'}
    }
  ],
  status:[{
    title:'Status',
    value:'Completed',
    divStyle:{color:'#EB201E',margin:'1rem 0rem'},
    style:{color:'green',marginLeft:'3px'}
  }],
  date:[
    {
      title:' 11-April-2019',
      style:{width:'100%',color:'#EB201E',height:'50%',paddingTop:'1rem'}
    }
  ],
  viewButton:[
    {
      title:'View',
      divStyle:{width:'100%',height:'50%',paddingBottom:'1rem',display:'flex',alignItems:'flex-end'},
      style:{width:'100%',color:'#EB201E',border:'.5px solid #EB201E',outline:'none',borderRadius:'20px',background:'white',height:'25px'}
    }
  ]
  },
]
