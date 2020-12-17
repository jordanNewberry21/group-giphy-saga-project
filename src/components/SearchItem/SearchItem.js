import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchItem extends Component{

    render(){
        return(
            <div>
                <ul>
                    {this.props.reduxState.searchString.map(img => 
                        <li>
                            <img key={img.id} src={img.images.original.url}/>
                            <button onClick={this.props.dispatch({type: SET_FAVORITE, payload: img.images.original.url})}>Favorite</button>
                        </li>
                    )}
                </ul>
            </div>
        ) // end return
    } // end render
} // end class

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });

export default connect(mapReduxStateToProps)(SearchItem);
