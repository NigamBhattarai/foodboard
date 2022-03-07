import React from "react";
import { Row, Col } from "react-bootstrap";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import "./SummarryCard.scss";
function SummaryCard(props) {
  return (
    <Col className="summaryCard">
      <Row className="p-3 align-items-center">
        <Col md={2} className="valueType p-1 text-center">
        {
    props.valueType === "Revenue" ? (
      <CurrencyRupeeIcon />
    ) : props.valueType === "Order" ? (
      <AssignmentIcon />
    ) : (
      <LocalDiningIcon />
    )}
        </Col>
        <Col md={4} className="changeValue text-center">
          {props.changeValue}%
        </Col>
        <Col md={3} className="change text-center">
          {props.change==="0"?<ArrowCircleUpIcon />:<ArrowCircleDownIcon/>}
        </Col>
      </Row>
      <Row className="value">
        <Col>
          <h2>{props.value}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h6 className="text-muted">Total {props.valueType}</h6>
        </Col>
      </Row>
    </Col>
  );
}

export default SummaryCard;
