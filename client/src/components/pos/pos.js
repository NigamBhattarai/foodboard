import React, { useEffect, useState, useReducer, createContext } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import ItemCardsGrid from "./extras/ItemCardsGrid";
import ItemCardsList from "./extras/ItemCardsList";
import OrderBill from "./extras/OrderBill";
import TopBar from "./extras/TopBar";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import TableRowsIcon from "@mui/icons-material/TableRows";

import "./pos.scss";
import axios from "axios";
import UseTitle from "../../hooks/useTitle";
function getAbsoluteHeight(el) {
  el = typeof el === "string" ? document.querySelector(el) : el;

  var styles = window.getComputedStyle(el);
  var margin =
    parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);

  return Math.ceil(el.offsetHeight + margin);
}
function adjustPOSPage() {
  if (document.querySelector(".item-card-row") != null)
    document.querySelector(".item-card-row").style.maxHeight =
      window.innerHeight -
      getAbsoluteHeight(document.querySelector(".dashboard-top-bar")) -
      getAbsoluteHeight(document.querySelector(".header-category-menu")) -
      getAbsoluteHeight(document.querySelector(".food-search")) +
      "px";
}

const initialState = {
  tokenNumber: 0,
  bill: {
    prices: {
      subTotal: 0,
      tax: 0,
      discountPercentage: 0,
      discountValue: 0,
      total: 0,
    },
    billItems: [],
  },
  originalItemData: [],
  itemDataForCategory: [],
  itemData: [],
};

function posReducer(state, action) {
  switch (action.type) {
    //Order Number
    case "setTokenNumber":
      return { ...state, tokenNumber: action.value };

    //Bill State
    case "addbillItems":
      var temp_billItems = [...state.bill.billItems];
      for (var i = 0; i < action.value.length; i++) {
        temp_billItems.push(action.value[i]);
      }
      return {
        ...state,
        bill: {
          ...state.bill,
          billItems: [...temp_billItems],
        },
      };
    case "updateBillItems":
      return { ...state, bill: { ...state.bill, billItems: action.value } };
    case "updateBillPrices":
      var subTotal = 0,
        tax = 0,
        discountPercentage = 0,
        discountValue = 0,
        total = 0;
      state.bill.billItems.forEach((value, index) => {
        subTotal += value.variant.price * value.count;
        typeof value.extras !== "undefined" &&
          value.extras !== false &&
          value.extras.forEach((extrasValue, subindex) => {
            subTotal += extrasValue.price;
          });
      });
      discountValue = (discountPercentage / 100) * subTotal;
      total = subTotal - discountValue;
      return {
        ...state,
        bill: {
          ...state.bill,
          prices: {
            ...state.bill.prices,
            discountPercentage: discountPercentage,
            total: total,
            discountValue: discountValue,
            subTotal: subTotal,
          },
        },
      };
    case "clearBill":
      return {
        ...state,
        bill: initialState.bill,
        tokenNumber: initialState.tokenNumber,
      };

    //Item Data State
    case "addItemData":
      return { ...state, itemData: [...state.itemData, action.value] };
    case "updateItemData":
      return { ...state, itemData: action.value };
    case "setOriginalItemData":
      return { ...state, originalItemData: action.value };
    case "setInitialItemData":
      return { ...state, itemData: state.originalItemData };
    case "setInitialItemDataForCategory":
      return { ...state, itemDataForCategory: state.originalItemData };
    case "setItemDataForCategory":
      return { ...state, itemDataForCategory: action.value };

    // //Server Interaction
    // case "sendOrder":

    // return state;

    default:
      return state;
  }
}

export const POSContext = createContext();

