import React, { useState, useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import OrderPopup from "./OrderPopup";
import "./ItemCardsGrid.scss";
import { POSContext } from "../pos";

function ItemCardsGrid(props) {
  //States
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  const posContext = useContext(POSContext);

  function itemCardsGrid(itemData) {
    var rows = [];
    itemData.forEach((value, index, array) => {
      rows.push(
        <Col key={index} xs={12} sm={6} md={4} lg={4} xl={3} className="mt-2">
          <Card className="item-card">
            <Card.Img
              className="rounded-circle px-5 py-3"
              variant="top"
              src={value.image}
            />
            <Card.Body>
              <Card.Title>{value.name}</Card.Title>
              <Card.Text className="item-card-desc">
                Rs. {value.price} &nbsp; &nbsp; {value.available_stock} Plts
              </Card.Text>
              <Button
                className="default-button item-card-btn"
                onClick={(e) => {
                  setSelectedItem(index)
                  setShowModal(true);
                }}
              >
                {" "}
                <FontAwesomeIcon icon={faPlus} /> Add Dish
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return rows;
  }
  return (
    <Row className="item-card-row pb-3">
      <OrderPopup
        show={showModal}
        itemindex={selectedItem}
        onHide={() => {
          setShowModal(false);
        }}
      />
      {itemCardsGrid(posContext.state.itemData)}
    </Row>
  );
}

export default ItemCardsGrid;
