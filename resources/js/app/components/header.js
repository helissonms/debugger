import React from 'react'
import { connect } from 'react-redux'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container
} from 'reactstrap'
import { toggleNavbar } from './../redux/reducers/app/actions'

const Header = ({ title, toggleNavbar, isOpen }) => (
    <Navbar expand={'md'} className="bg-primary" dark>
        <Container fluid>
            <NavbarBrand href="/">{title}</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="#">Projects</NavLink>
                </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    Profile
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem>
                        Option 1
                    </DropdownItem>
                    <DropdownItem>
                        Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Logout
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Container>
    </Navbar>
)

const mapStateToProps = ({ app }) => ({
    isOpen: app.isOpen,
    title: app.title
})

const mapDispatchToProps = {
    toggleNavbar
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
