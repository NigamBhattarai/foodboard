import React from "react";
import "./dashboard.scss";
import { Row, Col, Container } from "react-bootstrap";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SettingsIcon from "@mui/icons-material/Settings";
import DnsIcon from "@mui/icons-material/Dns";
import { useLocation, Link } from "react-router-dom";
function Dashboard(props) {
  const location = useLocation();

  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="sideBar">
          <Row className="imagePane py-3">
            <Col md={9}>
              <img
                src="/images/foodboard-logo.png"
                className="img-fluid"
                alt="logo"
              />
            </Col>
          </Row>
          <div className="sidebar-links mt-2">
            <Row
              as={Link}
              to="/dashboard"
              className={
                "sidebar-link " +
                (splitLocation[1] === "dashboard" ? "active" : "")
              }
            >
              <Row className="py-3 pl-5 my-2">
                <Col md={1} className="mr-2">
                  <DashboardIcon />
                </Col>
                <Col>Dashboard</Col>
              </Row>
            </Row>
            <Row
              as={Link}
              to="/orders"
              className={
                "sidebar-link " +
                (splitLocation[1] === "orders" ? "active" : "")
              }
            >
              <Row className="py-3 pl-5 my-2">
                <Col md={1} className="mr-2">
                  <AssignmentIcon />
                </Col>
                <Col>Order</Col>
              </Row>{" "}
            </Row>
            <Row
              as={Link}
              to="/food"
              className={
                "sidebar-link " + (splitLocation[1] === "food" ? "active" : "")
              }
            >
              <Row className="py-3 pl-5 my-2">
                <Col md={1} className="mr-2">
                  <LocalDiningIcon />
                </Col>
                <Col>Foods</Col>
              </Row>{" "}
            </Row>
            <Row
              as={Link}
              to="/categories"
              className={
                "sidebar-link " +
                (splitLocation[1] === "categories" ? "active" : "")
              }
            >
              <Row className="py-3 pl-5 my-2">
                <Col md={1} className="mr-2">
                  <DnsIcon />
                </Col>
                <Col>Categories</Col>
              </Row>{" "}
            </Row>
            <Row
              as={Link}
              to="/coupon"
              className={
                "sidebar-link " +
                (splitLocation[1] === "coupon" ? "active" : "")
              }
            >
              <Row className="py-3 pl-5 my-2">
                <Col md={1} className="mr-2">
                  <LocalOfferIcon />
                </Col>
                <Col>Coupons</Col>
              </Row>{" "}
            </Row>
            <Row
              as={Link}
              to="/setting"
              className={
                "sidebar-link " +
                (splitLocation[1] === "setting" ? "active" : "")
              }
            >
              <Row className="py-3 pl-5 my-2">
                <Col md={1} className="mr-2">
                  <SettingsIcon />
                </Col>
                <Col>Settings</Col>
              </Row>
            </Row>
          </div>
        </Col>
        <Col md={10} className="p-0">
          <Row className="topbar">
            <Col md={1} as={Link} to="/pos" className="topbar-link">
              <Col className="text-center mx-1">POS</Col>
            </Col>
            <Col
              md={1}
              as={Link}
              to="/fullreport"
              className="topbar-link text-center mx-1"
            >
              <Col className="text-center mx-1">Order</Col>
            </Col>
            <Col as={Link} to="/kitchen" md={1} className="topbar-link">
              <Col className="text-center mx-1">Kitchen</Col>
            </Col>
          </Row>
          <Row className="m-1">{props.children}</Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Dashboard;
