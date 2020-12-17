import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchItem extends Component{

    render(){
        return(
            <div>
                <ul>
                    {this.props.reduxState.searchString.map(img => <img key={img.id} src={img.images.original.url}/>)}
                </ul>
            </div>
        ) // end return
    } // end render
} // end class

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });

export default connect(mapReduxStateToProps)(SearchItem);
