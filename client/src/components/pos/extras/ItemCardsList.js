import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import "./ItemCardsList.scss";

function itemCardsList() {
  var rows = [];
  for (var i = 0; i < 15; i++) {
    rows.push(
      <Col xs={12} md={6} className="mt-2">
        <Card className="item-card-list">
          <Row>
            <Col xs={3}>
              <img
                className="rounded-circle img-fluid px-2 py-2"
                alt=""
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
              />
            </Col>
            <Col xs={6}>
              <div className="item-card-list-title"> Jhol Momo</div>
              <div className="item-card-list-desc"> Rs. 200 &nbsp; &nbsp; 30 Plts</div>
            </Col>
            <Col xs={3}>
              <Button className="item-card-list-btn">
                {" "}
                <AddIcon /> <br /> Add Dish
              </Button>
            </Col>
          </Row>
          {/* <Card.Img
              className="rounded-circle px-5 py-3"
              variant="top"
              src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
            />
            <Card.Body>
              <Card.Title>Jhol Momo</Card.Title>
              <Card.Text className="item-card-desc">
                Rs. 200 &nbsp; &nbsp; 30 Plts
              </Card.Text>
              <Button className="item-card-btn">
                {" "}
                <AddIcon /> Add Dish
              </Button>
            </Card.Body> */}
        </Card>
      </Col>
    );
  }
  return rows;
}
function ItemCardsList() {
  return <Row className="item-card-row pb-3">{itemCardsList()}</Row>;
}

export default ItemCardsList;
