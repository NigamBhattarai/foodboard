import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import SummaryCard from "../pos/extras/SummaryCard.js";
import OrderListTable from "../pos/extras/OrderListTable.js";
import ListAltIcon from '@mui/icons-material/ListAlt';
import "./Main.scss";

export default class Main extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="title">
          <Col>
            <h2>Dashboard</h2>
            <small className="text-muted">Tuesday 2,Feb,2021</small>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col lg={7}>
            <Row>
              <Col lg={4}>
                <SummaryCard
                  changeValue="24"
                  change="0"
                  value="$30,500.0"
                  valueType="Revenue"
                />
              </Col>
              <Col lg={4}>
                <SummaryCard
                  changeValue="2"
                  change="1"
                  value="345"
                  valueType="Order"
                />
              </Col>
              <Col lg={4}>
                <SummaryCard
                  changeValue="0"
                  change="0"
                  value="145"
                  valueType="Food Item"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mx-0 my-2 justify-content-between">
          <Col lg={7} className="rounded order-report py-3">
            <Row className="mx-0">
              <Col lg={4}>
                <h4>Order Report</h4>
              </Col>
              <Col></Col>
              <Col lg={3}>
              <Button variant="light" className="button1">
              <ListAltIcon className="mr-2" />
              
              Full List
            </Button>              </Col>
            </Row>
            <OrderListTable/>
          </Col>
          <Col lg={4} className="trending-tab py-3 offset-1">
            <Row className="mx-0">
              <Col>
                <h4>Trending</h4>
              </Col>
              <Col></Col>
              <Col>
                <DropdownButton id="dropdown-basic-button" variant="light" className="button1" title="Today">
                  <Dropdown.Item href="#/action-1">Yesterday</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Last 7 days</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">This Month</Dropdown.Item>
                </DropdownButton>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <Row></Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
