import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';
import Header from '../Header/Header';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <nav>
            <ul>
              <li>
                <Link to='/'>Search</Link>
              </li>
              <li>
                <Link to='/favorites'>Favorites</Link>
              </li>
            </ul>
          </nav>
          <Route exact path='/' component={Search} />
          <Route path='/favorites' component={Favorites} />
        </Router>
      </div>
    );
  }
}

export default App;
