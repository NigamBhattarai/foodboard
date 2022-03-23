import React, { useState } from "react";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import categoriesdata from "./categoriesdata";
import "./FoodManagement.scss";
function FoodManagement(props) {
  return (
    <Container fluid className="mx-2">
      <Row className="title align-items-center">
        <Col lg={3}>
          <h2>Full Report</h2>
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
          {categoriesdata.map((category) => (
            <Button variant="link" className="mr-1">
              {category.name} <span className="active-underline"></span>{" "}
            </Button>
          ))}
        </div>
        </Row>
        <Row className="mt-4">
        <Col lg={3}>
            <Card className="item-card d-flex align-items-center justify-content-center" style={{height:"100%",border:"dashed 3px #EA7C69",color:"#EA7C69"}}>
            Add New Food
             <h1>+</h1>
            </Card>
          </Col><Col lg={3}>
            <Card className="item-card">
              <Card.Img
                className="rounded-circle px-5 py-3"
                variant="top"
                src="https://www.rockrecipes.com/wp-content/uploads/2017/12/Tandoori-Grilled-Chicken-close-up-photo-of-finished-dish-on-a-white-platter.jpg"
              />
              <Card.Body>
                <Card.Title>Chicken Tandoori</Card.Title>
                <Card.Text className="item-card-desc">Rs. 500 &nbsp; &nbsp;5 varient</Card.Text>
                <Button className="default-button item-card-btn">
                  {" "}
                  <FontAwesomeIcon icon={faPlus} /> Add Dish
                </Button>
              </Card.Body>
            </Card>
          </Col><Col lg={3}>
            <Card className="item-card">
              <Card.Img
                className="rounded-circle px-5 py-3"
                variant="top"
                src="https://www.rockrecipes.com/wp-content/uploads/2017/12/Tandoori-Grilled-Chicken-close-up-photo-of-finished-dish-on-a-white-platter.jpg"
              />
              <Card.Body>
                <Card.Title>Chicken Tandoori</Card.Title>
                <Card.Text className="item-card-desc">Rs. 500 &nbsp; &nbsp;5 varient</Card.Text>
                <Button className="default-button item-card-btn">
                  {" "}
                  <FontAwesomeIcon icon={faPlus} /> Add Dish
                </Button>
              </Card.Body>
            </Card>
          </Col><Col lg={3}>
            <Card className="item-card">
              <Card.Img
                className="rounded-circle px-5 py-3"
                variant="top"
                src="https://www.rockrecipes.com/wp-content/uploads/2017/12/Tandoori-Grilled-Chicken-close-up-photo-of-finished-dish-on-a-white-platter.jpg"
              />
              <Card.Body>
                <Card.Title>Chicken Tandoori</Card.Title>
                <Card.Text className="item-card-desc">Rs. 500 &nbsp; &nbsp;5 varient</Card.Text>
                <Button className="default-button item-card-btn">
                  {" "}
                  <FontAwesomeIcon icon={faPlus} /> Add Dish
                </Button>
              </Card.Body>
            </Card>
          </Col><Col lg={3}>
            <Card className="item-card">
              <Card.Img
                className="rounded-circle px-5 py-3"
                variant="top"
                src="https://www.rockrecipes.com/wp-content/uploads/2017/12/Tandoori-Grilled-Chicken-close-up-photo-of-finished-dish-on-a-white-platter.jpg"
              />
              <Card.Body>
                <Card.Title>Chicken Tandoori</Card.Title>
                <Card.Text className="item-card-desc">Rs. 500 &nbsp; &nbsp;5 varient</Card.Text>
                <Button className="default-button item-card-btn">
                  {" "}
                  <FontAwesomeIcon icon={faPlus} /> Add Dish
                </Button>
              </Card.Body>
            </Card>
          </Col><Col lg={3}>
            <Card className="item-card">
              <Card.Img
                className="rounded-circle px-5 py-3"
                variant="top"
                src="https://www.rockrecipes.com/wp-content/uploads/2017/12/Tandoori-Grilled-Chicken-close-up-photo-of-finished-dish-on-a-white-platter.jpg"
              />
              <Card.Body>
                <Card.Title>Chicken Tandoori</Card.Title>
                <Card.Text className="item-card-desc">Rs. 500 &nbsp; &nbsp;5 varient</Card.Text>
                <Button className="default-button item-card-btn">
                  {" "}
                  <FontAwesomeIcon icon={faPlus} /> Add Dish
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>
  );
}

export default FoodManagement;
