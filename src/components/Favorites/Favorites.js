import React, { Component } from 'react';
import {connect} from 'react-redux';

class Favorites extends Component {
  render() {
    return (
      <div>
        <h2>Favorite GIFs</h2>
        <p>{JSON.stringify(this.props.reduxState.favorites)}</p>
        <div>
            {this.props.reduxState.favorites.map(img => 
                <div>
                    <img key={img.id} src={img.url} alt="favorite gif"/>
                </div>)}
        </div>
      </div>
    ); // end return
  } // end render
} // end class

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });

export default connect(mapReduxStateToProps)(Favorites);
