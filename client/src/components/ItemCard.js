import React from 'react'
import { Card, Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "./ItemCard.scss"
function ItemCard() {
  return (
    <Col xs={12} sm={6} md={4} lg={3} xxl={2} className="mt-2">
      <Card className="item-card">
      <Card.Img
        className="rounded-circle px-5 py-3"
        variant="top"
        src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
      />
      <Card.Body>
        <Card.Title>Jhol Momo</Card.Title>
        <Card.Text className="item-card-desc">Rs. 200 &nbsp; &nbsp; 30 Plts</Card.Text>
        <Button className="item-card-btn"> <FontAwesomeIcon icon={faPlus} /> Add Dish</Button>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default ItemCard