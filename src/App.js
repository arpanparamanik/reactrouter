import React from 'react';
import Menu from './Components/Menu';
import About from './Components/About';
import Contact from './Components/Contact';
//import {BrowserRouter as router, Route} from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './Components/Footer';
 
// import logo from './logo.svg';
// import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Menu/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Home" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </Switch>
        <Footer/>
      </div>
    </Router>
    
  );
}

const Home = (params) => {
  return(
      <div className="homeStyle">
          <ul>
              <h2>Welcome to Home Page...</h2>
          </ul>
      </div>
  )
}

export default App;
