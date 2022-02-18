import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import ItemCardsGrid from "./extras/ItemCardsGrid";
import ItemCardsList from "./extras/ItemCardsList";
import OrderBill from "./extras/OrderBill";
import TopBar from "./extras/TopBar";
import ViewModuleIcon from "@mui/icons-material/ViewModule";

import "./pos.scss";
function getAbsoluteHeight(el) {
  el = typeof el === "string" ? document.querySelector(el) : el;

  var styles = window.getComputedStyle(el);
  var margin =
    parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);

  return Math.ceil(el.offsetHeight + margin);
}
function adjustPOSPage() {
  document.querySelector(".item-card-row").style.maxHeight =
    window.innerHeight -
    getAbsoluteHeight(document.querySelector(".dashboard-top-bar")) -
    getAbsoluteHeight(document.querySelector(".header-category-menu")) -
    getAbsoluteHeight(document.querySelector(".food-search")) +
    "px";
}
export default function POS() {
  const [isGridSelected, setIsGridSelected] = useState(true);
  useEffect(() => {
    adjustPOSPage();
  });
  React.useEffect(() => {
    function handleResize() {
      adjustPOSPage();
    }
    window.addEventListener("resize", handleResize);
  });

  var itemData = [
    {
      id: 0,
      image:
        "https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg",
      name: "Jhol Momo",
      price: 200,
      available_stock: 30,
    },
  ];
  for (var i = 0; i < 15; i++)
    itemData.push({
      id: i + 1,
      image:
        "https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg",
      name: "Jhol Momo",
      price: 200,
      available_stock: 30,
    });
  var billItems = [
    {
      id: 0,
      image:
        "https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg",
      count: 1,
      name: "Chicken Tandoori",
      price: 400,
      extras: [
        {
          id: 0,
          name: "extra Sauce",
          price: 25,
        },
      ],
    },
    {
      id: 1,
      image:
        "https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg",
      count: 1,
      name: "Jhol Momo",
      price: 400,
      extras: [
        {
          id: 0,
          name: "extra jhol",
          price: 10,
        },
        {
          id: 0,
          name: "extra jhol",
          price: 10,
        },
      ],
    },
  ];

  return (
    <div>
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
                  />
                </Col>
                <Col
                  xs={2}
                  lg={2}
                  className="ml-auto grid-icon-col"
                  style={{ textAlign: "right", marginTop: "20px" }}
                >
                  <ViewModuleIcon
                    className={
                      "items-grid-toggle " + (isGridSelected ? "active" : "")
                    }
                    onClick={(e) => {
                      setIsGridSelected(isGridSelected ? false : true);
                    }}
                  />
                </Col>
              </Row>
              {isGridSelected ? (
                <ItemCardsGrid itemData={itemData} />
              ) : (
                <ItemCardsList itemData={itemData} />
              )}
            </Container>
          </Col>
          <Col xs={12} lg={4}>
            <OrderBill billItems={billItems} />
          </Col>
        </Row>
        {/* </Row> */}
      </Container>
    </div>
  );
}
