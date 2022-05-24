import React, { useState, useEffect, createContext } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import OrderCard from "../pos/extras/OrderCard";
import axios from "axios";
import UseTitle from "../../hooks/useTitle";

export const KitchenContext = createContext();
function Kitchen(props) {
  UseTitle("Kitchen");
  const [orders, setOrders] = useState([]);
  const [nullState] = useState();

  const fetchData = async () => {
    const result = await axios.get(
      process.env.REACT_APP_API_URL + "api/orders"
    );
    setOrders(result.data);
  };
  useEffect(() => {
    fetchData();
  }, [nullState]);

  return (
    <KitchenContext.Provider value={{ fetchData }}>
      <Container fluid className="mx-2">
        <Row className="title align-items-center">
          <Col lg={3}>
            <h2>Kitchen</h2>
            <small className="text-muted">Tuesday 2,Feb,2021</small>
          </Col>
        </Row>
        <hr />
        <div className="main-body">
          <Row className="mt-3">
            {orders.map((order) => (
              <Col lg={4} key={order._id}>
                <OrderCard
                  page="kitchen"
                  order={order}
                  // fetchData={fetchData()}
                  id={order.id}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </KitchenContext.Provider>
  );
}

export default Kitchen;
