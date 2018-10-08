import React, { Component } from 'react';

//Components
import Landing from './components/landingComponent/landing.js';
import Header from './components/headerComponent/header.js';
import Footer from './components/footerComponent/footer.js';
import Homepage from './components/pages/homePage.js';

//Includes
import './Assets/css/default.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <Header />
          <Homepage />
        <Footer />

      </div>
    );
  }
}

export default App;
