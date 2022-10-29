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
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Lớp 10A5</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Trang Chủ <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/formstress">Form Stress</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
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
