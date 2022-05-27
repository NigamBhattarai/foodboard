import React from "react";
import { Col, Row, Badge } from "react-bootstrap";
import "./OrderItems.scss";
export default function OrderItems(props) {
  const foodItems = props.foodItems;
  function renderStatus(status) {
    switch (status) {
      case 0:
        return (
          <Badge pill className="pill-pending">
            Pending
          </Badge>
        );
      case 1:
        return (
          <Badge pill className="pill-preparing">
            Preparing
          </Badge>
        );
      case 2:
        return (
          <Badge pill className="pill-served">
            Served
          </Badge>
        );
      case 3:
        return (
          <Badge pill className="pill-canceled">
            Canceled
          </Badge>
        );
      default:
        break;
    }
  }
  return (
    <div>
      <Row className="orderItems px-2 my-auto">
        <Col lg="3" className="">
          <img
            src={foodItems.variant.food.image}
            alt="food"
            className="rounded-circle img-thumbnail"
          />
        </Col>
        <Col lg={6} className="px-0 ">
          <Row className="item-name">
            <Col>
              {foodItems.variant.food.name +
                " (" +
                foodItems.variant.name +
                ")"}
            </Col>
          </Row>
          <Row className="item-addons">
            <Col className="pl-4">
              {foodItems.addons.map((addOn) => "+" + addOn.name + " ")}
            </Col>
          </Row>
          <Row className="item-qty">
            <Col>{props.page === "order" ? "Qty:" + foodItems.qty : ""}</Col>
          </Row>
        </Col>
        <Col lg={3} className="item-total type">
          {props.page === "kitchen" ? (
          
              renderStatus(props.orderStatus)
          ) : props.page === "order" ? (
            <p>Rs.{foodItems.final_price}</p>
          ) : null}
        </Col>
      </Row>
      <hr className="line-style" />
    </div>
  );
}
