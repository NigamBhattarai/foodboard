import React from "react";
import { Col, Row, Form, Badge } from "react-bootstrap";
import "./OrderItems.scss";
export default function OrderItems(props) {
  const foodItems=props.foodItems;
  function onChange(event){
    console.log(props.id+" checked")
    props.handleCallBack(event.target.checked,foodItems.id)
  }
  return (
    <div>
      <Row className="orderItems px-2">
        <Col lg="3">
          <img
            src={foodItems.variant.food.image}
            alt="food"
            className="rounded-circle img-thumbnail"
          />
        </Col>
        <Col lg={6} className="px-0">
          <Row className="item-name">
            <Col>{foodItems.variant.food.name+" ("+foodItems.variant.name+")"}</Col>
          </Row>
          <Row className="item-addons">
            <Col className="pl-4">{foodItems.addons.map((addOn)=>"+"+addOn.name+" ")}</Col>
          </Row>
          <Row className="item-qty">
            <Col>{props.page==='order' ? ("Qty:"+foodItems.qty):("")}</Col>
          </Row>
        </Col>
        <Col lg={3} className="item-total type">
          {props.page === "kitchen" ? (
             foodItems.status==="pending"  ? (<Form.Check type={"checkbox"} onChange={onChange} name="prepare"/>):
            (<Badge pill className="pill-preparing">Preparing</Badge>)
          ) : props.page==="order"?(<p>Rs.{foodItems.final_price}</p>):null}
        </Col>
      </Row>
      <hr className="line-style" />
    </div>
  );
}
