import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import awsMobile from './aws-exports';
import Amplify from 'aws-amplify';



Amplify.configure(awsMobile);





ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
