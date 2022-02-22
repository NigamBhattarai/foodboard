import React from "react";
import { Col, Modal, Row, Button, Form, Container } from "react-bootstrap";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import "./OrderPopup.scss";

function OrderPopup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="order-popup-modal"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Food To Cart
        </Modal.Title>
        <CancelIcon onClick={props.onHide} className="order-popup-close-btn" />
      </Modal.Header>
      <Modal.Body>
        <Row className="order-popup-item-row">
          <Col xs={2}>
            <img
              src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
              className="img-fluid rounded-circle"
              style={{ padding: 10 }}
            />
          </Col>
          <Col xs={3} className="my-auto">
            <span className="order-popup-item-name">Jhol Momo</span>
          </Col>
          <Col xs={2} className="my-auto">
            <Form.Select
              aria-label="Default select"
              className="order-popup-item-dropdown"
            >
              <option value="1">Chicken</option>
              <option value="2">Buff</option>
              <option value="3">Veg</option>
            </Form.Select>
          </Col>
          <Col xs={2} className="px-4 my-auto">
            <span
              className="order-popup-item-count"
              style={{ alignItems: "center" }}
            >
              <RemoveCircleOutlineIcon
                className="order-popup-in-out mr-2"
                style={{ cursor: "pointer" }}
              />
              1
              <AddCircleOutlineIcon
                className="order-popup-in-out ml-2"
                style={{ cursor: "pointer" }}
              />
            </span>
          </Col>
          <Col xs={3} className="my-auto">
            <Row>
              <Col xs={7}>Rs. 400</Col>
              <Col xs={2}>
                {" "}
                <HighlightOffIcon className="mr-auto order-popup-cancel-icon" />{" "}
              </Col>
            </Row>
          </Col>
        </Row>
        <Container className="mt-4">
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>Add-Ons</span>
          <Form>
            <Container className="m-4">
              <Row>
                <Col xs={4} className="p-2 order-popup-variant-checkbox">
                  <Form.Check type={"checkbox"} id={``} label={`Cheese`} />
                </Col>
                <Col xs={4} className="p-2 order-popup-variant-checkbox">
                  <Form.Check type={"checkbox"} id={``} label={`Cheese`} />
                </Col>
                <Col xs={4} className="p-2 order-popup-variant-checkbox">
                  <Form.Check type={"checkbox"} id={``} label={`Cheese`} />
                </Col>
                <Col xs={4} className="p-2 order-popup-variant-checkbox">
                  <Form.Check type={"checkbox"} id={``} label={`Cheese`} />
                </Col>
                <Col xs={4} className="p-2 order-popup-variant-checkbox">
                  <Form.Check type={"checkbox"} id={``} label={`Cheese`} />
                </Col>
                <Col xs={4} className="p-2 order-popup-variant-checkbox">
                  <Form.Check type={"checkbox"} id={``} label={`Cheese`} />
                </Col>
              </Row>
            </Container>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="default-button order-popup-bottom-button">Add Multiple Variant</Button>
        <Button className="default-button order-popup-bottom-button">Add To Cart</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrderPopup;
