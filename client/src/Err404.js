import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OutsideHeader from "./components/outside/fragments/OutsideHeader";
import Cookies from "universal-cookie";
import TopBar from "./components/pos/extras/TopBar";
const cookies = new Cookies();

function Err404() {
  var isLoggedIn = cookies.get("accessToken") !== undefined ? true : false;

  return (
    <>
      {isLoggedIn?<TopBar/>:<OutsideHeader />}
      <Container>
        <Row>
          <Col md={6} className="mx-auto mt-5 text-center">
            <span
              style={{ color: "#8F8F8F", fontWeight: "bold", fontSize: 150 }}
            >
              404
            </span>
            <br />
            <span
              style={{ color: "#4F4F4F", fontWeight: "bold", fontSize: 20 }}
            >
              Error, Page not found !
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Err404;
