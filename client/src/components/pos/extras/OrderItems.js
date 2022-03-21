import React from "react";
import { Col, Row, Form, Badge } from "react-bootstrap";
import "./OrderItems.scss";
export default function OrderItems(props) {
  const foodItems=props.foodItems;
  return (
    <div>
      <Row className="orderItems px-2">
        <Col lg="3">
          <img
            src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
            className="rounded-circle img-thumbnail"
          />
        </Col>
        <Col lg={6} className="px-0">
          <Row className="item-name">
            <Col>{foodItems.foodName}</Col>
          </Row>
          <Row className="item-addons">
            <Col className="pl-4">{foodItems.addOns.map((addOn)=>"+"+addOn+" ")}</Col>
          </Row>
          <Row className="item-qty">
            <Col>{props.page=='order' ? ("Qty:"+foodItems.qty):("")}</Col>
          </Row>
        </Col>
        <Col lg={3} className="item-total type">
          {props.page === "kitchen" ? (
             foodItems.status==="pending"  ? (<Form.Check type={"checkbox"} />):
            (<Badge pill className="pill-preparing">Preparing</Badge>)
          ) : props.page==="order"?(<p>Rs.{foodItems.final_price}</p>):null}
        </Col>
      </Row>
      <hr className="line-style" />
    </div>
  );
}
