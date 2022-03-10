import React from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Dropdown,
  DropdownButton,
  Tabs,
  Tab,
  Sonnet,
} from "react-bootstrap";

import OrderListTable from "../pos/extras/OrderListTable.js";
import ListAltIcon from "@mui/icons-material/ListAlt";
import "./FullReport.scss";

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
      <Row>
        <Col lg={7} className="rounded order-report py-3 mr-5">
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
        <Col lg={4} className="detailOrder py-3">
          <Row className="mx-0">
            <Col>
              <h4>Detailed Order</h4>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <Tabs defaultActiveKey="first">
                <Tab eventKey="first" title="Items">
                  <Row className="item-list mt-2">
                    <Col xs={4}>
                      {" "}
                      <img
                        className="grilled-chicks"
                        src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                        alt="grilled-chicks"
                      />
                    </Col>{" "}
                    <Col xs={5} className="item-description">
                      Jhol MoMo{" "}
                      <Row className="addOns">
                        {" "}
                        +extra jhol + extra achar{" "}
                      </Row>{" "}
                      <Row className="qty"> Qty: 3 </Row>
                    </Col>{" "}
                    <Col xs={3} className="item-price">
                      {" "}
                      Rs 600{" "}
                    </Col>{" "}
                  </Row>
                  <hr className="line-style" />
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
        </Col>
      </Row>
    </Container>
  );
}

export default FullReport;
