import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signin from './signin'
import registerServiceWorker from './registerServiceWorker';
import { Route, Router, browserHistory, IndexRoute } from 'react-router'
import Navcom from './nav'
import Home from './home'
import Submitcomplain from './complain'
import Homebuttons from './homebuttons'
import Mycomplain from './mycomplain'
import MissingPerson from './Missingperson'
import CrimeReports from './crimereports'

const Routing = () => (

  <Router history={browserHistory}>
    <Route path='/' component={Navcom}>
      <IndexRoute component={Signin} />



      <Route path='/MissingPerson' component={MissingPerson} />
      <Route path='/CrimeReports' component={CrimeReports} />
      <Route path='/Clientsignup' component={App} />
    </Route>
    <Route path='/home' component={Home}>

      <IndexRoute component={Homebuttons} />
      <Route path='/home/submitcomplain' component={Submitcomplain} />
      <Route path='/home/mycomplain' component={Mycomplain} />


    </Route>





  </Router>

)
ReactDOM.render(<Routing />, document.getElementById('root'));
registerServiceWorker();
