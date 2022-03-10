import React from "react";
import { Row, Col, Table,Badge } from "react-bootstrap";
import "./OrderListTable.scss";
export default function OrderListTable(props) {
  return (
    <Row className="orderTable">
      <Col>
        <Table className="table-borderless" hover>
          <thead>
            <tr>
              <th>Time</th>
              <th>Order ID</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>22 Feb 2022,12:42 AM</td>
              <td>#12354</td>
              <td>Rs.400</td>
              <td>
                <Badge pill className="pill-completed">
                  Completed
                </Badge>
              </td>
            </tr>
            <tr>
              <td>22 Feb 2022,12:42 AM</td>
              <td>#12354</td>
              <td>Rs.400</td>
              <td>
                <Badge pill className="pill-preparing">
                  Preparing
                </Badge>
              </td>
            </tr>
            <tr>
              <td>22 Feb 2022,12:42 AM</td>
              <td>#12354</td>
              <td>Rs.400</td>
              <td>
                <Badge pill className="pill-pending">
                  Pending
                </Badge>
              </td>
            </tr>
            <tr>
              <td>22 Feb 2022,12:42 AM</td>
              <td>#12354</td>
              <td>Rs.400</td>
              <td>
                <Badge pill className="pill-completed">
                  Completed
                </Badge>
              </td>
            </tr><tr>
              <td>22 Feb 2022,12:42 AM</td>
              <td>#12354</td>
              <td>Rs.400</td>
              <td>
                <Badge pill className="pill-completed">
                  Completed
                </Badge>
              </td>
            </tr><tr>
              <td>22 Feb 2022,12:42 AM</td>
              <td>#12354</td>
              <td>Rs.400</td>
              <td>
                <Badge pill className="pill-completed">
                  Completed
                </Badge>
              </td>
            </tr><tr>
              <td>22 Feb 2022,12:42 AM</td>
              <td>#12354</td>
              <td>Rs.400</td>
              <td>
                <Badge pill className="pill-completed">
                  Completed
                </Badge>
              </td>
            </tr><tr>
              <td>22 Feb 2022,12:42 AM</td>
              <td>#12354</td>
              <td>Rs.400</td>
              <td>
                <Badge pill className="pill-completed">
                  Completed
                </Badge>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}
