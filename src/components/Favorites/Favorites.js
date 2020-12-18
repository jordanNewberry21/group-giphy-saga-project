import React, { Component } from 'react';
import {connect} from 'react-redux';

class Favorites extends Component {

  componentDidMount() {
    this.props.dispatch({type: 'FETCH_FAVORITES'});
  }

  submit = (e, id) => {
    let payload = { category_id: e.target.value, img_id: id};
    this.props.dispatch({type: 'FETCH_CATEGORIES', payload: payload});
  }

  render() {
    return (
      <div>
        <h2>Favorite GIFs</h2>
        <div>
            {this.props.reduxState.favorites.map(img => 
                <div>
                    <img key={img.id} src={img.url} alt="favorite gif"/>
                    <label for = "category">Classify a category</label>
                    <select onChange={(e) => this.submit(e, img.id)} name="category">
                      <option value ="funny">Funny</option>
                      <option value="cohort">Cohort</option>
                      <option value="cartoon">Cartoon</option>
                      <option value="nsfw">NSFW</option>
                      <option value="meme">Meme</option>
                    </select>
                    {/* <button onClick={this.submit}></button> */}
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
