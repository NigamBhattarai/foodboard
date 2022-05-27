import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function OutsideHeader() {
  return (
    <Container fluid>
      <Row style={{ backgroundColor: "#fff", padding: "5px 0px" }}>
        <Col xs={6} sm={4} md={4} lg={2}>
          <img
            src="/images/foodboard-logo.png"
            className="img-fluid"
            alt="logo"
          />
        </Col>
        <Col xs={6} sm={4} md={4} lg={2} className="ml-auto my-auto">
          <Link to={"/signin"} className="mr-4">Sign in</Link>
        </Col>
      </Row>
    </Container>
  );
}
