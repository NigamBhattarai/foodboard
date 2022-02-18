import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./ItemCardsGrid.scss";

function itemCardsGrid(itemData) {
  var rows = [];
  itemData.forEach((value, index, array) => {
    rows.push(
      <Col xs={12} sm={6} md={4} lg={3} xxl={2} className="mt-2">
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
            <Button className="item-card-btn">
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
function ItemCardsGrid(props) {
  return (
    <Row className="item-card-row pb-3">{itemCardsGrid(props.itemData)}</Row>
  );
}

export default ItemCardsGrid;
