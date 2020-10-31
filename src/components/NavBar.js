import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function NavBar() {
    return (
            <Container className="p-0" fluid={true}>
                <Navbar className="border-bottom" bg="transparent" expand="lg">
                    <Navbar.Brand>Mengqi Wang | Full Stack Web Developer</Navbar.Brand>
                    <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                    <Navbar.Collapse id="navbar-toggle">
                        <Nav className="ml-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                        <Link className="nav-link" to="/resume">Resume</Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
            </Container>
    )
}

export default NavBar