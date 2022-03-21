import React from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Dropdown,
  DropdownButton,
  Tabs,
  Tab,
  Sonnet,
} from "react-bootstrap";
import ListAltIcon from "@mui/icons-material/ListAlt";

import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import "./Order.scss";
import OrderCard from "../pos/extras/OrderCard";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import orders from "./orders.js";

const orderSummarys=[{
  orderNo:"#123",
  orderInfo:"served",
},{
  orderNo:"#123",
  orderInfo:"pending",
},{
  orderNo:"#123",
  orderInfo:"preparing",
},{
  orderNo:"#123",
  orderInfo:"incounter",
},{
  orderNo:"#123",
  orderInfo:"canceled",
},{
  orderNo:"#123",
  orderInfo:"served",
},{
  orderNo:"#123",
  orderInfo:"served",
},{
  orderNo:"#123",
  orderInfo:"served",
},{
  orderNo:"#123",
  orderInfo:"served",
},];


function Order(props) {

  return (
    <Container fluid className="mx-2 order start">
      <Row className="title align-items-center">
        <Col lg={3}>
          <h2>Order</h2>
          <small className="text-muted">Tuesday 2,Feb,2021</small>
        </Col>
        <Col></Col>
        <Col lg={3}>
          <Button variant="light" className="titleButton">
            <ListAltIcon className="mr-2" />
            Full Report{" "}
          </Button>{" "}
          <Button variant="light" className="titleButton">
            <AddBusinessIcon className="mr-2" />
            Filter Order
          </Button>{" "}
        </Col>
      </Row>
      <hr />
      <Row className="orderSummary mr-3">
        <Col>
        {orderSummarys.map((orderSummary)=>
        <Button className={`${orderSummary.orderInfo}`}>
            {orderSummary.orderNo}
          </Button>
        )}
          
        </Col>
      </Row>
      <Row className="mt-3">
        {orders.map((order)=><Col lg={4}>
          <OrderCard page="order" order={order}/>
        </Col>)}
        
      </Row>
    </Container>
  );
}

export default Order;
