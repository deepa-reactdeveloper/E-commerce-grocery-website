import React, { Fragment , useState , useEffect} from "react";
import MaterialTable from "material-table";
import { orderColumn, orderData, mobileOrderData } from "./myProfileOrderData";
import ProfileCancelModal from "../ProfileCancelModal";
import ProfileOrderModal from "./ProfileOrderModal";
import ProfileHeader from "../ProfileHeader";
import { fetchOrder } from "../../../api/order-apis";
export default function MyProfileOrder() {
  const [cancelModal, setCancelModal] = React.useState(false);
  const [orderModal, setOrderModal] = React.useState(false);
  const [myorder, setmyorder] = useState([]);

  useEffect(() => {
    let storeId = "5f112f4ab84c2a71fdc5039a";

    Promise.all([fetchOrder(storeId)])
      .then((allResponses) => {
      
        let orderfetch = allResponses[0].data;
       
        setmyorder(orderfetch);
        // setProfile({ profilefetch });
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="container-fluid" style={{}}>
      <ProfileHeader
        title={"My Order"}
        timing={"Last Logged In @ 11:39 AM 21 Oct 2019"}
        orderFilter={true}
      />
      <div className="hide4mobile">
        <MaterialTable
          title="Order List"
          columns={orderColumn(setCancelModal, setOrderModal)}
          data={myorder}
          options={{
            emptyRowsWhenPaging: false,
          }}
        />
      </div>

      {mobileOrderData.map((_, index) => {
        return (
          <Fragment key={index}>
            <div
              className="row hide4Web"
              style={{ marginTop: "1rem", borderBottom: "1px solid #eee" }}
            >
              <div className="col-7">
                {_.order.map((__, id) => (
                  <div key={id} style={__.divStyle}>
                    <span>{__.title}</span>
                    <span style={__.style}>{__.value}</span>
                  </div>
                ))}

                {_.product.map((__, index) => (
                  <div key={index}>
                    <span style={__.style}>{__.title}</span>
                  </div>
                ))}
                {_.amount.map((__, index) => (
                  <div key={index} style={__.divStyle}>
                    <span>{__.title}</span>
                    <span style={__.style}>{__.value}</span>
                  </div>
                ))}
                {_.status.map((__, index) => (
                  <div key={index} style={__.divStyle}>
                    <span>{__.title}</span>
                    <span style={__.style}>{__.value}</span>
                  </div>
                ))}
              </div>
              <div className="col-5">
                {_.date.map((__, index) => (
                  <div key={index} style={__.style}>
                    {__.title}
                  </div>
                ))}
                {_.viewButton.map((__, index) => (
                  <div key={index} style={__.divStyle}>
                    <button
                      style={__.style}
                      onClick={() => setOrderModal(true)}
                    >
                      {__.title}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </Fragment>
        );
      })}

      <ProfileCancelModal
        show={cancelModal}
        size={"md"}
        onHide={() => setCancelModal(false)}
      />
      <ProfileOrderModal
        show={orderModal}
        size={"lg"}
        myorder = {myorder}
        onHide={() => setOrderModal(false)}
      />
    </div>
  );
}
