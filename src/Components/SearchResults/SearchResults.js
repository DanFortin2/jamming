import React from 'react';
import './SearchResults.css'
import TrackList from '../TrackList/TrackList'

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        //passed the searchResults results from the search componenet to the tracklist component
        <TrackList tracks={this.props.searchResults}/>
      </div>
    );
  }
}

export default SearchResults;
