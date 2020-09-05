import React from "react";
import { Modal } from "react-bootstrap";
import minus from "./assets/minus.svg";
import "./profileCancelModal.css";
export default function ProfileCancelModal({ show, size, onHide }) {
  return (
    <div>
      <Modal
        show={show}
        size={size}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{
            background: "#EB201E",
            color: "white",
            display: "flex",
            justifyContent: "center",
            borderRadius: "20px 20px 0px 0px"
          }}
        >
          <img
            src={minus}
            alt=""
            style={{
              position: "absolute",
              right: "15px",
              top: "30px",
              cursor: "pointer"
            }}
            onClick={onHide}
          />
          <Modal.Title id="contained-modal-title-vcenter">
            <span>Order Cancelation</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center", padding: "4rem" }}>
          <div style={{ padding: "0rem" }}>
            <p style={{ fontWeight: "500",color:'#EB201E' }}>Your Order is in processing...</p>
            <p>Do you want to cancel your order?</p>
          </div>
        </Modal.Body>
        <Modal.Footer style={{padding:'0px'}}>
          <div style={{ display: "flex", width: "100%",margin:'0px',padding:'0px' }}>
            <div
              style={{ padding: "1.2rem", width: "50%", textAlign: "center",borderRight:'1px solid #E0E0E0',cursor:'pointer' }}
              onClick={onHide}
            >
              Yes
            </div>

            <div style={{ padding: "1.2rem", width: "50%", textAlign: "center",cursor:'pointer' }} onClick={onHide}>No</div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
