import React, { Component } from 'react'

import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

import '../../assets/Styles/main.css'

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
