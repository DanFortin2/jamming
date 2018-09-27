import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist'

class App extends React.Component {
  constructor(props) {
    super(props);
    //hardocded search results state and then search results set to an object wtih the JSON response values
    this.state = {searchResults: {
      name: '',
      artist: '',
      album: '',
      id: '',
    },
      playlistName: 'my playlist',
      playlistTracks: {
      name: '',
      artist: '',
      album: '',
      id: ''}
    }
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
           <SearchBar />
          <div className="App-playlist">
          //passed the state of the search Results of app to search reults component
           <SearchResults searchResults={this.state.searchResults}/>
           //passed in from the state to the playlist component
           <Playlist playlistName={this.state.playlistName} playlistTrack={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
