import React, { Component } from 'react';
import './App.css';
import Formboilerplate2 from './form2'
import fire from './fire'
import Modalcomp from './modal'

import { browserHistory } from 'react-router'



import { Container, Row, Col,Button } from 'reactstrap';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      modal: false,
      modalerrortext: '',
      modaltitle: ''
    }
  }

   toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  emailonchange(value1) {
    this.setState({
      email: value1.target.value
    })

  }
  passwordonchange(value2) {
    this.setState({
      password: value2.target.value
    })
  }
  buttonfunction = () => {
    let database = fire.database().ref("/")
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(function (success) {
      
    database.child('user/' + success.uid).once("value", function (snapshot) {

        localStorage.setItem("user2", JSON.stringify(snapshot.val()))            
      })
      .then((success)=>{
        browserHistory.replace('/home')
    })
  })
       

      .catch((error) => {
        // Handle Errors here.
        let errorCode = error.code;
        if (this.state.email === "" || this.state.password === "") {
          this.setState({
            modalerrortext: 'Please enter both email and password',
            modaltitle: 'Error',
            modal: true,

          })
        }
        else if (errorCode === 'auth/wrong-password') {
          this.setState({
            modalerrortext: 'Your Password is wrong',
            modaltitle: 'Error',
            modal: true,

          })


        }
        else {
          this.setState({
            modalerrortext: 'There is no user record related to your email',
            modaltitle: 'Error',
            modal: true,

          })
        }
      })
  }
  render() {
    return (
      <Container>

        <Row>

          <Col sm={{ size: 6, offset: 3 }}>
            <div style={{ minHeight: '250px', padding: '10% 5%', position: 'relative', top: '30px', backgroundColor: 'white', boxShadow: '0px 6px 18px 5px black' }}>


              <Formboilerplate2 buttonfunction={() => this.buttonfunction()}
                emailplaceholder="Enter email" passwordplaceholder="Enter password"
                buttontext="Sign In" text="SIGN IN TO LAUNCH REPORTS" small="Dont have an account?"
                emailonchange={(value1) => this.emailonchange(value1)}
                passwordonchange={(value2) => this.passwordonchange(value2)
                }
                Changepath='/Clientsignup'
              />
              <div style={{marginTop:'4%'}}>
<Button style={{width:'40%',height:'50px'}} color="danger"  onClick={()=>browserHistory.push('/MissingPerson')}>Missing Person Reports</Button>
<Button style={{float:'right',width:'43%',height:'50px'}} color="danger" onClick={()=>browserHistory.push('/CrimeReports')}>Crime Reports</Button>
</div>
            </div>

          </Col>
        </Row>
        <Modalcomp modalstate={this.state.modal} modalerrortext={this.state.modalerrortext} togglefunc={this.toggle} modaltitle={this.state.modaltitle} />

      </Container>

    );
  }
}

export default Signin;