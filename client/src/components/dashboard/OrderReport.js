import React, { useEffect, useReducer, useState } from "react";
import { Row, Col, Container, Button, Table, Badge } from "react-bootstrap";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import PrintIcon from "@mui/icons-material/Print";
import dateFormat from "dateformat";
import { io } from "socket.io-client";
import LoadingBox from "./components/LoadingBox";
import MessageBox from "./components/MessageBox";
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
function renderStatus(order) {
  switch (order.status) {
    case 0:
      return (
        <Badge pill className="pill-pending">
          Pending
        </Badge>
      );
    case 1:
      return (
        <Badge pill className="pill-preparing">
          Preparing
        </Badge>
      );
    case 2:
      return (
        <Badge pill className="pill-served">
          Served
        </Badge>
      );
    case 3:
      return (
        <Badge pill className="pill-canceled">
          Canceled
        </Badge>
      );
    case 4:
      return (
        "Serve",
        (
          <Button
            variant="outline-success"
            style={{ width: 100 }}
            onClick={() => submitData(2, order._id)}
          >
            Serve
          </Button>
        )
      );
    default:
      break;
  }
}
function submitData(status, id) {
  axios.post(process.env.REACT_APP_API_URL + "api/orders/updateStatus", {
    status: status,
    id: id,
  });
  alert.success("Order has been served");
}

function OrderReport() {
  UseTitle("Order Report");
  const [nullState] = useState();
  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    orders: [],
    loading: true,
    error: "",
  });

  function convertTime(time) {
    return dateFormat(time, "hh:mm TT").toString();
  }

  async function fetchData() {
    dispatch({ type: "FETCH_REQUEST" });
    try {
      const result = await axios.get(
        process.env.REACT_APP_API_URL + "api/orders"
      );
      dispatch({ type: "FETCH_SUCCESS", payload: result.data });
    } catch (err) {
      dispatch({ type: "FETCH_FAIL", payload: err.message });
    }
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
    <Container fluid className=" categories mt-4">
      <Row className="title align-items-center mx-0">
        <Col lg={2}>
          <Row>
            {" "}
            <h2>Orders</h2>
          </Row>
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
          <Container fluid>
            <Row>
              <Col md="12">
                <Table
                  className="table-borderless align-middle"
                  hover
                  size="sm"
                >
                  <thead>
                    <tr>
                      <th>Customer Name</th>
                      <th>Time</th>
                      <th>Token</th>
                      <th>No. Of Items</th>
                      <th>Items</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders
                      .filter(
                        (order) =>
                          order.status === 0 ||
                          order.status === 1 ||
                          order.status === 4
                      )
                      .map((order, index) => {
                        // const classname = "pill-" + order.status;
                        return (
                          <tr key={"order-" + index}>
                            <td>{order.customer_name}</td>
                            <td>{convertTime(order.ordered_time)}</td>
                            <td>{order.token_number}</td>
                            <td>{order.foodItems.length}</td>
                            <td>
                              {order.foodItems
                                .map((foodItem) => {
                                  return (
                                    foodItem.variant.name +
                                    " " +
                                    foodItem.variant.food.name
                                  );
                                })
                                .toString()
                                .substring(0, 40)}
                            </td>
                            <td>{renderStatus(order)}</td>
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
            </Row>
          </Container>
        )}
      </div>
    </Container>
  );
}
export default OrderReport;
