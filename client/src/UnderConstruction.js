import React from "react";
import { Col, Row } from "react-bootstrap";
import UseTitle from "./hooks/useTitle";

function UnderConstruction() {
  UseTitle("Under Construction");
  return (
    <Row style={{ height: "90vh" }}>
      <Col md={3} className="mx-auto my-auto">
        <img className="img-fluid" src="images/under-construction.png" />
      </Col>
    </Row>
  );
}

export default UnderConstruction;
