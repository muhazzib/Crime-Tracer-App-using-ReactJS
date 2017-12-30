import React, { Component } from 'react';
import './App.css';
import {  Link } from 'react-router'

import {

  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"


class Navbarcomp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (


      <Navbar color='faded' light expand="md">
        <NavbarBrand href={this.props.navpath}>{this.props.Navtext}</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
            <NavLink> <Link to='/home'>Home</Link></NavLink>
            </NavItem>
          
            <NavItem>
              
              <NavLink> <Link to='/home/mycomplain'>My Complaints</Link></NavLink>
            </NavItem>
            <NavItem>
              <Button onClick={this.props.signoutfunc}>Sign out</Button>
            </NavItem>
           
          </Nav>
        </Collapse>
      </Navbar>


    )
  }
}


export default Navbarcomp;