import React, { useContext, useEffect, useState } from "react";
import { Col, Modal, Row, Button, Form, Container } from "react-bootstrap";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./AddFoodPopup.scss";
import { FoodManagementContext } from "./FoodManagement";

function getVariantsOfItem(itemID) {
  var variants = [
    { id: 1, name: "Chicken", selected: true },
    { id: 2, name: "Buff", selected: false },
    { id: 3, name: "Veg", selected: false },
  ];
  return variants;
}

function getAddOnsOfItem(itemID) {
  var addons = [
    { id: 1, name: "extra cheese", price: 25, selected: false },
    { id: 2, name: "extra sause", price: 20, selected: false },
    { id: 3, name: "seperate jhol", price: 10, selected: false },
  ];
  return addons;
}

function AddFoodPopup(props) {
  const foodManagementContext = useContext(FoodManagementContext);

  //States
  const [variants, setVariants] = useState([]);
  const [addOns, setAddOns] = useState([]);
  const [count, setCount] = useState(1);

  function addMultipleVariantClicked(event) {}

  function addToBillClicked(e) {
    props.onHide(e);
  }

  function checkHandler(i) {
    let temp_state = [...addOns];
    temp_state[i].selected = !temp_state[i].selected;
    setAddOns(temp_state);
  }

  return (
    <Modal
      {...props}
      show={true}
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
        {/* <Row className="order-popup-item-row">
          <Col xs={2}>
            <img
              src={item.image}
              alt="item"
              className="img-fluid rounded-circle"
              style={{ padding: 10 }}
            />
          </Col>
          <Col xs={3} className="my-auto">
            <span className="order-popup-item-name">{item.name}</span>
          </Col>
          <Col xs={2} className="my-auto">
            <Form.Select
              aria-label="Default select"
              className="order-popup-item-dropdown"
            >
              {variants.length > 0 ? (
                variants.map((value, index, array) => {
                  return (
                    <option
                      selected={value.selected}
                      key={value.id + value.name}
                      value="1"
                    >
                      {value.name}
                    </option>
                  );
                })
              ) : (
                <option value="1">Default</option>
              )}
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
                onClick={(e) => {
                  changeCountItem(0, "-");
                }}
              />
              {count}
              <AddCircleOutlineIcon
                className="order-popup-in-out ml-2"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  changeCountItem(0, "+");
                }}
              />
            </span>
          </Col>
          <Col xs={3} className="my-auto">
            <Row>
              <Col xs={7}>{item.price}</Col>
              <Col xs={2}>
                {" "}
                <HighlightOffIcon className="mr-auto order-popup-cancel-icon" />{" "}
              </Col>
            </Row>
          </Col>
        </Row> */}
        {/* <Container className="mt-4">
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>Add-Ons</span>
          <Form>
            <Container className="m-4">
              <Row>
                {addOns.map((value, index, array) => {
                  return (
                    <Col
                      xs={4}
                      key={value.id + value.name}
                      className="p-2 order-popup-variant-checkbox"
                    >
                      <Form.Check
                        type={"checkbox"}
                        id={``}
                        checked={value.selected}
                        onChange={(e) => {
                          checkHandler(index);
                        }}
                        label={value.name}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </Form>
        </Container> */}
      </Modal.Body>
      <Modal.Footer>
        {/* <Button
          onClick={(e) => {
            addMultipleVariantClicked(e);
          }}
          className="default-button order-popup-bottom-button"
        >
          Add Multiple Variant
        </Button>
        <Button
          onClick={addToBillClicked}
          className="default-button order-popup-bottom-button"
        >
          Add To Bill
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default AddFoodPopup;
