import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Table,
  Badge,
  Form,
} from "react-bootstrap";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import "./Categories.scss";
function Categories() {
  let categoryData = [
    {
      id: 1,
      name: "Bread",
      foodCount: 4,
      status: "active",
    },
    {
      id: 2,
      name: "Curry",
      foodCount: 4,
      status: "inactive",
    },
    {
      id: 3,
      name: "Appetizers",
      foodCount: 10,
      status: "active",
    },
    {
      id: 4,
      name: "Fastfood",
      foodCount: 11,
      status: "inactive",
    },
    {
      id: 5,
      name: "Drinks",
      foodCount: 9,
      status: "active",
    },
  ];
  const [categories, setCategories] = useState(categoryData);
  const [selected, setSelected] = useState([]);
  const [click, setClick] = useState(false);
  function editCategory(category) {
    setSelected(category);
    setClick(true);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setSelected((prevSelected) => {
      return { ...prevSelected, [name]: value };
    });
  }

  return (
    <Container fluid className="mx-2 categories">
      <Row className="title align-items-center mx-0">
        <Col lg={2}>
          <Row>
            {" "}
            <h2>Categories</h2>
            <small className="text-muted">Tuesday 2,Feb,2021</small>{" "}
          </Row>
        </Col>

        <Col> </Col>

        <Col lg={2}>
          <Button variant="light" className="titleButton">
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
              {categories.map((category) => {
                return (
                  <tr>
                    <td>
                      <img
                        src="https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg"
                        className="rounded-circle img-thumbnail"
                      />
                    </td>
                    <td>{category.name}</td>
                    <td>{category.foodCount}</td>
                    <td>
                      {category.status === "active" ? (
                        <Badge pill bg="primary" className="pill-active">
                          Active
                        </Badge>
                      ) : (
                        <Badge pill bg="primary" className="pill-inactive">
                          InActive
                        </Badge>
                      )}
                    </td>
                    <td>
                      <EditIcon
                        className="mr-2 icon"
                        onClick={() => editCategory(category)}
                      ></EditIcon>
                      <ClearIcon className="mr-2 icon2"></ClearIcon>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
        <Col md="5" className="edit py-3 rounded">
          <Row>
            {" "}
            <Col md={8}>
              <h4>{click ? "Update" : "Add New"} Category</h4>
            </Col>
            {click && (
              <Button
                className="default-button"
                style={{ fontSize: "13px" }}
                onClick={() => {
                  setClick(false);
                  setSelected([]);
                }}
              >
                Add New Category
              </Button>
            )}
          </Row>
          <hr />
          <br />
          <Form>
            <Form.Control
              type="text"
              placeholder="Category Name"
              className="formlen"
              value={selected.name}
              onChange={handleChange}
              name="name"
            />
            <br />
            <Form.Control type="file" className="formlen" />
            <br />
            <Form.Control
              as="select"
              className="form-select"
              value={selected.status}
              name="status"
            >
              <option value="status">Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Form.Control>
            <br />
            <br />

            <Row>
              <Col className="d-grid">
                <Button
                  className="default-button order-popup-bottom-button"
                  style={{ width: "100%" }}
                >
                  {click ? "Update" : "Add"} Category
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default Categories;
