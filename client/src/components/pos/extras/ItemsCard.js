import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./ItemsCard.scss";

function ItemsCard(props) {
  const index = props.index;
  const value = props.value;
  return (
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
            onClick={
              typeof(props.setSelectedItem) != undefined &&
              ((e) => {
                props.setSelectedItem(index);
                props.setShowModal(true);
              })
            }
          >
            {" "}
            <FontAwesomeIcon icon={faPlus} /> Add Dish
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ItemsCard;
