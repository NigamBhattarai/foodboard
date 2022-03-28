import React from "react";
import { Modal } from "react-bootstrap";
import OrderCard from "./OrderCard";
export default function OrderListPopUp() {
  let order = {
    id: 1,
    token_number: "#4383",
    ordered_time: "23 Feb 2022,8:26PM",
    status: "pending",
    grand_total: 3000,
    foodItems: [
      {
        id: 1,
        foodName: "momo",
        addOns: ["extra jhol", "extra achar"],
        final_price: 3000,
        qty: 3,
        status: "pending",
      },
      {
        id: 2,
        foodName: "chowmien",
        addOns: ["extra jhol", "extra achar"],
        final_price: 3000,
        qty: 3,
        status: "pending",
      },
    ],
  };
  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="order-popup-modal"
      >
        <OrderCard page="kitchen" order={order} key={order.id} id={order.id} />
      </Modal>
    </div>
  );
}
