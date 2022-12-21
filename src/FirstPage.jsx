import React from 'react'
import Menu from './Components/Header/Menu'
import Midle from './Components/Midle/Midle'
import Footer from './Components/Footer/Footer'

const FirstPage = () => {
    return (
        <div className="main">
            <Menu />
            <Midle />
            <Footer />
        </div>
    );
}

export default FirstPage