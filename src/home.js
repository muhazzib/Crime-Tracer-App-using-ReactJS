import React, { Component } from 'react';
import './App.css';
import Navbarcomp from './Navbar'
import { browserHistory } from 'react-router'
import fire from './fire'
import { changervalue } from './form3'
import Modalcomp from './modal'

import { Container } from 'reactstrap';


let database = fire.database().ref("/")


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      name: '',
      email: '',
      number: '',
      DepartName: '',
      DepartDescription: '',
      MissingPersonName: '',
      MissingPersonAge: '',
      MissingPersonDate: '',
      MissingPersonDescription: '',
      CrimeDate: '',
      CrimeDescription: '',
      CrimeType:'',
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
  buttonfunction = () => {
    if (this.state.name !== '' && this.state.number !== '' && this.state.email !== '') {

      if (changervalue === 1) {
        if (this.state.MissingPersonAge !== '' && this.state.MissingPersonName !== '' && this.state.MissingPersonDate !== '' && this.state.MissingPersonDescription !== '') {

          let obj={
  MissingPersonName:this.state.MissingPersonName,
  MissingPersonAge:this.state.MissingPersonAge,
  MissingPersonDate:this.state.MissingPersonDate,
  MissingPersonDescription:this.state.MissingPersonDescription,
  posterName:this.state.name,
  posterEmail:this.state.email,
  posterCellno:this.state.number
}
database.child('MissingPersons').push(obj).then((success)=>{
  this.setState({
    modalerrortext: 'Your Complain has been submited',
    modal: true,
    MissingPersonName:"",
    MissingPersonAge:"",
    MissingPersonDate:"",
    MissingPersonDescription:"",
    posterName:"",
    posterEmail:"",
    posterCellno:""
  })
}).then((success)=>{
setTimeout(()=>{
  window.location.reload()
},2000)
})
       
        }
        else {
          this.setState({
            modalerrortext: 'Please fill out all the fields',
            modal: true,

          })
        }
      }
      else if (changervalue === 2) {
        if (this.state.DepartName !== '' && this.state.DepartDescription !== '') {
          let obj={
            DepartName:this.state.DepartName,
            DepartDescription:this.state.DepartDescription,
            posterName:this.state.name,
            posterEmail:this.state.email,
            posterCellno:this.state.number
          }
          database.child('user').child(this.state.username.useruid).child('DepartmentComplain').push(obj).then((success)=>{
            this.setState({
              modalerrortext: 'Your Complain has been submited',
              modal: true,
              DepartName:"",
              DepartDescription:"",
              posterName:"",
              posterEmail:"",
              posterCellno:""
            })
          }).then((success)=>{
            setTimeout(()=>{
              window.location.reload()
            },2000)
            })
        }
        else {
          this.setState({
            modalerrortext: 'Please fill out all the fields',
            modal: true,

          })
        }
      }
      else if (changervalue === 3) {
        if (this.state.CrimeDate !== '' && this.state.CrimeDescription !== '' !== '' && this.state.CrimeType !== '') {
          let obj={
            CrimeDate:this.state.CrimeDate,
            CrimeDescription:this.state.CrimeDescription,
            CrimeType:this.state.CrimeType,
            posterName:this.state.name,
            posterEmail:this.state.email,
            posterCellno:this.state.number
          }
          database.child('CrimeReports').push(obj).then((success)=>{
            this.setState({
              modalerrortext: 'Your Complain has been submited',
              modal: true,
              CrimeDate:"",
              CrimeDescription:"",
              CrimeType:"",
              posterName:"",
              posterEmail:"",
              posterCellno:""
            })
          }).then((success)=>{
            setTimeout(()=>{
              window.location.reload()
            },2000)
            })
        }
        else {
          this.setState({
            modalerrortext: 'Please fill out all the fields',
            modal: true,

          })
        }
      }
      else {
        this.setState({
          modalerrortext: 'Please select complain type',
          modal: true,

        })
      }

    }

    else {
      this.setState({
        modalerrortext: 'Please fill out all the fields',
        modal: true,

      })
    }
  }


  componentWillMount() {
    let userobject = localStorage.getItem('user2')
    userobject = JSON.parse(userobject);
    if (userobject == null) {
      browserHistory.push('/')
    }
    else {
      this.setState({
        username: userobject
      })
    }
  }
  signout = () => {
    fire.auth().signOut().then(function () {
      localStorage.removeItem('user2')
    }).then((success) => {
      browserHistory.replace('/')
    });
  }

  emailonchange(value1) {
    this.setState({
      email: value1.target.value
    })

  }


  nameonchange = (value1) => {
    this.setState({
      name: value1.target.value
    })

  }

  numberonchange = (value1) => {
    this.setState({
      number: value1.target.value
    })

  }



  MissingPersonAgeOnchange = (value1) => {

    this.setState({
      MissingPersonAge: value1.target.value,
      DepartName: '',
      DepartDescription: '',

      CrimeDate: '',
      CrimeDescription: '',
    })

  }

  MissingPersonDateOnchange = (value1) => {
    this.setState({
      MissingPersonDate: value1.target.value,
      DepartName: '',
      DepartDescription: '',

      CrimeDate: '',
      CrimeDescription: ''
    })

  }

  MissingPersonNameOnchange = (value1) => {
    this.setState({
      MissingPersonName: value1.target.value,
      DepartName: '',
      DepartDescription: '',

      CrimeDate: '',
      CrimeDescription: ''
    })

  }

  MissingPersondescriptiononchange = (value1) => {
    this.setState({
      MissingPersonDescription: value1.target.value,
      DepartName: '',
      DepartDescription: '',

      CrimeDate: '',
      CrimeDescription: '',
    })
  }


  DepartNameOnchange = (value1) => {
    this.setState({
      DepartName: value1.target.value,
      MissingPersonName: '',
      MissingPersonAge: '',
      MissingPersonDate: '',
      MissingPersonDescription: '',


      CrimeDate: '',
      CrimeDescription: '',
    })

  }
  DepartComplaindescriptiononchange = (value1) => {
    this.setState({
      DepartDescription: value1.target.value,
      MissingPersonName: '',
      MissingPersonAge: '',
      MissingPersonDate: '',
      MissingPersonDescription: '',


      CrimeDate: '',
      CrimeDescription: '',
    })
  }

  CrimeIncidentDateOnchange = (value1) => {
    this.setState({
      CrimeDate: value1.target.value,
      MissingPersonName: '',
      MissingPersonAge: '',
      MissingPersonDate: '',
      MissingPersonDescription: '',
      DepartName: '',
      DepartDescription: '',
    })

  }


  CrimeLocationOnchange = (value1) => {
    this.setState({
      CrimeLocation: value1.target.value,
      MissingPersonName: '',
      MissingPersonAge: '',
      MissingPersonDate: '',
      MissingPersonDescription: '',
      DepartName: '',
      DepartDescription: '',
    })

  }
  Crimedescriptiononchange = (value1) => {
    this.setState({
      CrimeDescription: value1.target.value,
      MissingPersonName: '',
      MissingPersonAge: '',
      MissingPersonDate: '',
      MissingPersonDescription: '',
      DepartName: '',
      DepartDescription: '',
    })
  }

  CrimeTypeOnchange = (value1) => {
    this.setState({
      CrimeType: value1.target.value,
      MissingPersonName: '',
      MissingPersonAge: '',
      MissingPersonDate: '',
      MissingPersonDescription: '',
      DepartName: '',
      DepartDescription: '',
    })

  }

  launchcomplain=()=>{
browserHistory.push('/home/SubmitComplain')  }
  render() {
    return (

      <div>
        <div style={{ borderBottom: '1px solid black', backgroundColor: 'white' }}>
          <Navbarcomp Navtext={this.state.username.name} navpath='/home' myprofilepath='/myprofile' signoutfunc={() => this.signout()} />
        </div>
        <Container>

            {
              this.props.children
            }
         
          <Modalcomp modalstate={this.state.modal} modalerrortext={this.state.modalerrortext} togglefunc={this.toggle} modaltitle={this.state.modaltitle} />

        </Container>

      </div>

    )
  }
}


export default Home;