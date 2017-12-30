import React, { Component } from 'react';
import './App.css';
import fire from './fire'
import {
    Card, CardTitle, CardText,
    CardBody
} from 'reactstrap';

import { Container, Row, Col } from 'reactstrap';


let database = fire.database().ref("/")


class CrimeReports extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
           CrimeReportsArray: []
        }
        
    }
    componentWillMount(){
        let data = [];
        database.child('CrimeReports').on("child_added", (snap) => {
       
            let obj = snap.val();
            obj.key = snap.key;
            data.push(obj)
            this.setState({CrimeReportsArray : data});
           
        })
        
        
   }

    // console.log(user)

    render() {
        return (
            <div>
                {
                  
                       
                    this.state.CrimeReportsArray.map((value1,index)=>{
                        return(

                            <Container>
                            
                                    <Row>
                            
                                      <Col sm={{ size: 6, offset: 3 }} key={index}>
                                        <div style={{ minHeight: '250px', padding: '10% 5%', position: 'relative', top: '30px', backgroundColor: 'white', boxShadow: '0px 6px 18px 5px black' ,marginBottom:'5%'}}>
                       
                                        <Card>
        <CardBody>
       
          
        

<h1 style={{textAlign:'center'}}><span style={{borderBottom:'2px solid black'}}>Crime Type</span><br/>{value1.CrimeType}</h1>
          <CardTitle style={{textAlign:'center'}}><span style={{borderBottom:'2px solid black'}}>Victim's Name</span><br/>{value1.posterName}</CardTitle>
          <CardTitle style={{textAlign:'center'}}><span style={{borderBottom:'2px solid black'}}>Victim's Cellno</span><br/>{value1.posterCellno}</CardTitle>
          <CardTitle style={{textAlign:'center'}}><span style={{borderBottom:'2px solid black'}}>Victim's Email</span><br/>{value1.posterEmail}</CardTitle>
          
<br />
          
          <CardText style={{textAlign:'center'}}><h4>Description</h4>{value1.CrimeDescription}</CardText>
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


export default CrimeReports;