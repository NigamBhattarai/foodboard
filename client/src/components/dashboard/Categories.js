import React, { Component } from "react";
import {Row, Col,Container,Button,Table,Badge, Form, Select} from "react-bootstrap";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import PhotoFilterIcon from "@mui/icons-material/PhotoFilter";
import "./Categories.scss";
class Categories extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="mt-1">
          <Col md={1}>
            <Row>
              {" "}
              <h1>Categories</h1>
              <br />
              <small>Tuesday 2 Feb 2022</small>
            </Row>
          </Col>

          <Col> </Col>

          <Col md={2}>
            <Button variant="light" className="button1">
              <AddBusinessIcon className="mr-2" />
              Manage AddOns
            </Button>{" "}
          </Col>
        </Row>
        <hr />

        <Row>
          <Col md="7">
            <Table className="table-borderless align-middle" hover size="sm">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Food Count</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                      className="rounded-circle img-thumbnail"
                    />
                  </td>
                  <td>Breads</td>
                  <td>4</td>
                  <td>
                    {" "}
                    <Badge pill bg="primary" className="pill-active">
                      Active
                    </Badge>
                  </td>
                  <td>
                    <EditIcon className="mr-2 icon"></EditIcon>
                    <ClearIcon className="mr-2 icon2"></ClearIcon>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                      className="rounded-circle img-thumbnail"
                    />
                  </td>
                  <td>Curries</td>
                  <td>4</td>
                  <td>
                    {" "}
                    <Badge pill bg="primary" className="pill-inactive">
                      InActive
                    </Badge>
                  </td>
                  <td>
                    <EditIcon className="mr-2 icon"></EditIcon>
                    <ClearIcon className="mr-2 icon2"></ClearIcon>
                  </td>
                </tr>

                <tr>
                  <td>
                    <img
                      src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                      className="rounded-circle img-thumbnail"
                    />
                  </td>
                  <td>Appetizer</td>
                  <td>4</td>
                  <td>
                    {" "}
                    <Badge pill bg="primary" className="pill-active">
                      Active
                    </Badge>
                  </td>
                  <td>
                    <EditIcon className="mr-2 icon"></EditIcon>
                    <ClearIcon className="mr-2 icon2"></ClearIcon>
                  </td>
                </tr>

                <tr>
                  <td>
                    <img
                      src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                      className="rounded-circle img-thumbnail"
                    />
                  </td>
                  <td>Breads</td>
                  <td>4</td>
                  <td>
                    {" "}
                    <Badge pill bg="primary" className="pill-active">
                      Active
                    </Badge>
                  </td>
                  <td>
                    <EditIcon className="mr-2 icon"></EditIcon>
                    <ClearIcon className="mr-2 icon2"></ClearIcon>
                  </td>
                </tr>

                <tr>
                  <td>
                    <img
                      src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                      className="rounded-circle img-thumbnail"
                    />
                  </td>
                  <td>Breads</td>
                  <td>4</td>
                  <td>
                    {" "}
                    <Badge pill bg="primary" className="pill-active">
                      Active
                    </Badge>
                  </td>
                  <td>
                    <EditIcon className="mr-2 icon"></EditIcon>
                    <ClearIcon className="mr-2 icon2"></ClearIcon>
                  </td>
                </tr>

                <tr>
                  <td>
                    <img
                      src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                      className="rounded-circle img-thumbnail"
                    />
                  </td>
                  <td>Breads</td>
                  <td>4</td>
                  <td>
                    {" "}
                    <Badge pill bg="primary" className="pill-active">
                      Active
                    </Badge>
                  </td>
                  <td>
                    <EditIcon className="mr-2 icon"></EditIcon>
                    <ClearIcon className="mr-2 icon2"></ClearIcon>
                  </td>
                </tr>

                <tr>
                  <td>
                    <img
                      src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                      className="rounded-circle img-thumbnail"
                    />
                  </td>
                  <td>Breads</td>
                  <td>4</td>
                  <td>
                    {" "}
                    <Badge pill bg="primary" className="pill-active">
                      Active
                    </Badge>
                  </td>
                  <td>
                    <EditIcon className="mr-2 icon"></EditIcon>
                    <ClearIcon className="mr-2 icon2"></ClearIcon>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md="5">
            <h3>Add New Category</h3>
            <hr />
            <br />
            <Form>
              <input
                type="text"
                name="name"
                size="50"
                placeholder="Category Name"
                className="formlen"
              />
              <br />
              <br />

              <input
                class="form-control"
                type="file"
                id="formFile"
                className="formlen"
              />
              <br />
              <br />

              <Form.Select
                aria-label="Default select example"
                className="formlen"
                size="10"
              >
                <option>Status</option>
                <option value="1">Active</option>
                <option value="2">Inactive</option>
              </Form.Select><br/><br/>

              <Row>
              <Col className="d-grid">

              <Button className="primary-button" size="lg">
            Place Order
          </Button>
          </Col>
          </Row>
            </Form>

            

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Categories;
