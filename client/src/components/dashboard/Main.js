import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Container, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import FoodBankIcon from '@mui/icons-material/FoodBank';
import SummaryCard from "../pos/extras/SummaryCard.js";
import OrderListTable from "../pos/extras/OrderListTable.js";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import "./Main.scss";
import axios from "axios";
import UseTitle from "../../hooks/useTitle.js";
import { AppContext } from "../../App.js";

export default function Main() {
  UseTitle("Dashboard");
  const [orders, setOrders] = useState([]);
  const [trendings, setTrendings] = useState([]);
  const [summaryValues, setSummaryValues] = useState({});
  const [nullState] = useState();

  const fetchTrending = async () => {
    const result = await axios.get(
      process.env.REACT_APP_API_URL + "api/food/trending"
    );
    setTrendings(result.data);
  };

  const fetchOrders = async () => {
    const result = await axios.get(
      process.env.REACT_APP_API_URL + "api/orders"
    );
    setOrders(result.data);
  };

  const updateSummaryValues = async () => {
    const orderCount = await axios.get(
      process.env.REACT_APP_API_URL + "api/orders/totalordercount"
    );
    const revenue = await axios.get(
      process.env.REACT_APP_API_URL + "api/orders/getrevenue"
    );
    const foodCount = await axios.get(
      process.env.REACT_APP_API_URL + "api/food/totalfoodcount"
    );
    setSummaryValues({
      orderCount: orderCount.data,
      revenue: revenue.data,
      foodCount: foodCount.data,
    });
  };

  useEffect(() => {
    fetchOrders();
    fetchTrending();
    updateSummaryValues();
  }, [nullState]);

  const today = new Date().setHours(0, 0, 0, 0);
  const appContext = useContext(AppContext);
  return (
    <Container fluid>
      <div className="main-body mt-3">
        <Row>
          <Col lg={7}>
            <Row>
              <Col lg={4}>
                <SummaryCard
                  changeValue="24"
                  change="0"
                  value={
                    "रु " +
                    (typeof summaryValues.revenue !== "undefined" &&
                      summaryValues.revenue.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      }))
                  }
                  valueType="Revenue"
                />
              </Col>
              <Col lg={4}>
                <SummaryCard
                  // changeValue="2"
                  change="0"
                  value={
                    typeof summaryValues.orderCount !== "undefined" &&
                    summaryValues.orderCount.toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })
                  }
                  valueType="Orders"
                />
              </Col>
              <Col lg={4}>
                <SummaryCard
                  // changeValue="0"
                  change="0"
                  value={
                    typeof summaryValues.foodCount !== "undefined" &&
                    summaryValues.foodCount.toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })
                  }
                  valueType="Food Items"
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row style={{ height: "100%" }}>
              <Col className="shortcut-card-link">
                <Link to="/fullreport" className="shortcut-card first">
                  <ListAltIcon style={{ transform: "scale(1.8)" }} />
                  <br />
                  <br />
                  Full Order Report
                </Link>
              </Col>
              <Col className="shortcut-card-link">
                <Link to="/orderreport" className="shortcut-card second">
                  <AnalyticsIcon style={{ transform: "scale(1.8)" }} />
                  <br />
                  <br />
                  On Going Order
                </Link>
              </Col>
              <Col className="shortcut-card-link">
                <Link to="/kitchen" className="shortcut-card third">
                  <FoodBankIcon style={{ transform: "scale(1.8)" }} />
                  <br />
                  <br />
                  Kitchen Status
                </Link>
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
                  <Button
                    variant="light"
                    className="button1"
                    as={Link}
                    to={"/orderreport"}
                  >
                    <ListAltIcon className="mr-2" />
                    On Going Orders
                  </Button>{" "}
                </Col>
              </Row>
              <Table className="table-borderless " hover>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Order ID</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders
                    .filter(
                      (order) => order.updatedAt > new Date(today).toISOString()
                    )
                    .map((order) => {
                      return (
                        <OrderListTable
                          order={order}
                          key={order._id}
                          id={order._id}
                        />
                      );
                    })}
                </tbody>
              </Table>{" "}
              {orders.filter(
                (order) => order.updatedAt > new Date(today).toISOString()
              ).length === 0 && <center>No orders today yet.</center>}
            </div>
          </Col>
          <Col lg={5}>
            <div className="rounded trending-tab py-3">
              <Row className="mx-0">
                <Col>
                  <h4>Trending</h4>
                </Col>
                {/* <Col></Col>
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
                </Col> */}
              </Row>
              <hr />
              {trendings.map((trending, index) => {
                return (
                  <Row
                    className="mb-2 border-bottom p-3"
                    key={"trending-" + index}
                  >
                    <Col lg="3" className="">
                      <img
                        src={trending.image}
                        alt="food"
                        className="rounded-circle img-thumbnail"
                      />
                    </Col>
                    <Col>
                      <h4>{trending.food.name}</h4>
                      <h5>{trending.name}</h5>
                      {trending.desc.length > 50
                        ? trending.desc.substring(0, 50) + "..."
                        : trending.desc}
                    </Col>
                  </Row>
                );
              })}
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
