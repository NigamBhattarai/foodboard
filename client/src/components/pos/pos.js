import React, { useEffect, useState, useReducer, createContext } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import ItemCardsGrid from "./extras/ItemCardsGrid";
import ItemCardsList from "./extras/ItemCardsList";
import OrderBill from "./extras/OrderBill";
import TopBar from "./extras/TopBar";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import TableRowsIcon from "@mui/icons-material/TableRows";

import "./pos.scss";
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
  itemData: [],
};

function posReducer(state, action) {
  switch (action.type) {
    //Bill State
    case "addbillItems":
      return {
        ...state,
        bill: {
          ...state.bill,
          billItems: [...state.bill.billItems, action.value],
        },
      };
    case "updateBillItems":
      return { ...state, bill: { ...state.bill, billItems: action.value } };
    case "updateBillPrices":
      var subTotal = 0,
        tax = 0,
        discountPercentage = 10,
        discountValue = 0,
        total = 0;
      state.bill.billItems.forEach((value, index) => {
        subTotal += value.price * value.count;
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

export const POSContext = createContext();

export default function POS() {
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
  const [searchKey, setSearchKey] = useState("");
  const [nullState] = useState(null);

  const [state, dispatch] = useReducer(posReducer, initialState);

  function searchHandler(value) {
    setSearchKey(value);
  }

  useEffect(() => {
    dispatch({ type: "setInitialItemData" });
  }, [nullState]);

  useEffect(() => {
    if (searchKey.trim() !== "") {
      const newItemData = state.itemData.filter((item) => {
        return Object.values(item.name)
          .join("")
          .toLowerCase()
          .includes(searchKey.toLowerCase());
      });
      dispatch({ type: "updateItemData", value: newItemData });
    } else dispatch({ type: "setInitialItemData" });
    //eslint-disable-next-line
  }, [searchKey]);

  return (
    <POSContext.Provider value={{ state, dispatch }}>
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
                <Button variant="link" className="mr-1">
                  Bread <span className="active-underline"></span>{" "}
                </Button>
                <Button variant="link" className="active mr-1">
                  Bread <span className="active-underline"></span>{" "}
                </Button>
                <Button variant="link" className="mr-1">
                  Bread <span className="active-underline"></span>{" "}
                </Button>
                <Button variant="link" className="mr-1">
                  Bread <span className="active-underline"></span>{" "}
                </Button>
                <Button variant="link" className="mr-1">
                  Bread <span className="active-underline"></span>{" "}
                </Button>
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
