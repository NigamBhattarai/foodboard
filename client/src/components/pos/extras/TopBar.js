import React from "react";
import {Link} from "react-router-dom";
import { Button, Col, Navbar, Nav } from "react-bootstrap";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import "./TopBar.scss";

function TopBar() {
  return (
    <Navbar expand="lg" className="dashboard-top-bar">
      <Col xs={6} sm={4} md={4} lg={2}>
        <Navbar.Brand href="#home">
          <img
            src="/images/foodboard-logo.png"
            className="img-fluid"
            alt="logo"
          />
        </Navbar.Brand>
      </Col>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Button as={Link} to="/dashboard" variant="link" className="top-bar-link">
            {" "}
            Dashboard{" "}
          </Button>
          <Button variant="link" className="top-bar-link">
            {" "}
            On Going{" "}
          </Button>
          <Button variant="link" className="top-bar-link">
            {" "}
            Kitchen Status{" "}
          </Button>
          <Button variant="link" className="top-bar-link">
            {" "}
            Orders{" "}
          </Button>
        </Nav>
        <Nav className="ml-auto">
          <AccessTimeFilledIcon className="top-bar-clock mr-2" />
          <span className="top-bar-time mr-4">Wed,Feb 10,2022 | 6:15PM</span>
          <span className="top-bar-user-text mr-2">ADMIN</span>
          <img src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg" alt="user" className="img-fluid rounded-circle top-bar-user-image mr-4"/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <Row className="dashboard-top-bar p-1">
    //   <Col xs={2} className="p-0">
    //   </Col>
    //   <Col xs={5}>
    //   </Col>
    // </Row>
  );
}

export default TopBar;
