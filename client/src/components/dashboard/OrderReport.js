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
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./OrderReport.scss";
function Categories() {
    const [showModal, setShowModal] = useState(false);
  return (
    <Container fluid className="mx-2 categories">
      <Row className="title align-items-center mx-0">
        <Col lg={2}>
          <Row>
            {" "}
            <h2>Order Table</h2>
            <small className="text-muted">Tuesday 2,Feb,2021</small>{" "}
          </Row>
        </Col>

        <Col> </Col>

        <Col lg={3}>
          <Button variant="light" className="titleButton">
            <AddBusinessIcon className="mr-2" />
            Manage Orders
          </Button>{" "}
        </Col>
      </Row>
      <hr />

      <Row>
        <Col md="12">
          <Table className="table-borderless align-middle" hover size="sm">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Token</th>
                <th>No. Of Items</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12 January 2022</td>
                <td>12:40</td>
                <td>#84237</td>
                <td>3</td>
                <td>
                  <Badge pill bg="primary" className="pill-pending">
                    Pending
                  </Badge>
                </td>
                <td>
                  <VisibilityIcon className="mr-2 icon" onClick={setShowModal(true)}></VisibilityIcon>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
export default Categories;
