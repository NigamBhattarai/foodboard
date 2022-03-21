import React from "react";
import { Badge } from "react-bootstrap";
import "./OrderListTable.scss";

export default function OrderListTable(props) {
  return (
    <tr onClick={props.handleClick} style={{backgroundColor: props.selected?"rgba(0,0,0,.075)":"transparent"}}>
      <td>{props.order.ordered_time}</td>
      <td>{props.order.token_number}</td>
      <td>Rs.{props.order.grand_total}</td>
      <td>
        <Badge pill className="pill-completed">
          Completed
        </Badge>
      </td>

    </tr>
  );
}
