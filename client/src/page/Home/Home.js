import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <>
                <center><h1>Trang Chủ</h1></center>
                <div className='container'>
                    <div className="card text-center">
                        <div className="card-header">
                            Featured
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
