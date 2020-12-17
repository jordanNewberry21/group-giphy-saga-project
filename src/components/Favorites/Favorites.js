import React, { Component } from 'react';
import {connect} from 'react-redux';

class Favorites extends Component {
  render() {
    return (
      <div>
        <h2>hello from Favorites component</h2>
      </div>
    ); // end return
  } // end render
} // end class

export default connect()(Favorites);
