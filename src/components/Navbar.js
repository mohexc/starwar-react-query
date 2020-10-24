import { Button } from 'antd'
import React from 'react'
import './Navbar.less'

const Navbar = ({ setPage }) => {
    return (
        <nav className="navbar">
            <Button className="btn-lift" style={{ margin: "1rem" }} onClick={() => setPage('Planets')}>Planets</Button>
            <Button className="btn-lift" style={{ margin: "1rem" }} onClick={() => setPage('People')}>People</Button >
        </nav >
    )
}

export default Navbar
