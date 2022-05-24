import React from "react";
import { Col, Container, Row, Badge } from "react-bootstrap";
import "./OrderDisplay.scss";
function OrderDisplayCard(props) {
  function renderStatus() {
    switch (props.order.status) {
      case 0:
        return "pending";

      case 1:
        return "preparing";

      case 3:
        return "canceled";

      case 4:
        return "ready";

      default:
        return "canceled";
    }
  }
  return (
    <Col md={2} className="mb-4">
      <Container
        fluid
        className={
          "order-display-card order-" + renderStatus() + " rounded-pill p-3"
        }
      >
        <Row>
          <Col></Col>
          <Col md={5} style={{ textTransform: "capitalize" }}>
            {renderStatus()}
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <h2>#{props.order.token_number}</h2>
          </Col>
        </Row>
        <hr />
        <Row className="order-display-customer-name">
          <Col>
            <h5>{props.order.customer_name}</h5>
          </Col>
        </Row>
      </Container>
    </Col>
  );
}

export default OrderDisplayCard;
