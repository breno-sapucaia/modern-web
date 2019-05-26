import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import Logo from '../componentes/template/Logo'
import Nav from '../componentes/template/Nav'
import Footer from '../componentes/template/Footer'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
