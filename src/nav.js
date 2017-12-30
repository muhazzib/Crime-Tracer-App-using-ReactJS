import React, { Component } from 'react';
import './App.css';
import {
    Navbar,
    NavbarBrand,


} from "reactstrap"
import { browserHistory } from 'react-router'






class Navcom extends Component {
    componentWillMount() {
        let userobject = localStorage.getItem('user2')
        userobject = JSON.parse(userobject);
        if (userobject === null) {
            if (window.location.pathname === "/MissingPerson") {
                browserHistory.push('/MissingPerson')

            }
            else if (window.location.pathname === "/CrimeReports") {
                browserHistory.push('/CrimeReports')

            }
            else {
                browserHistory.push('/')

            }
        }
        else if (window.location.pathname === '/') {
            browserHistory.push('/home')

        }
        else if (window.location.pathname === "/MissingPerson") {
            browserHistory.push('/MissingPerson')

        }
        else if (window.location.pathname === "/CrimeReports") {
            browserHistory.push('/CrimeReports')

        }
    }
    render() {
        return (

            <div>

                <div style={{ borderBottom: '1px solid black', backgroundColor: 'white' }}>
                    <Navbar color='faded' light expand="md">
                        <NavbarBrand href='/home'>Crime Tracer</NavbarBrand>
                    </Navbar>
                </div>
                {this.props.children}

            </div>

        )
    }
}


export default Navcom;