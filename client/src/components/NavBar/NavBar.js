import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from '../../page/Home/Home';
import FormStess from '../../page/FormStress/FormStess';
import NotFound from '../../page/NotFound/NotFound';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class NavBar extends Component {
    render() {
        return (
            <>
                <Router>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="/">lớp 10A5</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <NavDropdown title="Products" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/formstress">Stress Học Đường</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Another Link</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div>
                        <Routes>
                            <Route path="/formstress" exact element={<FormStess />}></Route>
                            <Route path="/" exact element={<Home />}></Route>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </div>
                </Router>
            </>
        )
    }
}
