import React,{useState} from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import OrderItems from "./OrderItems";
import "./OrderCard.scss";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";



export default function OrderCard(props) {
  function renderStatus(status) {
    switch (status) {
      case "served":
        return (
          <Button className={`${status}`} style={{ width: "100%" }} disabled>
           <DoneIcon/> Served
          </Button>
        );
      case "preparing":
        return (
          <Button className={`${status}`} style={{ width: "100%" }} disabled>
            <DoneIcon /> Preparing
          </Button>
        );
      case "pending":
        return (
          <Button className={`${status}`} style={{ width: "100%" }} disabled>
             Pending
          </Button>
        );
      case "canceled":
        return (
          <Button className={`${status}`} style={{ width: "100%" }} disabled>
            <ClearIcon /> Canceled
          </Button>
        );
      default:
        return "foo";
    }
  }
  return (
    <Row className="orderCard pt-2 mx-0 mb-5">
      <Col lg={8} className="mb-4 top-row">
        <h5 className="m-0">Order {props.order.token_number}</h5>
        <small className="text-muted">{props.order.ordered_time}</small>
      </Col>
      <Col>{props.page=="order" ? (props.order.status==='pending' && <Button style={{ width: "100%" }}><EditIcon/> Edit</Button>):(<Button>Time </Button>)}</Col>
      <Row className="mx-0 order-items">
        {props.order.foodItems.map((foodItem) => (
          <OrderItems page={props.page} foodItems={foodItem} key={foodItem.id} id={foodItem.id} />
        ))}
      </Row>
      <Col>
        <Row className="bottom-row pl-2 my-3">
          <Col lg={5}>
            {props.page === "order" ? (
              <span>
                <small className="text-muted">x{props.order.foodItems.length} items</small>
                <br />
                <b>Rs.{props.order.grand_total}</b>
              </span>
            ) : props.page === "kitchen" ? (
              <span>
                <Button className="button-served">
                  <DoneIcon />
                </Button>
                <Button className="button-canceled ml-2">
                  <ClearIcon />
                </Button>
              </span>
            ) : (
              <Button variant="success">Done</Button>
            )}
          </Col>
          <Col></Col>
          <Col lg={5} className="d-flex align-item-center">
            {props.page === "order" ? (
              renderStatus(props.order.status)
            ) : props.page === "kitchen" ? (
              <span>
                <Form.Check type={"checkbox"} label="Select All" />
              </span>
            ) : (
              <span></span>
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
