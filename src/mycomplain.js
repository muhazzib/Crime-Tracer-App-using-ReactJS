import React, { Component } from 'react';
import './App.css';
import fire from './fire'
import {
    Card, CardTitle, CardText, CardBody
} from 'reactstrap';

import { Container, Row, Col } from 'reactstrap';
import { browserHistory } from 'react-router'


let database = fire.database().ref("/")


class Mycomplain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            Mycomplainarray: []
        }
        
    }
    componentWillMount(){
        let data = [];
        let userobject = localStorage.getItem('user2')
        userobject = JSON.parse(userobject);
        if(userobject!=undefined){

            database.child('user').child(userobject.useruid).child("DepartmentComplain").on("child_added", (snap) => {
           
                let obj = snap.val();
                obj.key = snap.key;
                data.push(obj)
                this.setState({Mycomplainarray : data});
               
            })
        }
        else {
            browserHistory.push('/')
        }
        
        
   }

    // console.log(user)

    render() {
        return (
            <div>
                {
                  
                       
                    this.state.Mycomplainarray.map((value1,index)=>{
                        return(

                            <Container>
                            
                                    <Row>
                            
                                      <Col sm={{ size: 6, offset: 3 }}>
                                        <div style={{ minHeight: '250px', padding: '10% 5%', position: 'relative', top: '30px', backgroundColor: 'white', boxShadow: '0px 6px 18px 5px black' ,marginBottom:'5%'}}>
                       
                                        <Card>
        <CardBody>
          <CardTitle>{value1.DepartName}</CardTitle>
          <CardText>{value1.DepartDescription}</CardText>
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


export default Mycomplain;