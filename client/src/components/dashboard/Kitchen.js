import React from 'react';
import { Col, Button, Row, Container } from "react-bootstrap";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import './kitchen.scss';
import Kitchencomp from './Kitchencomp';

function Kitchen(props) {
    return (
        <Container className="order-body">
      <Row>
        <Col xs={10} className="order-header">
          Kitchen <Row className="date-time"> Tuesday 2 Feb, 2021 </Row>{" "}
        </Col>{" "}
        <Col xs={2} className="md-auto">
          <Button className="filter-order">
            <FormatListNumberedIcon className="filter-icon" />
            Filter Order{" "}
          </Button>{" "}
        </Col>{" "}
      </Row>{" "}
      <hr />
      <Kitchencomp />
      </Container>


    );
}

export default Kitchen;