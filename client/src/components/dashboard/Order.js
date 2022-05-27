import React, { useReducer, useEffect, useContext } from "react";
import {Link} from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";
import ListAltIcon from "@mui/icons-material/ListAlt";
import axios from "axios";
import "./Order.scss";
import OrderCard from "../pos/extras/OrderCard";
import LoadingBox from "./components/LoadingBox";
import MessageBox from "./components/MessageBox";

import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import UseTitle from "../../hooks/useTitle";
import { AppContext } from "../../App";
function renderStatus(status) {
  switch (status) {
    case 0:
      return "pending";

    case 1:
      return "preparing";
    case 2:
      return "served"
    case 3:
      return "canceled";

    case 4:
      return "ready";

    default:
      return "canceled";
  }
}
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
  const appContext=useContext(AppContext)

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
        <Col md={3}>
          <h2>Order</h2>
          <small className="text-muted">{appContext.getCurrentDate()}</small>
        </Col>
        <Col></Col>
        <Col md={2}>
          <Button as={Link} to="/fullreport" variant="light" className="titleButton">
            <ListAltIcon className="mr-2" />
            Full Report{" "}
          </Button>{" "}
          {/* <Button variant="light" className="titleButton">
            <AddBusinessIcon className="mr-2" />
            Filter Order
          </Button>{" "} */}
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
                  <Button className={renderStatus(order.status)} key={"Order"+index} title={renderStatus(order.status)}>
                    {order.status === 2  ? (
                      <DoneIcon />
                    ) : order.status === 3 ? (
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
