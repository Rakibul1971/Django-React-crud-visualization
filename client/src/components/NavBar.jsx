import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { Form, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand to="/">Data</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-data" to="/">All Data</Link>
                        <Link className="nav-addData" to="/addData">Add Data</Link>
                        <Link className="nav-addData" to="/chart">Chart</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
