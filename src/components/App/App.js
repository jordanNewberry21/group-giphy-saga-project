import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom'; 
import '../../components/Search/Search';
import '../../components/Favorites/Favorites';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <Router>
          <nav>
            <ul>
              <li><Link to="/">Search</Link></li>
              <li><Link to="/favorites">Favorites</Link></li>
            </ul>
          </nav>

          <Route exact path="/" component={Search}/>
          <Route path="/favorites" component={Favorites}/>
        </Router>
      </div>
    );
  }
}

export default App;
