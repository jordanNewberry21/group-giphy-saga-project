import React, { Component } from 'react';
import {connect} from 'react-redux';

class Favorites extends Component {
  render() {
    return (
      <div>
        <h2>Favorite GIFs</h2>
        <div>
            {this.props.reduxState.favorites.map(img => 
                <div>
                    <img key={img.id} src={img.url} alt="favorite gif"/>
                    <label for = "category">Classify a category</label>
                    <select name="category">
                      <option value ="funny">Funny</option>
                      <option value="cohort">Cohort</option>
                      <option value="cartoon">Cartoon</option>
                      <option value="nsfw">NSFW</option>
                      <option value="meme">Meme</option>
                    </select>
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
