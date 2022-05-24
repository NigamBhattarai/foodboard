import React from "react";
import { Badge } from "react-bootstrap";
import "./OrderListTable.scss";
import dateFormat from "dateformat";

export default function OrderListTable(props) {
  function renderStatus(status) {
    switch (status) {
      case 0:
        return (
          <Badge pill className="pill-pending">
            Pending
          </Badge>
        );
      case 1:
        return (
          <Badge pill className="pill-preparing">
            Preparing
          </Badge>
        );
      case 2:
        return (
          <Badge pill className="pill-served">
            Served
          </Badge>
        );
      case 3:
        return (
          <Badge pill className="pill-canceled">
            Canceled
          </Badge>
        );
      default:
        break;
    }
  }
  function convertTime(time) {
    return dateFormat(time, "hh:mm TT").toString();
  }

  return (
    <tr
      onClick={props.handleClick}
      style={{
        backgroundColor: props.selected ? "rgba(0,0,0,.075)" : "transparent",
      }}
    >
      <td>{convertTime(props.order.ordered_time)}</td>
      <td>{props.order.token_number}</td>
      <td>Rs.{props.order.grand_total}</td>
      <td>
        {renderStatus(props.order.status)}
      </td>
    </tr>
  );
}
