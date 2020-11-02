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
                        <a className="nav-link" href="https://drive.google.com/file/d/1dm1mJj6FlRCQ2KajUJYHuvzq_rww7PC_/view?usp=sharing" target="_blank" rel="noopenner noreferrer">Resume</a>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
            </Container>
    )
}

export default NavBar