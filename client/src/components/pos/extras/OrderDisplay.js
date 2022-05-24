import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import { Button, Container, Row } from "react-bootstrap";
import OrderDisplayCard from "./OrderDisplayCard";
import UseTitle from "../../../hooks/useTitle";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "axios";
import { io } from "socket.io-client";
function OrderDisplay() {
  UseTitle("Customer Orders");
  const [showTop, setShowTop] = useState(false);
  const [orders, setOrders] = useState([]);
  const [nullState] = useState(null);

  async function fetchData() {
    const result = await axios.get(
      process.env.REACT_APP_API_URL + "api/orders"
    );
    setOrders(result.data);
  }


  useEffect(() => {
    const socket = io("http://localhost:5000");
    socket.on("newOrder", () => {
      fetchData();
    });
    socket.on("updateOrderStatus", () => {
      fetchData();
    });
    fetchData();
  }, [nullState]);

  return (
    <>
      {showTop && <TopBar />}
      <center>
        <Button
          variant="secondary"
          title={showTop ? "Hide Nav Bar" : "Show Nav Bar"}
          onClick={(e) => setShowTop(!showTop)}
        >
          {showTop ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </Button>
      </center>
      <Container fluid>
        <Row className="mt-2 mx-2">
          {orders
            .filter((order) => order.status === 4)
            .map((order, index) => {
              return (
                <OrderDisplayCard order={order} key={"order-ready-" + index} />
              );
            })}
        </Row>
        <hr />
        <Row className="mt-2 mx-2">
          {orders
            .filter((order) => order.status === 1)
            .map((order, index) => {
              return (
                <OrderDisplayCard
                  order={order}
                  key={"order-preparing-" + index}
                />
              );
            })}
        </Row>
        <hr />
        <Row className="mt-2 mx-2">
          {orders
            .filter((order) => order.status === 0)
            .map((order, index) => {
              return (
                <OrderDisplayCard
                  order={order}
                  key={"order-pending-" + index}
                />
              );
            })}
        </Row>
        <hr />
        <Row className="mt-2 mx-2">
          {orders
            .filter((order) => order.status === 3)
            .filter(
              (order) =>
                order.updatedAt >
                new Date(new Date() - 10 * 60000).toISOString()
            )
            .map((order, index) => {
              return (
                <OrderDisplayCard
                  order={order}
                  key={"order-canceled-" + index}
                />
              );
            })}
        </Row>
      </Container>
    </>
  );
}

export default OrderDisplay;
