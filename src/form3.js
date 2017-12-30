import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, FormGroup, Input, Label } from 'reactstrap';



export let changervalue=undefined;

class Formboilerplate3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changer: undefined
        }
    }

    render() {
changervalue=this.state.changer
        return (

            <div style={this.props.formstyle}>


                <FormGroup>
                    <h4 style={{ fontWeight: 'normal' }}>{this.props.text}</h4>
                </FormGroup>
                <FormGroup>
                    <Input type="name" name="name" placeholder={this.props.nameplaceholder} onChange={this.props.nameonchange} size="sm" />
                </FormGroup>
                <FormGroup>
                    <Input type="email" name="email" placeholder={this.props.emailplaceholder} onChange={this.props.emailonchange} size="sm" />
                </FormGroup>
                <FormGroup>
                    <Input type="number" name="number" placeholder={this.props.numberplaceholder} onChange={this.props.numberonchange} size="sm" />
                </FormGroup>
                <legend style={{ fontSize: '16px' }}>Complain Type</legend>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" onChange={() => this.setState({ changer: 1 })} />
                        Missing Person
            </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" onChange={() => this.setState({ changer: 2 })} />
                        Complain about any Department
            </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" onChange={() => this.setState({ changer: 3 })} />
                        Crime Report
            </Label>
                </FormGroup>




                {
                    (this.state.changer === 1) ? (
                        <div>
                            <FormGroup>
                                <Label><small>From when the person has been missing</small>
                                </Label>

                                <Input type="date" onChange={this.props.MissingPersonDateOnchange} size="sm" />
                            </FormGroup>
                            <FormGroup>

                                <Input type="name" name="missing" placeholder="Enter missing person's name" onChange={this.props.MissingPersonNameOnchange} size="sm" />
                            </FormGroup>
                            <FormGroup>

                                <Input type="number" name="missing" placeholder="Enter missing person's age" onChange={this.props.MissingPersonAgeOnchange} size="sm" />
                            </FormGroup>


                            <FormGroup>

                    <Input type="textarea" name="missing" placeholder="Enter missing person's complete detail here" onChange={this.props.MissingPersondescriptiononchange} size="sm" />
                </FormGroup>
                        </div>
                    ) :
                        (this.state.changer === 2) ? (
                            <div>
                                <FormGroup>

                                    <Input type="name"  name="depart" placeholder="Enter Department/Organization name" onChange={this.props.DepartNameOnchange} size="sm" />
                                </FormGroup>
                                <FormGroup>

                    <Input type="textarea" name="depart" placeholder="Enter complain description here" onChange={this.props.DepartComplaindescriptiononchange} size="sm" />
                </FormGroup>

                            </div>
                        ) : (this.state.changer === 3) ? (
                            <div>
                                {/* <FormGroup>

                                    <Input type="name" name="crime" placeholder='Enter crime location' onChange={this.props.CrimeLocationOnchange} size="sm" />
                                </FormGroup> */}
                                <FormGroup>
                                    <Label for="exampleSelect">Enter crime type</Label>
                                    <Input type="select" name="select" id="exampleSelect"  size="sm" onChange={this.props.CrimeTypeOnchange}>
                                    <option check>Crime Type</option>
                                      
                                        <option>Robbery</option>
                                        <option>Target Killing</option>
                                        <option>Snatching</option>
                                        <option>Harassment</option>
                                        <option>Others</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label><small>Select Incident Date</small>
                                    </Label>

                                    <Input type="date" name="crime" onChange={this.props.CrimeIncidentDateOnchange} size="sm" />
                                </FormGroup>


                                <FormGroup>

                    <Input type="textarea" name="crime" placeholder="Enter crime description here" onChange={this.props.Crimedescriptiononchange} size="sm" />
                </FormGroup>


                            </div>

                            
                        ) : (
                                    console.log("done")
                                )

                }




                <Button onClick={this.props.buttonfunction} outline color='primary' size="sm">{this.props.buttontext}</Button>
            </div>

        );
    }
}

export default Formboilerplate3