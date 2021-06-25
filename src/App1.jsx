import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap@5.0.2/dist/css/bootstrap.min.css';
// import 'bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
const App1 = () => {
  return (
    <>
      <Navbar />
      {/* switch is liye use kr rhe taki multiple page me se koi ek hi page dikhega jo match 
    ho jae */}
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Home />  ab iski need nhi hia hum route ha use kr ke path define krdege. */}
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App1;