import { Link, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useLocation} from "react-router-dom"


import React, {useEffect, useState } from "react";

function NavbarLayout() {

    const location = useLocation()

    const [isLoggedIn, setIsLoggedIn] = useState(undefined)

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!token ? false : true)
    }, [location])

    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Simply Good Food</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/all-recipes">All Recipes</Nav.Link>
                    <Nav.Link href="/menuideas">Menu Ideas</Nav.Link>
                </Nav>
                <Nav className="d-flex">
                    <Nav.Link href="/login" disabled={isLoggedIn ? true : false} ><span className="text-primary">{!isLoggedIn ? "Register / Log In" : "Signed In"}</span></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Outlet />
        <Navbar bg="light" variant="light" sticky="bottom">
            <Container className="d-flex flex-column">
                <p style={{"margin": "0 auto"}}><i className="fa fa-copyright" aria-hidden="true"></i> Recipes from <a href="https://minimalistbaker.com/" target="_blank" style={{textDecoration: 'none'}}>Minimalist Baker</a></p>
                <Nav>
                    <Nav.Link href="/about">About Us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
}

export default NavbarLayout;