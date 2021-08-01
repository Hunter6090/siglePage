import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
        {/*}
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary"><Link to={'/'} className="nav-link"> Home </Link></button>
            <button type="button" class="btn btn-secondary">Middle</button>
            <button type="button" class="btn btn-secondary">Right</button>
          </div>
        */}


          <Navbar />
        </div>
      </Router>
    );
  }
}

export default App;
