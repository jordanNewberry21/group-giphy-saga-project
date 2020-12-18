import React, { Component } from 'react';
import SearchItem from '../SearchItem/SearchItem';
class SearchList extends Component {
  render() {
    return (
      <div>
        <h2>Search Results</h2>
        <SearchItem />
      </div>
    ); // end return
  } // end render
} // end class

export default SearchList;
