import React, { useState, createContext, useReducer, useEffect } from "react";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import "./FoodManagement.scss";
import ItemsCard from "../pos/extras/ItemsCard";
import AddFoodPopup from "./AddFoodPopup";
import axios from "axios";
import UseTitle from "../../hooks/useTitle";

const initialState = {
  itemData: [],
  originalItemData: [],
};

function posReducer(state, action) {
  switch (action.type) {
    //Item Data State
    case "addItemData":
      return { ...state, itemData: [...state.itemData, action.value] };
    case "updateItemData":
      return { ...state, itemData: action.value };
    case "setOriginalItemData":
      return { ...state, originalItemData: action.value };
    case "setInitialItemData":
      return { ...state, itemData: state.originalItemData };

    default:
      return state;
  }
}

export const FoodManagementContext = createContext();

function FoodManagement(props) {
  UseTitle("Food Management");
  const [state, dispatch] = useReducer(posReducer, initialState);
  const [categories, setCategories] = useState([]);
  const [nullState] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  function itemCardsGrid(itemData) {
    var rows = [];
    itemData.forEach((value, index, array) => {
      rows.push(
        <ItemsCard
          key={index + "itemsCard"}
          index={value._id}
          value={value}
          setSelectedItem={setSelectedItem}
          setShowModal={setShowModal}
          type="food"
        />
      );
    });
    return rows;
  }

  //eslint-disable-next-line
  useEffect(async () => {
    document
      .querySelectorAll(".food-category-tab-item")[0]
      .classList.add("active");
    const result = await axios.get("http://localhost:5000/api/food");
    dispatch({
      type: "setOriginalItemData",
      value: result.data,
    });
    dispatch({ type: "setInitialItemData" });
    const categories = await axios.get("http://localhost:5000/api/category");
    setCategories(categories.data);
  }, [nullState]);

  async function handleCategoryChange(e, category, isAll) {
    if (isAll) {
      dispatch({ type: "setInitialItemData" });
    } else {
      var newArr = state.originalItemData.filter((value) => {
        return category === value.category._id && value;
      });
      dispatch({ type: "updateItemData", value: newArr });
    }
    var elems = document.querySelectorAll(".food-category-tab-item");
    elems.forEach(function (el) {
      el.classList.remove("active");
    });

    e.target.classList.add("active");
  }

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
            <Button
              variant="link"
              className="food-category-tab-item mr-1"
              onClick={(e) => handleCategoryChange(e, 0, true)}
            >
              All <span className="active-underline"></span>{" "}
            </Button>
            {categories.map((category, index) => (
              <Button
                variant="link"
                className={"food-category-tab-item mr-1"}
                key={index}
                onClick={(e) => handleCategoryChange(e, category._id, false)}
              >
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
