import React from 'react'
import "./SideBar.scss";
import { Row, Col, Button } from "react-bootstrap";
import * as RBIcon from 'react-bootstrap-icons';


export default function SideBar() {
    return (
      <div className="sideNav-dashboard">
        <Row className=" py-5">
          <Col xs={10}></Col>
          <Col xs={1} className="sideNav-minimize-btn"><RBIcon.ChevronLeft/></Col>
        </Row>
        <Button variant="link" className="sidebar-btn mb-4"><Row><Col xs = {4} className="text-right"><RBIcon.HouseDoor /></Col><Col xs = {6} className="text-left">Dashboard</Col></Row> </Button>
        <Button variant="link" className="sidebar-btn"><Row><Col xs = {4} className="text-right"><RBIcon.HouseDoor /></Col><Col xs = {6} className="text-left">Food</Col></Row> </Button>
        <Button variant="link" className="sidebar-btn"><Row><Col xs = {4} className="text-right"><RBIcon.HouseDoor /></Col><Col xs = {6} className="text-left">Category</Col></Row> </Button>
        <Button variant="link" className="sidebar-btn"><Row><Col xs = {4} className="text-right"><RBIcon.HouseDoor /></Col><Col xs = {6} className="text-left">Add Ons</Col></Row> </Button>
      </div>
      )
}
