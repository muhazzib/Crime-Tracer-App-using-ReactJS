import React, { Component } from 'react';
import './App.css';
import { browserHistory } from 'react-router'

import { Container, Row, Col, Button} from 'reactstrap';




class Homebuttons extends Component {
    launchcomplain=()=>{
        browserHistory.push('/home/SubmitComplain') 
     }


     mycomplain=()=>{
        browserHistory.push('/home/mycomplain') 
     }
     

     publiccomplain=()=>{
       window.open('/MissingPerson','_blank')
   }

   crimereport=()=>{
    window.open('/CrimeReports','_blank')
}
   
     



   
  render() {
    return (

      <div>
          <Container>
        <Row>

            <Col sm={{ size: 8, offset: 4 }}>
            <div style={{textAlign:'center',marginTop:'12%'}}>
            <Button color="light"   onClick={()=>this.launchcomplain()} style={{margin:'2%',padding:'2%',display:'block',width:'45%'}}>Launch Complaint</Button>
            <Button color="light"    onClick={()=>this.mycomplain()} style={{margin:'2%',padding:'2%',display:'block',width:'45%'}}>My Complaints</Button>
            <Button color="light"   onClick={()=>this.publiccomplain()} style={{margin:'2%',padding:'2%',display:'block',width:'45%'}}>Missing Persons</Button>
            <Button color="light"   onClick={()=>this.crimereport()} style={{margin:'2%',padding:'2%',display:'block',width:'45%'}}>Crime Reports</Button>
            
            
            </div>
            

            </Col>
          </Row>
          </Container>

      </div>

    )
  }
}


export default Homebuttons;