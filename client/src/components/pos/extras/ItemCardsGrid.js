import React, { useState, useContext } from "react";
import { Row } from "react-bootstrap";
import OrderPopup from "./OrderPopup";
import "./ItemCardsGrid.scss";
import { POSContext } from "../pos";
import ItemsCard from "./ItemsCard";

function ItemCardsGrid(props) {
  //States
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  const posContext = useContext(POSContext);

  function itemCardsGrid(itemData) {
    var rows = [];
    itemData.forEach((value, index, array) => {
      rows.push(
        <ItemsCard
          index={index}
          value={value}
          type={"pos"}
          setSelectedItem={setSelectedItem}
          setShowModal={setShowModal}
        />
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
