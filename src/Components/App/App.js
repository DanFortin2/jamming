import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist'

class App extends React.Component {
  constructor(props) {
    super(props);
    //hardocded search results state and then search results set to an object wtih the JSON response values
    this.state = {
      searchResults: [{
        name: 'test',
        artist: 'test',
        album: 'test',
        id: '1'}],
      playlistName: 'my playlist',
      playlistTracks: [{
        name: 'test',
        artist: 'test',
        album: 'test',
        id: '2'}]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  //add track from search list, first check to see if the song ID matches a current song ID in the list if so do nothing.
  //If it doesnt match then push that song to the playlist box
  addTrack(track) {
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      let addedTrack = this.state.playlistTracks;
      addedTrack.push(track);
      this.setState({
        playlistTracks: addedTrack
      });
    }
  }

  //removed selected track using filter based off the track id
  removeTrack(track) {
    let removeTrackItem = this.state.playlistTracks.filter(removedTrack => removedTrack.id !== track.id);
      this.setState({
        playlistTracks: removeTrackItem
      });
  }

  //passed the state of the search Results of app to search reults component
 //passed in from the state to the playlist component
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
           <SearchBar />
          <div className="App-playlist">
           <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
           <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
