import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import OrderPopup from "./OrderPopup";
import "./ItemCardsList.scss";

function ItemCardsList(props) {
  const [showModal, setShowModal] = useState(false);
  function itemCardsList(itemData) {
    var rows = [];
    itemData.forEach((value, index, array) => {
      rows.push(
        <Col xs={12} md={6} className="mt-2">
          <Card className="item-card-list">
            <Row>
              <Col xs={3}>
                <img
                  className="rounded-circle img-fluid px-2 py-2"
                  alt=""
                  src={value.image}
                />
              </Col>
              <Col xs={6}>
                <div className="item-card-list-title"> {value.name}</div>
                <div className="item-card-list-desc">
                  {" "}
                  Rs. {value.price} &nbsp; &nbsp; {value.available_stock} Plts
                </div>
              </Col>
              <Col xs={3}>
                <Button
                  className="item-card-list-btn"
                  onClick={(e) => {
                    setShowModal(true);
                  }}
                >
                  {" "}
                  <AddIcon /> <br /> Add Dish
                </Button>
              </Col>
            </Row>
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
        onHide={() => {
          setShowModal(false);
        }}
      />
      {itemCardsList(props.itemData)}
    </Row>
  );
}

export default ItemCardsList;
