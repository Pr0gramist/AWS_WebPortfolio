import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//Components
import Landing from './components/landingComponent/landing.js';
import Header from './components/headerComponent/header.js';
import Footer from './components/footerComponent/footer.js';
import Homepage from './components/pages/homePage.js';
import Contact from './components/pages/contactPage.js';
import Thankspage from './components/pages/thanksPage.js';
import Loadingpage from './components/pages/loadingPage.js';
import Errorpage from './components/pages/errorPage.js';
import Certification from './components/pages/certificationPage.js';


//Includes
import './Assets/css/default.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Landing />
          <Header />
            <Route exact path='/' component={Homepage} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/Thanks' component={Thankspage} />
            <Route exact path='/Loading' component={Loadingpage} />
            <Route exact path='/Error' component={Errorpage} />
            <Route exact path='/Certification' component={Certification} />
          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;