import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Navbar, Nav } from "react-bootstrap";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import "./TopBar.scss";
import { AppContext } from "../../../App";
import dateFormat from "dateformat";

function TopBar() {
  const appContext = useContext(AppContext);
  function handleLogout() {
    appContext.dispatch({ type: "logout" });
  }
  function getCurrentDate() {
    return dateFormat(new Date(), "dddd, d mmmm, yyyy").toString();
  }
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
          <Button
            as={Link}
            to="/dashboard"
            variant="link"
            className="top-bar-link"
          >
            {" "}
            Dashboard{" "}
          </Button>
          <Button
            as={Link}
            to="/orderreport"
            variant="link"
            className="top-bar-link"
          >
            {" "}
            On Going{" "}
          </Button>
          <Button as={Link} to="/pos" variant="link" className="top-bar-link">
            {" "}
            POS{" "}
          </Button>
          <Button
            variant="link"
            className="top-bar-link"
            as={Link}
            to="/orderdisplay"
          >
            {" "}
            Orders{" "}
          </Button>
        </Nav>
        <Nav className="ml-auto">
          <AccessTimeFilledIcon className="top-bar-clock mr-2" />
          <span className="top-bar-time mr-4">{getCurrentDate()}</span>
          <span
            className="top-bar-user-text mr-2"
            style={{ textTransform: "uppercase" }}
          >
            {typeof appContext.state.userData !== "undefined" &&
              appContext.state.userData.user.username}
          </span>
          <Button
            variant="link"
            onClick={(e) => {
              handleLogout();
            }}
          >
            Logout
          </Button>
          <img
            src={
              typeof appContext.state.userData !== "undefined"
                ? appContext.state.userData.user.profile_image
                : "https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
            }
            alt="user"
            className="img-fluid rounded-circle top-bar-user-image"
          />
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