export default function POS() {
  UseTitle("Point Of Sale");

  useEffect(() => {
    adjustPOSPage();
  });
  useEffect(() => {
    function handleResize() {
      adjustPOSPage();
    }
    window.addEventListener("resize", handleResize);
  });

  //States
  const [isGridSelected, setIsGridSelected] = useState(true);
  // const [itemDataState, setItemDataState] = useState(itemData);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isAllSelected, setisAllSelected] = useState(true);
  const [searchKey, setSearchKey] = useState("");
  const [nullState] = useState(null);

  const [state, dispatch] = useReducer(posReducer, initialState);

  function searchHandler(value) {
    setSearchKey(value);
  }

  async function sendOrder(extraData) {
    if (state.bill.billItems.length < 1) {
      return { err: true, text: "Empty bill not accepted!" };
    } else if (extraData.customerName.trim() === "") {
      return { err: true, text: "Customer Name is empty!" };
    } else {
      try {
        const orderResponse = await axios.post(
          process.env.REACT_APP_API_URL + "api/orders/add",
          {
            bill: state.bill,
            customerName: extraData.customerName,
            tokenNumber: state.tokenNumber,
            itemPrices: extraData.itemPrices,
          }
        );
        return {
          err: false,
          text: "Order placed with token #" + state.tokenNumber,
        };
      } catch (err) {
        return {
          err: true,
          text: "Error while entering data, refresh the page and try again.",
        };
      }
    }
  }

  //eslint-disable-next-line
  useEffect(async () => {
    document
      .querySelectorAll(".food-category-tab-item")[0]
      .classList.add("active");
    const itemData = await axios.get(
      process.env.REACT_APP_API_URL + "api/food/active"
    );
    dispatch({ type: "setOriginalItemData", value: itemData.data });
    dispatch({ type: "setInitialItemData" });
    const categories = await axios.get(
      process.env.REACT_APP_API_URL + "api/category/active"
    );
    setCategories(categories.data);
    const newToken = await axios.get(
      process.env.REACT_APP_API_URL + "api/orders/new-token"
    );
    dispatch({ type: "setTokenNumber", value: newToken.data });
  }, [nullState]);

  useEffect(() => {
    if (searchKey.trim() !== "") {
      const newItemData = state.itemDataForCategory.filter((item) => {
        return Object.values(item.name)
          .join("")
          .toLowerCase()
          .includes(searchKey.toLowerCase());
      });
      dispatch({ type: "updateItemData", value: newItemData });
    } else {
      setItemsForCategory(selectedCategory, isAllSelected, false);
    }
    //eslint-disable-next-line
  }, [searchKey]);

  function setItemsForCategory(category, isAll, isCategoryChange) {
    const all = isCategoryChange ? isAll : isAllSelected;
    if (all) {
      dispatch({ type: "setInitialItemDataForCategory" });
      dispatch({ type: "setInitialItemData" });
    } else {
      var newArr = state.originalItemData.filter((value) => {
        return category === value.category._id && value;
      });
      dispatch({ type: "setItemDataForCategory", value: newArr });
      dispatch({ type: "updateItemData", value: newArr });
    }
  }

  function handleCategoryChange(e, category, isAll) {
    setSelectedCategory(category);
    setItemsForCategory(category, isAll, true);
    var elems = document.querySelectorAll(".food-category-tab-item");
    elems.forEach(function (el) {
      el.classList.remove("active");
    });

    e.target.classList.add("active");
  }

  return (
    <POSContext.Provider value={{ state, dispatch, sendOrder }}>
      <Container fluid className="main-container">
        {/* <Row> */}
        {/* <Col xs={2} className="p-0 m-0">
              <SideBar/>
            </Col> */}
        <TopBar />
        <Row className="mt-1">
          <Col xs={12} lg={8}>
            <Container>
              <div className="header-category-menu my-4 py-2">
                <Button
                  variant="link"
                  className="food-category-tab-item mr-1"
                  onClick={(e) => {
                    setisAllSelected(true);
                    handleCategoryChange(e, 0, true);
                  }}
                >
                  All <span className="active-underline"></span>{" "}
                </Button>
                {categories
                  .filter((category) => category.foodCount > 0)
                  .map((category, index) => (
                    <Button
                      variant="link"
                      className={"food-category-tab-item mr-1"}
                      key={index}
                      onClick={(e) => {
                        setisAllSelected(false);
                        handleCategoryChange(e, category._id, false);
                      }}
                    >
                      {category.name} <span className="active-underline"></span>{" "}
                    </Button>
                  ))}
              </div>
              <Row>
                <Col xs={12} lg={6}>
                  <Form.Control
                    type="text"
                    placeholder="Search For Food Items"
                    className="food-search mb-3"
                    value={searchKey}
                    onChange={(e) => searchHandler(e.target.value)}
                  />
                </Col>
                <Col
                  xs={2}
                  lg={2}
                  className="ml-auto grid-icon-col"
                  style={{ textAlign: "right", marginTop: "20px" }}
                >
                  {isGridSelected ? (
                    <ViewModuleIcon
                      className={"items-grid-toggle active"}
                      onClick={(e) => {
                        setIsGridSelected(false);
                      }}
                    />
                  ) : (
                    <TableRowsIcon
                      className={"items-grid-toggle active"}
                      onClick={(e) => {
                        setIsGridSelected(true);
                      }}
                    />
                  )}
                </Col>
              </Row>
              {state.itemData.length > 0 ? (
                isGridSelected ? (
                  <ItemCardsGrid />
                ) : (
                  <ItemCardsList />
                )
              ) : (
                <Row>
                  <Col style={{ textAlign: "center" }}>
                    No result found for "{searchKey}"
                  </Col>
                </Row>
              )}
            </Container>
          </Col>
          <Col xs={12} lg={4}>
            <OrderBill />
          </Col>
        </Row>
        {/* </Row> */}
      </Container>
    </POSContext.Provider>
  );
}
