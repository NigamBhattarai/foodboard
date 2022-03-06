import React from "react";
import { Col, Button, Row, Container } from "react-bootstrap";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

import "../dashboard/order.scss";
export default function Order() {
  return (
    <Container className="order-body">
      <Row>
        <Col xs={10} className="order-header">
          Order <Row className="date-time"> Tuesday 2 Feb, 2021 </Row>{" "}
        </Col>{" "}
        <Col xs={2} className="md-auto">
          <Button className="filter-order">
            <FormatListNumberedIcon className="filter-icon" />
            Filter Order{" "}
          </Button>{" "}
        </Col>{" "}
      </Row>{" "}
      <hr />
      <Container>
        <Row className="traffic-row">
          <Button className="traffic-order">
            <DoneIcon className="filter-icon" />
            #400
          </Button>
          <Button className="traffic-order-orange">
            <DoneIcon className="filter-icon" />
            #400
          </Button>
          <Button className="traffic-order">
            <DoneIcon className="filter-icon" />
            #400
          </Button>
          <Button className="traffic-order-purple">
            <div className="order-button-color"> </div>
            #400
          </Button>
          <Button className="traffic-order-purple">
            <div className="order-button-color"> </div>
            #400
          </Button>
          <Button className="traffic-order">
            <DoneIcon className="filter-icon" />
            #400
          </Button>
          <Button className="traffic-order">
            <DoneIcon className="filter-icon" />
            #400
          </Button>
          <Button className="traffic-order">
            <DoneIcon className="filter-icon" />
            #400
          </Button>
          <Button className="traffic-order-orange">
            <DoneIcon className="filter-icon" />
            #400
          </Button>
        </Row>
      </Container>
      <Row className="overflow-scroll">
        <Row className="Col-order-one" >
          <Container>
            <Row>
              <Col xs={8} className="order-list">
                Order #2300
                <Row className="order-date-time">
                  {" "}
                  23 Feb 2022, 8: 26 PM{" "}
                </Row>{" "}
              </Col>{" "}
              <Col xs={4} className="edit-order-button">
                <Button className="edit-order">
                  <EditIcon className="filter-icon" />
                  Edit{" "}
                </Button>{" "}
              </Col>
            </Row>{" "}
          </Container>

          <Row className="mid-div-list">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicks"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-list">
              Jhol momo{" "}
              <Row className="extrajhol-achar"> +extra jhol + extra achar </Row>{" "}
              <Row className="qty"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-price">
              {" "}
              Rs 600{" "}
            </Col>{" "}
          </Row>
          <hr className="line-style"/>
          <Row className="mid-div-list">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicks"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-list">
              Jhol momo{" "}
              <Row className="extrajhol-achar"> +extra jhol + extra achar </Row>{" "}
              <Row className="qty"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-price">
              {" "}
              Rs 600{" "}
            </Col>{" "}
          </Row>
          <hr className="line-style"/>

          <Row className="mid-div-list">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicks"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-list">
              Jhol momo{" "}
              <Row className="extrajhol-achar"> +extra jhol + extra achar </Row>{" "}
              <Row className="qty"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-price">
              {" "}
              Rs 600{" "}
            </Col>{" "}
          </Row>
      <Row className="total-item-list">
          <Col xs={9}>
          <Row className="x3-items">x3 items</Row>
          <Row className="item-total-price">Rs. 1800</Row>

          </Col>
          <Col xs={3} className="pending-style">         
           <Col className="prepared-detail">Pending</Col>
          </Col>
      </Row>


        </Row>
        <Row className="Col-order-one">
          <Container>
            <Row>
              <Col xs={8} className="order-list">
                Order #2300
                <Row className="order-date-time">
                  {" "}
                  23 Feb 2022, 8: 26 PM{" "}
                </Row>{" "}
              </Col>{" "}
              <Col xs={4} className="edit-order-button">
                <Button className="edit-order">
                  <EditIcon className="filter-icon" />
                  Edit{" "}
                </Button>{" "}
              </Col>
            </Row>{" "}
          </Container>

          <Row className="mid-div-list">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicks"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-list">
              Jhol momo{" "}
              <Row className="extrajhol-achar"> +extra jhol + extra achar </Row>{" "}
              <Row className="qty"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-price">
              {" "}
              Rs 600{" "}
            </Col>{" "}
          </Row>
          <hr className="line-style"/>
          <Row className="mid-div-list">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicks"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-list">
              Jhol momo{" "}
              <Row className="extrajhol-achar"> +extra jhol + extra achar </Row>{" "}
              <Row className="qty"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-price">
              {" "}
              Rs 600{" "}
            </Col>{" "}
          </Row>
          <hr className="line-style"/>

          <Row className="mid-div-list">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicks"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-list">
              Jhol momo{" "}
              <Row className="extrajhol-achar"> +extra jhol + extra achar </Row>{" "}
              <Row className="qty"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-price">
              {" "}
              Rs 600{" "}
            </Col>{" "}
          </Row>
      <Row className="total-item-list">
          <Col xs={9}>
          <Row className="x3-items">x3 items</Row>
          <Row className="item-total-price">Rs. 1800</Row>

          </Col>
          <Col xs={3} className="pending-style-preparing">         
           <Col className="prepared-detail-preparing">Preparing</Col>
          </Col>
      </Row>


        </Row>

        <Row className="Col-order-one">
          <Container>
            <Row>
              <Col xs={8} className="order-list">
                Order #2300
                <Row className="order-date-time">
                  {" "}
                  23 Feb 2022, 8: 26 PM{" "}
                </Row>{" "}
              </Col>{" "}
              <Col xs={4} className="edit-order-button">
                <Button className="edit-order">
                  <EditIcon className="filter-icon" />
                  Edit{" "}
                </Button>{" "}
              </Col>
            </Row>{" "}
          </Container>

          <Row className="mid-div-list">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicks"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-list">
              Jhol momo{" "}
              <Row className="extrajhol-achar"> +extra jhol + extra achar </Row>{" "}
              <Row className="qty"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-price">
              {" "}
              Rs 600{" "}
            </Col>{" "}
          </Row>
          <hr className="line-style"/>
          <Row className="mid-div-list">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicks"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-list">
              Jhol momo{" "}
              <Row className="extrajhol-achar"> +extra jhol + extra achar </Row>{" "}
              <Row className="qty"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-price">
              {" "}
              Rs 600{" "}
            </Col>{" "}
          </Row>
          <hr className="line-style"/>

          <Row className="mid-div-list">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicks"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-list">
              Jhol momo{" "}
              <Row className="extrajhol-achar"> +extra jhol + extra achar </Row>{" "}
              <Row className="qty"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-price">
              {" "}
              Rs 600{" "}
            </Col>{" "}
          </Row>
      <Row className="total-item-list">
          <Col xs={9}>
          <Row className="x3-items">x3 items</Row>
          <Row className="item-total-price">Rs. 1800</Row>

          </Col>
          <Col xs={3} className="pending-style-complete">         
           <Col className="prepared-detail-complete">Complete</Col>
          </Col>
      </Row>


        </Row>




        <Row className="Col-order-two">
          <Container>
            <Row>
              <Col xs={8} className="order-list">
                Order #2300
                <Row className="order-date-time">
                  {" "}
                  23 Feb 2022, 8: 26 PM{" "}
                </Row>{" "}
              </Col>{" "}
              <Col xs={4} className="edit-order-button">
                <Button className="edit-order">
                  <EditIcon className="filter-icon" />
                  Edit{" "}
                </Button>{" "}
              </Col>
            </Row>{" "}
          </Container>

          <Row className="mid-div-list">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicks"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-list">
              Jhol momo{" "}
              <Row className="extrajhol-achar"> +extra jhol + extra achar </Row>{" "}
              <Row className="qty"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-price">
              {" "}
              Rs 600{" "}
            </Col>{" "}
          </Row>
          <hr className="line-style"/>
          <Row className="mid-div-list">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicks"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-list">
              Jhol momo{" "}
              <Row className="extrajhol-achar"> +extra jhol + extra achar </Row>{" "}
              <Row className="qty"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-price">
              {" "}
              Rs 600{" "}
            </Col>{" "}
          </Row>
          <hr className="line-style"/>

          <Row className="mid-div-list">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicks"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-list">
              Jhol momo{" "}
              <Row className="extrajhol-achar"> +extra jhol + extra achar </Row>{" "}
              <Row className="qty"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-price">
              {" "}
              Rs 600{" "}
            </Col>{" "}
          </Row>
      <Row className="total-item-list">
          <Col xs={9}>
          <Row className="x3-items">x3 items</Row>
          <Row className="item-total-price">Rs. 1800</Row>

          </Col>
          <Col xs={3} className="pending-style-complete">         
           <Col className="prepared-detail-complete">Complete</Col>
          </Col>
      </Row>


        </Row>



        <Row className="Col-order-two">
          <Container>
            <Row>
              <Col xs={8} className="order-list">
                Order #2300
                <Row className="order-date-time">
                  {" "}
                  23 Feb 2022, 8: 26 PM{" "}
                </Row>{" "}
              </Col>{" "}
              <Col xs={4} className="edit-order-button">
                <Button className="edit-order">
                  <EditIcon className="filter-icon" />
                  Edit{" "}
                </Button>{" "}
              </Col>
            </Row>{" "}
          </Container>

          <Row className="mid-div-list">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicks"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-list">
              Jhol momo{" "}
              <Row className="extrajhol-achar"> +extra jhol + extra achar </Row>{" "}
              <Row className="qty"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-price">
              {" "}
              Rs 600{" "}
            </Col>{" "}
          </Row>
          <hr className="line-style"/>
          <Row className="mid-div-list">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicks"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-list">
              Jhol momo{" "}
              <Row className="extrajhol-achar"> +extra jhol + extra achar </Row>{" "}
              <Row className="qty"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-price">
              {" "}
              Rs 600{" "}
            </Col>{" "}
          </Row>
          <hr className="line-style"/>

          <Row className="mid-div-list">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicks"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-list">
              Jhol momo{" "}
              <Row className="extrajhol-achar"> +extra jhol + extra achar </Row>{" "}
              <Row className="qty"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-price">
              {" "}
              Rs 600{" "}
            </Col>{" "}
          </Row>
      <Row className="total-item-list">
          <Col xs={9}>
          <Row className="x3-items">x3 items</Row>
          <Row className="item-total-price">Rs. 1800</Row>

          </Col>
          <Col xs={3} className="pending-style-complete">         
           <Col className="prepared-detail-complete">Complete</Col>
          </Col>
      </Row>


        </Row>


        <Row className="Col-order-two">
          <Container>
            <Row>
              <Col xs={8} className="order-list">
                Order #2300
                <Row className="order-date-time">
                  {" "}
                  23 Feb 2022, 8: 26 PM{" "}
                </Row>{" "}
              </Col>{" "}
              <Col xs={4} className="edit-order-button">
                <Button className="edit-order">
                  <EditIcon className="filter-icon" />
                  Edit{" "}
                </Button>{" "}
              </Col>
            </Row>{" "}
          </Container>

          <Row className="mid-div-list">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicks"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-list">
              Jhol momo{" "}
              <Row className="extrajhol-achar"> +extra jhol + extra achar </Row>{" "}
              <Row className="qty"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-price">
              {" "}
              Rs 600{" "}
            </Col>{" "}
          </Row>
          <hr className="line-style"/>
          <Row className="mid-div-list">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicks"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-list">
              Jhol momo{" "}
              <Row className="extrajhol-achar"> +extra jhol + extra achar </Row>{" "}
              <Row className="qty"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-price">
              {" "}
              Rs 600{" "}
            </Col>{" "}
          </Row>
          <hr className="line-style"/>

          <Row className="mid-div-list">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicks"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-list">
              Jhol momo{" "}
              <Row className="extrajhol-achar"> +extra jhol + extra achar </Row>{" "}
              <Row className="qty"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-price">
              {" "}
              Rs 600{" "}
            </Col>{" "}
          </Row>
      <Row className="total-item-list">
          <Col xs={9}>
          <Row className="x3-items">x3 items</Row>
          <Row className="item-total-price">Rs. 1800</Row>

          </Col>
          <Col xs={3} className="pending-style-complete">         
           <Col className="prepared-detail-complete">Complete</Col>
          </Col>
      </Row>


        </Row>



      </Row>{" "}
    </Container>
  );
}
