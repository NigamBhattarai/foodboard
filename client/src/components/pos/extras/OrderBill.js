import React, { useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import "./OrderBill.scss";

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
function OrderBill() {
  useEffect(() => {
    adjustOrderBill();
  });
  React.useEffect(() => {
    function handleResize() {
      adjustOrderBill();
    }
    window.addEventListener("resize", handleResize);
  });
  return (
    <div className="order-bill py-3">
      <Container>
        <Row>
          <span className="order-bill-token-number my-4 mx-auto">
            Order #123456
          </span>
        </Row>
      </Container>
      <Container className="order-bill-items">
        <Row className="order-bill-item">
          <Col xs={2}>
            <img
              src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
              alt="user"
              className="img-fluid rounded-circle order-bill-image mr-4"
            />
          </Col>
          <Col xs={5} className="order-bill-food-name">
            Chicken tandoori
          </Col>
          <Col xs={2.5}>
            <span className="order-bill-item-count">
              <RemoveCircleOutlineIcon className="order-bill-in-out mr-2" /> 2{" "}
              <AddCircleOutlineIcon className="order-bill-in-out ml-2" />
            </span>
          </Col>
          <Col xs={2.5} className="ml-auto order-bill-item-price-col">
            <span className="order-bill-item-price">Rs. 400</span>
            <CancelIcon className="ml-2 order-bill-item-cancel" />
          </Col>
        </Row>
        <Container>
          <Row className="order-bill-addon-row">
            <Col xs={9} className="order-bill-addon-name">
              +extra jhol
            </Col>
            <Col xs={3}>
              <span className="order-bill-addon-price">Rs. 20</span>
              <CancelIcon className="ml-2 order-bill-addon-cancel" />
            </Col>
          </Row>
        </Container>
        <Row className="order-bill-item">
          <Col xs={2}>
            <img
              src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
              alt="user"
              className="img-fluid rounded-circle order-bill-image mr-4"
            />
          </Col>
          <Col xs={5} className="order-bill-food-name">
            Chicken tandoori
          </Col>
          <Col xs={2.5}>
            <span className="order-bill-item-count">
              <RemoveCircleOutlineIcon className="order-bill-in-out mr-2" /> 2{" "}
              <AddCircleOutlineIcon className="order-bill-in-out ml-2" />
            </span>
          </Col>
          <Col xs={2.5} className="ml-auto order-bill-item-price-col">
            <span className="order-bill-item-price">Rs. 400</span>
            <CancelIcon className="ml-2 order-bill-item-cancel" />
          </Col>
        </Row>
        <Container>
          <Row className="order-bill-addon-row">
            <Col xs={9} className="order-bill-addon-name">
              +extra jhol
            </Col>
            <Col xs={3}>
              <span className="order-bill-addon-price">Rs. 20</span>
              <CancelIcon className="ml-2 order-bill-addon-cancel" />
            </Col>
          </Row>
          <Row className="order-bill-addon-row">
            <Col xs={9} className="order-bill-addon-name">
              +extra jhol
            </Col>
            <Col xs={3}>
              <span className="order-bill-addon-price">Rs. 20</span>
              <CancelIcon className="ml-2 order-bill-addon-cancel" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <hr />
        <Row className="justify-content-between order-bill-total-box order-bill-sub-total">
          <Col xs={5} className="ml-3">
            Sub Total
          </Col>
          <Col xs={3}>Rs. 200</Col>
        </Row>
        <Row className="justify-content-between order-bill-total-box order-bill-tax">
          <Col xs={5} className="ml-3">
            Tax
          </Col>
          <Col xs={3}>Rs. 200</Col>
        </Row>
        <Row className="order-bill-total-box order-bill-discount">
          <Col xs={1} className="ml-3">
            Discount
          </Col>
          <Col xs={2} className="ml-4 mr-auto">
            <Form.Control
              type="number"
              placeholder="0%"
              className="order-bill-discount-percentage"
              max="100"
            />
          </Col>
          <Col xs={3}>Rs. 200</Col>
        </Row>
        <Row className="justify-content-between order-bill-total-box order-bill-grand-total">
          <Col xs={5} className="ml-3">
            Total
          </Col>
          <Col xs={3} className="ml-auto">
            Rs. 200
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Button variant="light" className="order-bill-place-order-btn">
            Place Order
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default OrderBill;
