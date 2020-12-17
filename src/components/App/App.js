import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';
import Header from '../Header/Header';
import { Tab, Tabs, AppBar } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
});
class App extends Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <Router>
          <Header />
          {/* ADD FOCUS FIXING  */}
          <AppBar position='static'>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor={'secondary'}
              aria-label='navigation bar with search and favorites tabs'
              centered
            >
              <Tab label='Search' to='/' component={Link} />
              <Tab label='Favorites' to='favorites' component={Link} />
            </Tabs>
          </AppBar>
          <Switch>
            <Route exact path='/' component={Search} />
            <Route path='/favorites' component={Favorites} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);
