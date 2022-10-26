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

export default class NavBar extends Component {
    render() {
        return (
            <>
            <Router>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>



                    {/* <div>

                        <Navbar bg="dark" variant={"dark"} expand="lg">
                            <Navbar.Brand href="#">LỚP 10A5</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="mr-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link as={Link} to="/">Trang Chủ</Nav.Link>
                                    <Nav.Link as={Link} to="/formstress">Form Stress</Nav.Link>

                                </Nav>

                            </Navbar.Collapse>
                        </Navbar>
                    </div> */}
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
