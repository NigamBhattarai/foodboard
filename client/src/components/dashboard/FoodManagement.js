import React, { useState, createContext, useReducer, useEffect } from "react";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import categoriesdata from "./categoriesdata";
import "./FoodManagement.scss";
import ItemsCard from "../pos/extras/ItemsCard";
import AddFoodPopup from "./AddFoodPopup";

const initialState = {
  itemData: [],
};

function posReducer(state, action) {
  switch (action.type) {
    //Item Data State
    case "addItemData":
      return { ...state, itemData: [...state.itemData, action.value] };
    case "updateItemData":
      return { ...state, itemData: action.value };
    case "setInitialItemData":
      const itemData = [
        {
          id: 1,
          image:
            "https://www.rockrecipes.com/wp-content/uploads/2017/12/Tandoori-Grilled-Chicken-close-up-photo-of-finished-dish-on-a-white-platter.jpg",
          name: "Chicken Tandoori",
          price: 400,
          available_stock: 30,
        },
      ];
      for (var i = 0; i < 15; i++) {
        itemData.push({
          id: i + 2,
          image:
            "https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg",
          name: "Jhol Momo",
          price: 200,
          available_stock: 30,
        });
      }
      return { ...state, itemData: itemData };

    default:
      return state;
  }
}

export const FoodManagementContext = createContext();

function FoodManagement(props) {
  const [state, dispatch] = useReducer(posReducer, initialState);
  const [nullState] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  function itemCardsGrid(itemData) {
    var rows = [];
    itemData.forEach((value, index, array) => {
      rows.push(
        <ItemsCard
          key={index + "itemsCard"}
          index={value.id}
          value={value}
          setSelectedItem={setSelectedItem}
          setShowModal={setShowModal}
          type="food"
        />
      );
    });
    return rows;
  }
  useEffect(() => {
    dispatch({ type: "setInitialItemData" });
  }, [nullState]);

  return (
    <FoodManagementContext.Provider value={{ state, dispatch }}>
      <AddFoodPopup
        show={showModal}
        itemID={selectedItem}
        onHide={() => {
          setShowModal(false);
        }}
      />
      <Container fluid className="mx-2">
        <Row className="title align-items-center">
          <Col lg={3}>
            <h2>Food Management</h2>
            <small className="text-muted">Tuesday 2,Feb,2021</small>
          </Col>
          <Col></Col>
          <Col lg={2}>
            <Button variant="light" className="button1">
              Manage AddOns
            </Button>
          </Col>
        </Row>
        <hr />
        <Row className="mx-0">
          <div className="header-category-menu  py-2">
            <Button variant="link" className="active mr-1">
              All <span className="active-underline"></span>{" "}
            </Button>
            {categoriesdata.map((category, index) => (
              <Button variant="link" className="mr-1" key={index}>
                {category.name} <span className="active-underline"></span>{" "}
              </Button>
            ))}
          </div>
        </Row>
        <Row className="mt-4">
          <Col lg={3}>
            <Card
              onClick={(e) => {
                setSelectedItem(-1);
                setShowModal(true);
              }}
              className="item-card add-new-item-card d-flex align-items-center justify-content-center"
              style={{
                height: "100%",
                border: "dashed 3px #EA7C69",
                color: "#EA7C69",
              }}
            >
              Add New Food
              <h1>+</h1>
            </Card>
          </Col>
          {itemCardsGrid(state.itemData)}
        </Row>
      </Container>
    </FoodManagementContext.Provider>
  );
}

export default FoodManagement;
