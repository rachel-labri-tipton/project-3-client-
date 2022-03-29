import { Link, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import React from "react";

function NavbarLayout() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Simply Good Food</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/all-recipes">All Recipes</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/menuideas">Menu Ideas</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Outlet />
        </>
    );
}

export default NavbarLayout;