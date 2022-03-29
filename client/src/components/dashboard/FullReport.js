import React from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

import OrderListTable from "../pos/extras/OrderListTable.js";
import ListAltIcon from "@mui/icons-material/ListAlt";
import "./FullReport.scss"

function FullReport(props) {
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
      <Col lg={7} className="rounded order-report py-3">
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
        <OrderListTable />
      </Col>
    </Container>
  );
}

export default FullReport;
