import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router'




class Formboilerplate2 extends Component {
    render() {
        return (
      
                        <div  style={this.props.formstyle}>


                            <FormGroup>
                                <h4 style={{ fontWeight: 'normal' }}>{this.props.text}</h4>
                            </FormGroup>
                          
                            <FormGroup>
                                <Input type="email" name="email" placeholder={this.props.emailplaceholder} onChange={this.props.emailonchange} size="sm" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" placeholder={this.props.passwordplaceholder} onChange={this.props.passwordonchange} size="sm" />
                            </FormGroup>
                            <Link to={this.props.Changepath}><small style={{ display: "block", float: 'right' }}>{this.props.small}</small></Link>
                            <Button onClick={this.props.buttonfunction} outline color='primary' size="sm">{this.props.buttontext}</Button>
                        </div>

        );
    }
}

export default Formboilerplate2