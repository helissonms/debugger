import React, { Component } from 'react'
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
import { getData } from './../redux/reducers/app/actions'

class Header extends Component {
    constructor () {
        super()

        this.state = {
            isOpen: false
        }

        this.toggleNavbar = this.toggleNavbar.bind(this)
    }

    toggleNavbar () {
        this.setState({ isOpen: !this.state.isOpen })
    }

    componentDidMount () {
        this.props.getData()
    }

    render () {
        return (
            <Navbar expand={'md'} className="bg-primary" dark>
                <Container fluid>
                    <NavbarBrand href="/">{this.props.app.name}</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Projects</NavLink>
                        </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                {this.props.app.user.name || 'Profile'}
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
    }
}

const mapStateToProps = ({ app }) => ({
    app
})

const mapDispatchToProps = {
    getData
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
