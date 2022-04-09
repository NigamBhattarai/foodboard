import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Dropdown,
  DropdownButton,
  Table,
} from "react-bootstrap";
import SummaryCard from "../pos/extras/SummaryCard.js";
import OrderListTable from "../pos/extras/OrderListTable.js";
import ListAltIcon from "@mui/icons-material/ListAlt";
import "./Main.scss";
import axios from "axios";

export default function Main() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/orders");
      setOrders(result.data);
    };
    fetchData();
  }, []);
  return (
    <Container fluid >
      <Row className="title">
        <Col>
          <h2>Dashboard</h2>
          <small className="text-muted">Tuesday 2,Feb,2021</small>
        </Col>
      </Row>
      <hr />
      <div className="main-body">
      <Row>
        <Col lg={7}>
          <Row>
            <Col lg={4}>
              <SummaryCard
                changeValue="24"
                change="0"
                value="$30,500.0"
                valueType="Revenue"
              />
            </Col>
            <Col lg={4}>
              <SummaryCard
                changeValue="2"
                change="1"
                value="994"
                valueType="Order"
              />
            </Col>
            <Col lg={4}>
              <SummaryCard
                changeValue="0"
                change="0"
                value="145"
                valueType="Food Item"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-4 justify-content-between">
        <Col lg={7}>
          <div className="rounded order-report py-3">
            <Row className="mx-0">
              <Col lg={4}>
                <h4>Order Report</h4>
              </Col>
              <Col></Col>
              <Col lg={3}>
                <Button variant="light" className="button1">
                  <ListAltIcon className="mr-2" />
                  Full List
                </Button>{" "}
              </Col>
            </Row>
            <Table className="table-borderless" hover>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Order ID</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
              {orders.map((order) => {
                  return (
                    <OrderListTable
                      order={order}
                      key={order.id}
                      id={order.id}
                    />
                  );
                })}{orders.map((order) => {
                  return (
                    <OrderListTable
                      order={order}
                      key={order.id}
                      id={order.id}
                    />
                  );
                })}{orders.map((order) => {
                  return (
                    <OrderListTable
                      order={order}
                      key={order.id}
                      id={order.id}
                    />
                  );
                })}{orders.map((order) => {
                  return (
                    <OrderListTable
                      order={order}
                      key={order.id}
                      id={order.id}
                    />
                  );
                })}
              </tbody>
            </Table>{" "}
          </div>
        </Col>
        <Col lg={5}>
          <div className="rounded trending-tab py-3">
            <Row className="mx-0">
              <Col>
                <h4>Trending</h4>
              </Col>
              <Col></Col>
              <Col lg={3}>
                <DropdownButton
                  id="dropdown-basic-button"
                  variant="light"
                  className="button1"
                  title="Today"
                >
                  <Dropdown.Item href="#/action-1">Yesterday</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Last 7 days</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">This Month</Dropdown.Item>
                </DropdownButton>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <Row></Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      </div>
    </Container>
  );
}
