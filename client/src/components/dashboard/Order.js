import React, { useReducer, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import ListAltIcon from "@mui/icons-material/ListAlt";
import axios from "axios";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import "./Order.scss";
import OrderCard from "../pos/extras/OrderCard";
import LoadingBox from "./components/LoadingBox";
import MessageBox from "./components/MessageBox";

import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import UseTitle from "../../hooks/useTitle";
function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, orders: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

function Order(props) {

  UseTitle("Orders");


  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    orders: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(process.env.REACT_APP_API_URL+"api/orders");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);
  return (
    <Container fluid className="mx-2 order start">
      <Row className="title align-items-center">
        <Col lg={3}>
          <h2>Order</h2>
          <small className="text-muted">Tuesday 2,Feb,2021</small>
        </Col>
        <Col></Col>
        <Col lg={4}>
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
      <div className="main-body">
        {loading ? (
          <center>
            <LoadingBox />
          </center>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <Row className="orderSummary mr-3">
              <Col>
                {orders.map((order, index) => (
                  <Button className={`${order.status}`} key={"Order"+index}>
                    {order.status === "served" || order.status === "pending" ? (
                      <DoneIcon />
                    ) : order.status === "canceled" ? (
                      <ClearIcon />
                    ) : (
                      <></>
                    )}
                    {order.token_number}
                  </Button>
                ))}
              </Col>
            </Row>
            <Row className="mt-3">
              {orders.map((order, ind) => (
                <Col lg={4}  key={"Order"+ind}>
                  <OrderCard page="order" order={order} />
                </Col>
              ))}
            </Row>
          </>
        )}{" "}
      </div>
    </Container>
  );
}

export default Order;
