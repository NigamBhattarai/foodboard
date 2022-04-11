import React, { useState, useEffect, useReducer } from "react";
import { Row, Col, Container, Button, Table, Badge } from "react-bootstrap";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import PrintIcon from "@mui/icons-material/Print";

import LoadingBox from "./components/LoadingBox";
import MessageBox from "./components/MessageBox";
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

function OrderReport() {
  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    orders: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/orders");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);
  return (
    <Container fluid className="mx-2 categories">
      <Row className="title align-items-center mx-0">
        <Col lg={2}>
          <Row>
            {" "}
            <h2>Order Table</h2>
            <small className="text-muted">Tuesday 2,Feb,2021</small>{" "}
          </Row>
        </Col>

        <Col> </Col>

        <Col lg={2}>
          <Button variant="light" className="titleButton">
            <AddBusinessIcon />
            Manage Orders
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
        <Row>
          <Col md="12">
            <Table
              className="table-borderless align-middle"
              Visibility
              hover
              size="sm"
            >
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Token</th>
                  <th>No. Of Items</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  const classname = "pill-" + order.status;
                  return (
                    <tr>
                      <td>{order.ordered_time}</td>
                      <td>12:40</td>
                      <td>{order.token_number}</td>
                      <td>3</td>
                      <td>
                        <Badge pill bg="primary" className={classname}>
                          {order.status}
                        </Badge>
                      </td>
                      <td>
                        <VisibilityIcon className="mr-2 icon"></VisibilityIcon>
                        <PrintIcon className="mr-2 icon"></PrintIcon>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>)}
      </div>
    </Container>
  );
}
export default OrderReport;
