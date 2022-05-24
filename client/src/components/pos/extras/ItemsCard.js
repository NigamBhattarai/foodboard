import React from "react";
import { Card, Button, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditIcon from "@mui/icons-material/Edit";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./ItemsCard.scss";

function ItemsCard(props) {
  const index = props.index;
  const value = props.value;
  const type = props.type;
  return (
    <Col key={index} xs={12} sm={6} md={4} lg={4} xl={3} className="mt-2">
      <Card className="align-items-center item-card" style={{ height: 300 }}>
        <Card.Img
          className="rounded-circle px-5 py-3"
          variant="top"
          src={value.image}
        />
        <Card.Body>
          <Card.Title>{value.name}</Card.Title>
          <Card.Text className="item-card-desc"></Card.Text>
          <Button
            className="default-button item-card-btn"
            onClick={
              typeof props.setSelectedItem != "undefined" &&
              ((e) => {
                props.setSelectedItem(index);
                props.setShowModal(true);
              })
            }
          >
            {" "}
            {type === "pos" ? (
              <>
                <FontAwesomeIcon icon={faPlus} /> Add Dish
              </>
            ) : (
              <>
                <EditIcon /> Edit Dish
              </>
            )}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ItemsCard;
