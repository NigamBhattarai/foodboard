import React from 'react';
import { Col, Button, Row, Container } from "react-bootstrap";
import CropSquareIcon from '@mui/icons-material/CropSquare';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import "../dashboard/kitchencomp.scss";

function Kitchencomp() {
    return (
        <Row className="overflow-scroll">
        <Row className="Col-order-first">
          <Container>
            <Row>
              <Col xs={8} className="order-lists">
                Order #2300
                <Row className="order-datetime">
                  {" "}
                  23 Feb 2022, 8: 26 PM{" "}
                </Row>{" "}
              </Col>{" "}
              <Col xs={4} className="edit-orders-button">
                <Button className="edit-orders">
                  20:06{" "}
                </Button>{" "}
              </Col>
            </Row>{" "}
          </Container>

          <Row className="mid-div-lists">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicken"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-lists">
              Jhol momo{" "}
              <Row className="extrajhol-achars"> +extra jhol + extra achar </Row>{" "}
              <Row className="quantity"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-prices">
              <CropSquareIcon/>
            </Col>{" "}
          </Row>
          <hr className="line-styles"/>
          <Row className="mid-div-lists">
            <Col xs={4}>
              <img
                className="grilled-chicken"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-lists">
              Jhol momo{" "}
              <Row className="extrajhol-achars"> +extra jhol + extra achar </Row>{" "}
              <Row className="quantity"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-prices">
            <CropSquareIcon/>

            </Col>
          </Row>
          <hr className="line-styles"/>

          <Row className="mid-div-lists">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicken"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-lists">
              Jhol momo{" "}
              <Row className="extrajhol-achars"> +extra jhol + extra achar </Row>{" "}
              <Row className="quantity"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-prices">
            <CropSquareIcon/>

            </Col>
          </Row>
      <Row className="total-item-lists">
          <Col xs={10}>
          <CheckCircleOutlineIcon className='correct-icon'/> <HighlightOffIcon className='incorrect-icon'/>
          </Col>
          <Col xs={2}className="last-cropsquare" >         
          <CropSquareIcon className='crops'/>
          </Col>
      </Row>

        </Row>







        <Row className="Col-order-first">
          <Container>
            <Row>
              <Col xs={8} className="order-lists">
                Order #2300
                <Row className="order-datetime">
                  {" "}
                  23 Feb 2022, 8: 26 PM{" "}
                </Row>{" "}
              </Col>{" "}
              <Col xs={4} className="edit-orders-button">
                <Button className="edit-orders">
                  20:06{" "}
                </Button>{" "}
              </Col>
            </Row>{" "}
          </Container>

          <Row className="mid-div-lists">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicken1"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={4} className="item-lists">
              Jhol momo{" "}
              <Row className="extrajhol-achars"> +extra jhol + extra achar </Row>{" "}
              <Row className="quantity"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={4} className="item-prepare">
            <Col className='preparing'>Preparing</Col>
            </Col>
          </Row>
          <hr className="line-styles"/>
          <Row className="mid-div-lists">
            <Col xs={4}>
              <img
                className="grilled-chicken"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-lists">
              Jhol momo{" "}
              <Row className="extrajhol-achars"> +extra jhol + extra achar </Row>{" "}
              <Row className="quantity"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-prices">
            <CropSquareIcon/>

            </Col>
          </Row>
          <hr className="line-styles"/>

          <Row className="mid-div-lists">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicken"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-lists">
              Jhol momo{" "}
              <Row className="extrajhol-achars"> +extra jhol + extra achar </Row>{" "}
              <Row className="quantity"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-prices">
            <CropSquareIcon/>

            </Col>
          </Row>
      <Row className="total-item-lists">
          <Col xs={10}>
          <CheckCircleOutlineIcon className='correct-icon'/> <HighlightOffIcon className='incorrect-icon'/>
          </Col>
          <Col xs={2}className="last-cropsquare" >         
          <CropSquareIcon className='crops'/>
          </Col>
      </Row>

        </Row>





        <Row className="Col-order-first">
          <Container>
            <Row>
              <Col xs={8} className="order-lists">
                Order #2300
                <Row className="order-datetime">
                  {" "}
                  23 Feb 2022, 8: 26 PM{" "}
                </Row>{" "}
              </Col>{" "}
              <Col xs={4} className="edit-orders-button">
                <Button className="edit-orders">
                  20:06{" "}
                </Button>{" "}
              </Col>
            </Row>{" "}
          </Container>

          <Row className="mid-div-lists">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicken1"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={4} className="item-lists">
              Jhol momo{" "}
              <Row className="extrajhol-achars"> +extra jhol + extra achar </Row>{" "}
              <Row className="quantity"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={4} className="item-prepare">
            <Col className='preparing'>Preparing</Col>
            </Col>
          </Row>
          <hr className="line-styles"/>
          <Row className="mid-div-lists">
            <Col xs={4}>
              <img
                className="grilled-chicken1"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={4} className="item-lists">
              Jhol momo{" "}
              <Row className="extrajhol-achars"> +extra jhol + extra achar </Row>{" "}
              <Row className="quantity"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={4} className="item-prepare">
            <Col className='preparing'>Preparing</Col>
            </Col>
          </Row>
          <hr className="line-styles"/>

          <Row className="mid-div-lists">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicken1"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={4} className="item-lists">
              Jhol momo{" "}
              <Row className="extrajhol-achars"> +extra jhol + extra achar </Row>{" "}
              <Row className="quantity"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={4} className="item-prepare">
            <Col className='preparing'>Preparing</Col>
            </Col>
          </Row>
      <Row className="total-item-lists">
        <Col className="done-orders-button">
      <Button className="done-orders">
                  Done{" "}
                </Button>  </Col>
                    </Row>

        </Row>




<Row className='lowerpart'>
        <Row className="Col-order-first">
          <Container>
            <Row>
              <Col xs={8} className="order-lists">
                Order #2300
                <Row className="order-datetime">
                  {" "}
                  23 Feb 2022, 8: 26 PM{" "}
                </Row>{" "}
              </Col>{" "}
              <Col xs={4} className="edit-orders-button">
                <Button className="edit-orders">
                  20:06{" "}
                </Button>{" "}
              </Col>
            </Row>{" "}
          </Container>

          <Row className="mid-div-lists">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicken1"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={4} className="item-lists">
              Jhol momo{" "}
              <Row className="extrajhol-achars"> +extra jhol + extra achar </Row>{" "}
              <Row className="quantity"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={4} className="item-prepare">
            <Col className='preparing'>Preparing</Col>
            </Col>
          </Row>
          <hr className="line-styles"/>
          <Row className="mid-div-lists">
            <Col xs={4}>
              <img
                className="grilled-chicken"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-lists">
              Jhol momo{" "}
              <Row className="extrajhol-achars"> +extra jhol + extra achar </Row>{" "}
              <Row className="quantity"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-prices">
            <CropSquareIcon/>

            </Col>
          </Row>
          <hr className="line-styles"/>

          <Row className="mid-div-lists">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicken"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-lists">
              Jhol momo{" "}
              <Row className="extrajhol-achars"> +extra jhol + extra achar </Row>{" "}
              <Row className="quantity"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-prices">
            <CropSquareIcon/>

            </Col>
          </Row>
      <Row className="total-item-lists">
          <Col xs={10}>
          <CheckCircleOutlineIcon className='correct-icon'/> <HighlightOffIcon className='incorrect-icon'/>
          </Col>
          <Col xs={2}className="last-cropsquare" >         
          <CropSquareIcon className='crops'/>
          </Col>
      </Row>

        </Row>

        <Row className="Col-order-first">
          <Container>
            <Row>
              <Col xs={8} className="order-lists">
                Order #2300
                <Row className="order-datetime">
                  {" "}
                  23 Feb 2022, 8: 26 PM{" "}
                </Row>{" "}
              </Col>{" "}
              <Col xs={4} className="edit-orders-button">
                <Button className="edit-orders">
                  20:06{" "}
                </Button>{" "}
              </Col>
            </Row>{" "}
          </Container>

          <Row className="mid-div-lists">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicken1"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={4} className="item-lists">
              Jhol momo{" "}
              <Row className="extrajhol-achars"> +extra jhol + extra achar </Row>{" "}
              <Row className="quantity"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={4} className="item-prepare">
            <Col className='preparing'>Preparing</Col>
            </Col>
          </Row>
          <hr className="line-styles"/>
          <Row className="mid-div-lists">
            <Col xs={4}>
              <img
                className="grilled-chicken"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-lists">
              Jhol momo{" "}
              <Row className="extrajhol-achars"> +extra jhol + extra achar </Row>{" "}
              <Row className="quantity"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-prices">
            <CropSquareIcon/>

            </Col>
          </Row>
          <hr className="line-styles"/>

          <Row className="mid-div-lists">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicken"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-lists">
              Jhol momo{" "}
              <Row className="extrajhol-achars"> +extra jhol + extra achar </Row>{" "}
              <Row className="quantity"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-prices">
            <CropSquareIcon/>

            </Col>
          </Row>
      <Row className="total-item-lists">
          <Col xs={10}>
          <CheckCircleOutlineIcon className='correct-icon'/> <HighlightOffIcon className='incorrect-icon'/>
          </Col>
          <Col xs={2}className="last-cropsquare" >         
          <CropSquareIcon className='crops'/>
          </Col>
      </Row>

        </Row>


        <Row className="Col-order-first">
          <Container>
            <Row>
              <Col xs={8} className="order-lists">
                Order #2300
                <Row className="order-datetime">
                  {" "}
                  23 Feb 2022, 8: 26 PM{" "}
                </Row>{" "}
              </Col>{" "}
              <Col xs={4} className="edit-orders-button">
                <Button className="edit-orders">
                  20:06{" "}
                </Button>{" "}
              </Col>
            </Row>{" "}
          </Container>

          <Row className="mid-div-lists">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicken1"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={4} className="item-lists">
              Jhol momo{" "}
              <Row className="extrajhol-achars"> +extra jhol + extra achar </Row>{" "}
              <Row className="quantity"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={4} className="item-prepare">
            <Col className='preparing'>Preparing</Col>
            </Col>
          </Row>
          <hr className="line-styles"/>
          <Row className="mid-div-lists">
            <Col xs={4}>
              <img
                className="grilled-chicken"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-lists">
              Jhol momo{" "}
              <Row className="extrajhol-achars"> +extra jhol + extra achar </Row>{" "}
              <Row className="quantity"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-prices">
            <CropSquareIcon/>

            </Col>
          </Row>
          <hr className="line-styles"/>

          <Row className="mid-div-lists">
            <Col xs={4}>
              {" "}
              <img
                className="grilled-chicken"
                src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                alt="grilled-chicks"
              />
            </Col>{" "}
            <Col xs={5} className="item-lists">
              Jhol momo{" "}
              <Row className="extrajhol-achars"> +extra jhol + extra achar </Row>{" "}
              <Row className="quantity"> Qty: 3 </Row>
            </Col>{" "}
            <Col xs={3} className="item-prices">
            <CropSquareIcon/>

            </Col>
          </Row>
      <Row className="total-item-lists">
          <Col xs={10}>
          <CheckCircleOutlineIcon className='correct-icon'/> <HighlightOffIcon className='incorrect-icon'/>
          </Col>
          <Col xs={2}className="last-cropsquare" >         
          <CropSquareIcon className='crops'/>
          </Col>
      </Row>

        </Row>



        </Row>




        </Row>
    );
}

export default Kitchencomp;