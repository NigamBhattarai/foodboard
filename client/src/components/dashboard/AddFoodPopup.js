import React, { useContext, useEffect, useState } from "react";
import { Col, Modal, Row, Button, Form, Container } from "react-bootstrap";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./AddFoodPopup.scss";
import { FoodManagementContext } from "./FoodManagement";

function AddFoodPopup(props) {
  const foodManagementContext = useContext(FoodManagementContext);

  //States
  const [addOns, setAddOns] = useState([]);

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
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="order-popup-modal"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Food Item
        </Modal.Title>
        <CancelIcon onClick={props.onHide} className="order-popup-close-btn" />
      </Modal.Header>
      <Modal.Body>
        
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}

export default AddFoodPopup;
