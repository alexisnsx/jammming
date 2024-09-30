import './App.css';
import React, {useCallback, useState} from 'react';

// importing components
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';


function App() {
  // essentially the individual tracks when we get the results from Spotify API
  // these are the tracks that will get passed into search results, search results supposed to be empty BEFORE searching
  const [searchResults, setSearchResults] = useState([{
    id: 1,
    song: 'Throne',
    artist: 'Bring Me The Horizon',
    album: 'That\'s the Spirit',
    img: 'https://i.scdn.co/image/ab67616d0000b273413697269620e16f4466f543'
    }, {
      id: 2,
      song: 'second',
      artist: 'Bring Me The Horizon',
      album: 'That\'s the Spirit',
      img: 'https://i.scdn.co/image/ab67616d0000b273413697269620e16f4466f543'
      }]);
  // the tracks that will get passed into playlist
  // tracks that is already loaded from the search and the + button becomes available to click
  // empty at first, once the '+' button is clicked the array starts to populate
  const [playlistTracks, setPlaylistTracks] = useState([]);
  // to pass onto playlist, to be used during input
  const [playlistName, setPlaylistName] = useState("New Playlist");

  const addTrack = useCallback((track) => {
    console.log(track)
    if (playlistTracks.some((savedTrack)=> savedTrack.id === track.id))
      return;

    setPlaylistTracks((prevTracks) => [...prevTracks, track])
  },
    [playlistTracks]
  );


  const deleteTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
    prevTracks.filter((currentTrack) => currentTrack.id !== track.id));
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  return (
    <div className="App">
      <header className='navbar'>
        <h1>Jammming</h1>
      </header>
      <SearchBar />
      <div className="app-playlist">
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onRemove={deleteTrack}
          onNameChange={updatePlaylistName}

        />
      </div>
    </div>
  )
}
export default App;
