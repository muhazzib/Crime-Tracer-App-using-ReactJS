import React, { Component } from 'react';
import './App.css';
import fire from './fire'
import {
    Card, CardTitle, CardText,
    CardSubtitle, CardBody
} from 'reactstrap';

import { Container, Row, Col } from 'reactstrap';


let database = fire.database().ref("/")


class MissingPerson extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
           MissingPersonArray: []
        }
        
    }
    componentWillMount(){
        let data = [];
        database.child('MissingPersons').on("child_added", (snap) => {
       
            let obj = snap.val();
            obj.key = snap.key;
            data.push(obj)
            this.setState({MissingPersonArray : data});
           
        })
        
        
   }

    // console.log(user)

    render() {
        return (
            <div>
                {
                  
                       
                    this.state.MissingPersonArray.map((value1,index)=>{
                        return(

                            <Container>
                            
                                    <Row>
                            
                                      <Col sm={{ size: 6, offset: 3 }}>
                                        <div style={{ minHeight: '250px', padding: '10% 5%', position: 'relative', top: '30px', backgroundColor: 'white', boxShadow: '0px 6px 18px 5px black' ,marginBottom:'5%'}}  key={index}>
                       
                                        <Card>
        <CardBody>
          <CardTitle>Victim's Name: {value1.MissingPersonName}</CardTitle>
          <CardTitle>Victim's Age: {value1.MissingPersonAge}</CardTitle>
          <CardTitle>Contact No: {value1.posterCellno}</CardTitle>
          
          
          
          <CardSubtitle>Missing from {value1.MissingPersonDate}</CardSubtitle>
          <br />
          <CardText><span style={{borderBottom:'1px solid black'}}>Description</span><br/>{value1.MissingPersonDescription}</CardText>
        </CardBody>
      </Card>
                       </div>
                                        </Col>
        </Row>

      </Container>
                       
                        )
                    })
                }


            </div>
        )

    }
}


export default MissingPerson;