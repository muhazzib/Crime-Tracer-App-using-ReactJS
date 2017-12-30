import React, { Component, } from 'react';
import './App.css';
import Formboilerplate from './form'
import fire from './fire'
import Modalcomp from './modal'
import {Container, Row, Col, Button} from 'reactstrap';
import {browserHistory} from 'react-router'





// npm i --save react-router@3
// this command is use to configue react routing in react app of version 3



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name:'',
      password: "",
      modal: false,
      modalerrortext: '',
      modaltitle:''

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
  nameonchange(value1){
    this.setState({
      name: value1.target.value
    })
  }
  passwordonchange(value2) {
    this.setState({
      password: value2.target.value
    })
  }


  buttonfunction = () => {
    let database = fire.database().ref("/")
    let user = {
      name:this.state.name,
      email: this.state.email,
      password: this.state.password
    }


    fire.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        user.useruid = res.uid;
        database.child("user/" + res.uid).set(user)
          .then((success) => {
            this.setState({
              modalerrortext: 'Your Account has successfully been created',
              modaltitle:'Success',
              modal: true,
            })
          })
          .then(function (success) {
            fire.auth().signInWithEmailAndPassword(user.email,user.password) 
            .then(function (success) {
              
            database.child('user/' + success.uid).once("value", function (snapshot) {
    
                localStorage.setItem("user2", JSON.stringify(snapshot.val()))            
              })
              .then((success)=>{
                browserHistory.replace("/home")

            })
          })
          
    
            })
      })
      .catch((error) => {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        if (this.state.email === "" || this.state.password === ""||this.state.name === "") {
          this.setState({
            modalerrortext: 'Please Enter All Fields',
            modaltitle:'Error',
            modal: true,
            
          })
        }
        else if (errorCode === 'auth/weak-password') {
          this.setState({
            modalerrortext: 'Password is too weak',
            modaltitle:'Error'  ,
            modal: true,
            
          })
        } else if (errorCode === 'auth/invalid-email') {
          this.setState({
            modalerrortext: "Please enter valid email",
            modaltitle:'Error',
            modal: true,
            
          })
        }
        else {
          this.setState({
            modalerrortext: errorMessage,
            modaltitle:'Error',
            modal: true,
            
          })
        }
        console.log(error);
      })

  }
  signupclientfunc=()=>{
    browserHistory.push('/ServiceProviderSignup')
  }
 
  render() {
    return (
      <Container>

                <Row>

                    <Col sm={{ size: 6, offset: 3 }}>
                        <div style={{ minHeight: '250px', padding: '10% 5%', position: 'relative', top: '30px', backgroundColor: 'white',boxShadow:'0px 6px 18px 5px black'}}>


                <Formboilerplate buttonfunction={() => this.buttonfunction()}
                nameplaceholder='Username'
                nameonchange={(value1) => this.nameonchange(value1)}
                 emailplaceholder="New email" passwordplaceholder="Create password"
                 buttontext="Sign Up" text="SIGN UP TO LAUNCH REPORTS"
               emailonchange={(value1) => this.emailonchange(value1)}
                  passwordonchange={(value2) => this.passwordonchange(value2)}
                 formstyle={{marginBottom:'3%'}}
                 small="Already have an account?"
                 Changepath={'/'}
              />
              <div style={{marginTop:'4%'}}>
<Button style={{width:'40%',height:'50px'}} color="danger" onClick={()=>browserHistory.push('/MissingPerson')}>Missing Person Reports</Button>
<Button style={{float:'right',width:'43%',height:'50px'}} color="danger" onClick={()=>browserHistory.push('/CrimeReports')}>Crime Reports</Button>
</div>
                        </div>

                    </Col>
                </Row>
                <Modalcomp modalstate={this.state.modal} modalerrortext={this.state.modalerrortext} togglefunc={this.toggle} modaltitle={this.state.modaltitle}/>
            </Container>        

    );
  }
}

export default App;
