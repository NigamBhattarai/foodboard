import React, { useEffect } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import ItemCard from "./extras/ItemCard";
import OrderBill from "./extras/OrderBill";
import TopBar from "./extras/TopBar";

import "./pos.scss";
function itemCards() {
  var rows = [];
  for (var i = 0; i < 15; i++) {
    rows.push(<ItemCard />);
  }
  return rows;
}
function getAbsoluteHeight(el) {
  el = typeof el === "string" ? document.querySelector(el) : el;

  var styles = window.getComputedStyle(el);
  var margin =
    parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);

  return Math.ceil(el.offsetHeight + margin);
}
function adjustPOSPage() {
  document.querySelector(".item-card-row").style.maxHeight =
    window.innerHeight -
    getAbsoluteHeight(document.querySelector(".dashboard-top-bar")) -
    getAbsoluteHeight(document.querySelector(".header-category-menu")) -
    getAbsoluteHeight(document.querySelector(".food-search")) +
    "px";
}
export default function POS() {
  useEffect(() => {
    adjustPOSPage();
  });
  React.useEffect(() => {
    function handleResize() {
      adjustPOSPage();
    }
    window.addEventListener("resize", handleResize);
  });
  return (
    <div>
      <Container fluid className="main-container">
        {/* <Row> */}
        {/* <Col xs={2} className="p-0 m-0">
              <SideBar/>
            </Col> */}
        <TopBar />
        <Row className="mt-1">
          <Col xs={12} lg={8}>
            <Container>
              <div className="header-category-menu my-4 py-2">
                <Button variant="link" className="mr-1">
                  Bread <span className="active-underline"></span>{" "}
                </Button>
                <Button variant="link" className="active mr-1">
                  Bread <span className="active-underline"></span>{" "}
                </Button>
                <Button variant="link" className="mr-1">
                  Bread <span className="active-underline"></span>{" "}
                </Button>
                <Button variant="link" className="mr-1">
                  Bread <span className="active-underline"></span>{" "}
                </Button>
                <Button variant="link" className="mr-1">
                  Bread <span className="active-underline"></span>{" "}
                </Button>
              </div>
              <Row>
                <Col xs={12} lg={6}>
                  <Form.Control
                    type="text"
                    placeholder="Search For Food Items"
                    className="food-search mb-3"
                  />
                </Col>
              </Row>
              <Row className="item-card-row pb-3">{itemCards()}</Row>
            </Container>
          </Col>
          <Col xs={12} lg={4}><OrderBill /></Col>
        </Row>
        {/* </Row> */}
      </Container>
    </div>
  );
}
