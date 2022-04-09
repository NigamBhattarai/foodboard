import React from "react";
import "./dashboard.scss";
import { Row, Col } from "react-bootstrap";
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
            className={
              "sidebar-link " +
              (splitLocation[1] === "dashboard" ? "active" : "")
            }
          >
            <Link to="/dashboard">
              <Row className="py-3 pl-5 my-2">
                <Col md={1} className="mr-2">
                  <DashboardIcon />
                </Col>
                <Col>Dashboard</Col>
              </Row>
            </Link>
          </Row>
          <Row
            className={
              "sidebar-link " + (splitLocation[1] === "orders" ? "active" : "")
            }
          >
            <Link to="/orders">
              <Row className="py-3 pl-5 my-2">
                <Col md={1} className="mr-2">
                  <AssignmentIcon />
                </Col>
                <Col>Order</Col>
              </Row>{" "}
            </Link>
          </Row>
          <Row
            className={
              "sidebar-link " + (splitLocation[1] === "food" ? "active" : "")
            }
          >
            <Link to="/food">
              <Row className="py-3 pl-5 my-2">
                <Col md={1} className="mr-2">
                  <LocalDiningIcon />
                </Col>
                <Col>Foods</Col>
              </Row>{" "}
            </Link>
          </Row>
          <Row
            className={
              "sidebar-link " +
              (splitLocation[1] === "categories" ? "active" : "")
            }
          >
            <Link to="/categories">
              <Row className="py-3 pl-5 my-2">
                <Col md={1} className="mr-2">
                  <DnsIcon />
                </Col>
                <Col>Categories</Col>
              </Row>{" "}
            </Link>
          </Row>
          <Row
            className={
              "sidebar-link " +
              (splitLocation[1] === "coupon" ? "active" : "")
            }
          >
            <Link to="/coupon">
              <Row className="py-3 pl-5 my-2">
                <Col md={1} className="mr-2">
                  <LocalOfferIcon />
                </Col>
                <Col>Coupons</Col>
              </Row>{" "}
            </Link>
          </Row>
          <Row
            className={
              "sidebar-link " + (splitLocation[1] === "setting" ? "active" : "")
            }
          >
            <Link to="/setting">
              <Row className="py-3 pl-5 my-2">
                <Col md={1} className="mr-2">
                  <SettingsIcon />
                </Col>
                <Col>Settings</Col>
              </Row>
            </Link>
          </Row>
        </div>
      </Col>
      <Col md={10} className="p-0">
        <Row className="topbar">
          <Col md={1}  className="topbar-link">
            <Link to="/dashboard">
              <Col className="text-center mx-1">
                POS
              </Col>
            </Link>
          </Col>
          <Col md={1} className="topbar-link text-center mx-1">
            Order
          </Col>
          <Col md={1} className="topbar-link text-center mx-1">
            Kitchen
          </Col>
          <Col md={1} className="topbar-link text-center mx-1">
            Order
          </Col>
        </Row>
        <Row className="m-1">{props.children}</Row>
      </Col>
    </Row>
  );
}
export default Dashboard;
