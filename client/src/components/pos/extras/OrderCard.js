import React, { useState, useContext } from "react";
import { Row, Col, Button, Form, Container } from "react-bootstrap";
import OrderItems from "./OrderItems";
import "./OrderCard.scss";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import TimeAgo from "react-timeago";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import dateFormat from "dateformat";
import axios from "axios";
import { useAlert } from "react-alert";

export default function OrderCard(props) {
  const [order, setOrder] = useState(props.order);

  const alert = useAlert();

  function convertTime(time) {
    return dateFormat(time, "dddd, d mmmm, hh:mm TT").toString();
  }

  const [foodItems, setFoodItems] = useState(order.foodItems);
  function renderStatus(status) {
    switch (status) {
      case 0:
        return (
          <Button className="pending" style={{ width: "100%" }} disabled>
            Pending
          </Button>
        );
      case 1:
        return (
          <Button className="preparing" style={{ width: "100%" }} disabled>
            <DoneIcon /> Preparing
          </Button>
        );
      case 2:
        return (
          <Button className="served" style={{ width: "100%" }} disabled>
            <DoneIcon /> Served
          </Button>
        );
      case 3:
        return (
          <Button className="canceled" style={{ width: "100%" }} disabled>
            <ClearIcon /> Canceled
          </Button>
        );
      case 4:
        return (
          <Button
            variant="outline-secondary"
            style={{ width: "100%" }}
            disabled
          >
            <DoneIcon /> Ready To Serve
          </Button>
        );
      default:
        break;
    }
  }
  function handleCallBack(getChecked, getId) {
    let status = "pending";
    if (getChecked) status = "preparing";
    setFoodItems((prevFoodItems) => {
      return prevFoodItems.map((foodItem) => {
        return foodItem.id === getId
          ? { ...foodItem, status: status }
          : foodItem;
      });
    });
    console.log("Update status in order:" + props.id);
  }
  function submitData(status) {
    axios
      .post(process.env.REACT_APP_API_URL + "api/orders/updateStatus", {
        status: status,
        id: order._id,
      })
      .then((response) => {
        setOrder(response.data);
      });
    alert.success("Order Succesfully Updated");
  }
  return (
    <Container fluid className="orderCard py-2 mx-0 mb-5">
      <Row className="mb-4 top-row">
        <Col className="mr-auto" md={8}>
          <h5 className="m-0">Order {order.token_number}</h5>
          <small className="text-muted">
            {convertTime(order.ordered_time)}
          </small>
        </Col>
        <Col className="ml-auto">
          {props.page === "order" ? (
            order.status === "pending" && (
              <Button
                style={{ width: "100%" }}
                className="default-button order-popup-bottom-button"
              >
                <EditIcon /> Edit
              </Button>
            )
          ) : (
            <Button variant="outline-info" disabled>
              <AccessAlarmIcon /> &nbsp;
              <TimeAgo date={order.ordered_time} />{" "}
            </Button>
          )}
        </Col>
      </Row>
      <Row className="mx-0 order-items">
        {order.foodItems.map((foodItem) => (
          <OrderItems
            page={props.page}
            orderStatus={order.status}
            foodItems={foodItem}
            key={foodItem._id}
            id={foodItem._id}
            handleCallBack={handleCallBack}
          />
        ))}
      </Row>
      <Col>
        <Row className="bottom-row pl-2 mb-2">
          <Col lg={5}>
            {props.page === "order" ? (
              <span>
                <small className="text-muted">
                  x{order.foodItems.length} items
                </small>
                <br />
                <b>Rs.{order.grand_total}</b>
              </span>
            ) : props.page === "kitchen" ? (
              order.status == 0 ? (
                <span>
                  <Button
                    className="served"
                    onClick={(e) => {
                      submitData(1);
                    }}
                  >
                    <DoneIcon />
                  </Button>
                  <Button
                    className="canceled ml-2"
                    onClick={(e) => {
                      submitData(3);
                    }}
                  >
                    <ClearIcon />
                  </Button>
                </span>
              ) : order.status === 1 ? (
                <Button
                  variant="outline-success"
                  style={{ width: "100%" }}
                  className="rounded-pill"
                  onClick={(e) => {
                    submitData(4);
                  }}
                >
                  Prepared
                </Button>
              ) : (
                renderStatus(order.status)
              )
            ) : (
              <Button variant="success">Done</Button>
            )}
          </Col>
          <Col></Col>
          <Col lg={5} className="d-flex align-item-center">
            {props.page === "order" ? (
              renderStatus(order.status)
            ) : props.page === "kitchen" ? (
              <span></span>
            ) : (
              <span></span>
            )}
          </Col>
        </Row>
      </Col>
    </Container>
  );
}
