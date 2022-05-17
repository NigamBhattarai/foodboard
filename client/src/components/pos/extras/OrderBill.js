import React, { useEffect, useContext, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import "./OrderBill.scss";
import { POSContext } from "../pos";

function getAbsoluteHeight(el) {
  el = typeof el === "string" ? document.querySelector(el) : el;

  var styles = window.getComputedStyle(el);
  var margin =
    parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);

  return Math.ceil(el.offsetHeight + margin);
}
function adjustOrderBill() {
  document.querySelector(".order-bill").style.height =
    window.innerHeight -
    getAbsoluteHeight(document.querySelector(".dashboard-top-bar")) +
    "px";
}
function OrderBill(props) {
  //States
  const [customerName, setCustomerName] = useState("");

  useEffect(() => {
    adjustOrderBill();
  });
  React.useEffect(() => {
    function handleResize() {
      adjustOrderBill();
    }
    window.addEventListener("resize", handleResize);
  });

  const posContext = useContext(POSContext);
  function changeCountItem(i, action) {
    let temp_state = [...posContext.state.bill.billItems];
    temp_state[i].count =
      action === "+"
        ? (temp_state[i].count = temp_state[i].count + 1)
        : temp_state[i].count - 1 > 0
        ? (temp_state[i].count = temp_state[i].count - 1)
        : 1;
    posContext.dispatch({ type: "updateBillItems", value: temp_state });
    posContext.dispatch({ type: "updateBillPrices" });
  }

  function removeBillItem(i) {
    let temp_state = [...posContext.state.bill.billItems];
    temp_state.splice(i, 1);
    posContext.dispatch({ type: "updateBillItems", value: temp_state });
    posContext.dispatch({ type: "updateBillPrices" });
  }

  function removeAddOnBillItem(i, si) {
    let temp_state = [...posContext.state.bill.billItems];
    temp_state[i].extras.splice(si, 1);
    posContext.dispatch({ type: "updateBillItems", value: temp_state });
    posContext.dispatch({ type: "updateBillPrices" });
  }

  function getAddOnsPriceSum(extras) {
    var sum = 0;
    for (var i = 0; i < extras.length; i++) {
      sum += extras[i].price;
    }
    return sum;
  }

  function getAllItemsPriceArray() {
    const arr = [];
    for (var i = 0; i < posContext.state.bill.billItems.length; i++) {
      const value = posContext.state.bill.billItems[i];
      arr.push(
        getAddOnsPriceSum(value.extras) + value.variant.price * value.count
      );
    }
    return arr;
  }

  async function sendOrder(event) {
    const orderResponse = await posContext.sendOrder({
      customerName: customerName,
      itemPrices: getAllItemsPriceArray(),
    });
    if (orderResponse.err) {
      alert("Error: " + orderResponse.text);
    } else {
      alert("Success: " + orderResponse.text);
    }
  }

  return (
    <div className="order-bill py-3">
      <Container>
        <Row>
          <span className="order-bill-token-number my-4 mx-auto">
            Order #{posContext.state.tokenNumber}
          </span>
        </Row>
      </Container>
      <Container fluid>
        <Form.Control
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </Container>
      <Container className="order-bill-items">
        {posContext.state.bill.billItems.map((value, i) => {
          return (
            <Row key={i + value.name}>
              <Row className="order-bill-item">
                <Col xs={2}>
                  <img
                    src={value.image}
                    alt="user"
                    className="img-fluid rounded-circle order-bill-image mr-4"
                  />
                </Col>
                <Col xs={5} className="order-bill-food-name">
                  {value.name} {"(" + value.variant.name + ")"}
                </Col>
                <Col xs={2.5}>
                  <span className="order-bill-item-count">
                    <RemoveCircleOutlineIcon
                      className="order-bill-in-out mr-2"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        changeCountItem(i, "-");
                      }}
                    />
                    {value.count}
                    <AddCircleOutlineIcon
                      className="order-bill-in-out ml-2"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        changeCountItem(i, "+");
                      }}
                    />
                  </span>
                </Col>
                <Col xs={2.5} className="ml-auto order-bill-item-price-col">
                  <span className="order-bill-item-price">
                    Rs.{" "}
                    {getAddOnsPriceSum(value.extras) +
                      value.variant.price * value.count}
                  </span>
                  <CancelIcon
                    onClick={(e) => {
                      removeBillItem(i);
                    }}
                    className="ml-2 order-bill-item-cancel"
                  />
                </Col>
              </Row>
              <Container>
                {typeof value.extras !== "undefined" &&
                  value.extras !== false &&
                  value.extras.map((extra, subindex) => {
                    return (
                      <Row
                        key={subindex + extra._id.toString() + extra.name}
                        className="order-bill-addon-row"
                      >
                        <Col xs={9} className="order-bill-addon-name">
                          {"+" + extra.name}
                        </Col>
                        <Col xs={3}>
                          <span className="order-bill-addon-price">
                            Rs. {extra.price}
                          </span>
                          <CancelIcon
                            onClick={(e) => {
                              removeAddOnBillItem(i, subindex);
                            }}
                            className="ml-2 order-bill-addon-cancel"
                          />
                        </Col>
                      </Row>
                    );
                  })}
              </Container>
            </Row>
          );
          // });
        })}
      </Container>
      <Container>
        <hr />
        <Row className="justify-content-between order-bill-total-box order-bill-sub-total">
          <Col xs={5} className="ml-3">
            Sub Total
          </Col>
          <Col xs={3}>Rs. {posContext.state.bill.prices.subTotal}</Col>
        </Row>
        <Row className="justify-content-between order-bill-total-box order-bill-tax">
          <Col xs={5} className="ml-3">
            Tax
          </Col>
          <Col xs={3}>Rs. {posContext.state.bill.prices.tax}</Col>
        </Row>
        <Row className="order-bill-total-box order-bill-discount">
          <Col xs={1} className="ml-3">
            Discount
          </Col>
          <Col xs={2} className="ml-4 mr-auto">
            <Form.Control
              // type="number"
              placeholder="0%"
              disabled={true}
              value={posContext.state.bill.prices.discountPercentage + "%"}
              className="order-bill-discount-percentage"
              max="100"
            />
          </Col>
          <Col xs={3}>Rs. {posContext.state.bill.prices.discountValue}</Col>
        </Row>
        <Row className="justify-content-between order-bill-total-box order-bill-grand-total">
          <Col xs={5} className="ml-3">
            Total
          </Col>
          <Col xs={3} className="ml-auto">
            Rs. {posContext.state.bill.prices.total}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Button
            variant="light"
            className="default-button order-bill-place-order-btn"
            onClick={(e) => {
              sendOrder(e);
            }}
          >
            Place Order
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default OrderBill;
