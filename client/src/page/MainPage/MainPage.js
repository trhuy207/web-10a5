import React, { Component } from 'react'

import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

import Home from '../Home/Home';

export default class MainPage extends Component {
    render() {
        return (
            <>
                <NavBar />

                <Footer />
            </>
        )
    }
}
