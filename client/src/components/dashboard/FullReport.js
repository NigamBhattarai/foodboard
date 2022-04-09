import React, { useState,useEffect,useReducer } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Dropdown,
  DropdownButton,
  Tabs,
  Tab,
  Table,
} from "react-bootstrap";
import axios from 'axios';
import OrderListTable from "../pos/extras/OrderListTable.js";
import ListAltIcon from "@mui/icons-material/ListAlt";
import "./FullReport.scss";
import OrderItems from "../pos/extras/OrderItems.js";

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


function FullReport(props) {
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
  const [selected, setSelected] = useState([]);
  const [click,setClick]=useState(false);
  function handleClick(order) {
    setSelected(order);
    setClick(true);
  }

  return (
    <Container fluid>
      <Row className="title align-items-center">
        <Col lg={3}>
          <h2>Full Report</h2>
          <small className="text-muted">Tuesday 2,Feb,2021</small>
        </Col>
        <Col></Col>
        <Col lg={1}>
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
      <div className="main-body">

      <Row>
        <Col lg={7}>
          <div className="order-report py-3 rounded">
            <Row className="mx-0">
              <Col lg={4}>
                <h4>Orders</h4>
              </Col>
              <Col></Col>
              <Col lg={3}>
                <Button variant="light" className="button1">
                  <ListAltIcon className="mr-2" />
                  Full List
                </Button>{" "}
              </Col>
            </Row>
            <Row className="mx-0">
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
                        handleClick={() => handleClick(order)}
                        selected={order.id == selected.id}
                      />
                    );
                  })}
                </tbody>
              </Table>
            </Row>
          </div>
        </Col>
        <Col lg={5}>
          <div className="detailOrder py-3 rounded">
            <Row className="mx-0">
              <Col>
                <h4>Detailed Order</h4>
              </Col>
              <Col></Col>
            </Row>
            <Row className="mx-0">
              <Col>
                <Tabs defaultActiveKey="first">
                  <Tab eventKey="first" title="Items">
                    <Row className="item-list mt-2">
                      {click && selected.foodItems.map((foodItem) => {
                        return <OrderItems foodItems={foodItem} page="order" key={foodItem.id}/>}
                      )}
                    </Row>
                  </Tab>
                  <Tab eventKey="second" title="Progress">
                    Hii, I am 2nd tab content
                  </Tab>
                  <Tab eventKey="third" title="Review">
                    Hii, I am 3rd tab content
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      </div>
    </Container>
  );
}

export default FullReport;
