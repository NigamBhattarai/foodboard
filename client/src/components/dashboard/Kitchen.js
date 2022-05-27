import React, { useState, useEffect, createContext, useContext } from "react";
import { Row, Col, Container } from "react-bootstrap";

import OrderCard from "../pos/extras/OrderCard";
import axios from "axios";
import UseTitle from "../../hooks/useTitle";
import { AppContext } from "../../App";
import { io } from "socket.io-client";

export const KitchenContext = createContext();
function Kitchen(props) {
  UseTitle("Kitchen");
  const [orders, setOrders] = useState([]);
  const [nullState] = useState();

  const fetchData = () => {
    axios.get(process.env.REACT_APP_API_URL + "api/orders").then((result) => {
      setOrders(result.data);
    });
  };
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
  const appContext = useContext(AppContext);

  return (
    <KitchenContext.Provider value={{}}>
      <Container fluid className="mx-2">
        <Row className="title align-items-center">
          <Col lg={3}>
            <h2>Kitchen</h2>
            <small className="text-muted">{appContext.getCurrentDate()}</small>
          </Col>
        </Row>
        <hr />
        <div className="main-body">
          <Row className="mt-3">
            {orders.map((order) => (
              <Col lg={4} key={order._id}>
                <OrderCard page="kitchen" order={order} id={order.id} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </KitchenContext.Provider>
  );
}

export default Kitchen;
