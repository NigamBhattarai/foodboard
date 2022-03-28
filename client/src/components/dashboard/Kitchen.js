import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import OrderCard from "../pos/extras/OrderCard";
import orderData from "./orders";


function Kitchen(props) {
  console.log("Render Kitchen")
  const [orders, setOrders] = useState(orderData);
  function handleCallback(foodItems,id){
    console.log("Reached Here")
    setOrders(prevOrders=>{
      return prevOrders.map((order)=>{
        return order.id===id?{...order,foodItems:foodItems}:order
      })
    })
    console.log("Updated ALL")
  }
  return (
    <Container fluid className="mx-2">
      <Row className="title align-items-center">
        <Col lg={3}>
          <h2>Kitchen</h2>
          <small className="text-muted">Tuesday 2,Feb,2021</small>
        </Col>
        <Col></Col>
        <Col lg={4}>
        <Button variant="light" className="titleButton">
            <AddBusinessIcon className="mr-2" />
            Filter Order
          </Button>  <Button variant="light" className="titleButton">
            <AddBusinessIcon className="mr-2" />
            Order List
          </Button>{" "}
        </Col>
      </Row>
      <hr />

      <Row className="mt-3">
        {orders.map((order) => (
          <Col lg={4}>
            <OrderCard
              page="kitchen"
              order={order}
              key={order.id}
              id={order.id}
              handleCallback={handleCallback}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Kitchen;
