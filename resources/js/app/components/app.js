import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

const title = document.getElementsByTagName('title')[0].innerText

const App = () => (
    <Navbar expand={'md'} className="bg-primary" dark>
        <NavbarBrand href="/">{title}</NavbarBrand>
    </Navbar>
)

export default App
