import './App.css';
import React, {useCallback, useState, useEffect } from 'react';

// importing components
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Spotify from './util/Spotify';


function App() {
  // essentially the individual tracks when we get the results from Spotify API
  // these are the tracks that will get passed into search results, search results supposed to be empty BEFORE searching
  const [searchResults, setSearchResults] = useState([]);
  // the tracks that will get passed into playlist
  // tracks that is already loaded from the search and the + button becomes available to click
  // empty at first, once the '+' button is clicked the array starts to populate
  const [playlistTracks, setPlaylistTracks] = useState([]);
  // to pass onto playlist, to be used during input
  const [playlistName, setPlaylistName] = useState("New Playlist");
  // for audio files
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [currentTrackId, setCurrentTrackId] = useState(null);

  const addTrack = useCallback((track) => {
    if (playlistTracks.some((savedTrack)=> savedTrack.id === track.id))
      return;

    setPlaylistTracks((prevTracks) => [...prevTracks, track])
  },
    [playlistTracks]
  );

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults)
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      updatePlaylistName("New Playlist");
      setPlaylistTracks([]);
    })
  })

  const deleteTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
    prevTracks.filter((currentTrack) => currentTrack.id !== track.id));
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  function play(track) {
    let sound;

    // Find the track from searchResults
    const foundTrack = searchResults.find((t) => t.id === track.id);

    // Check if foundTrack exists before accessing its properties
    if (!foundTrack) {
      window.alert('Track not found');
      return null;
    }

    // Check if the sound/preview is available
    if (!foundTrack.sound) {
      // Pause the currently playing audio (if any) since this track has no sound
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      setIsPlaying(false);
      setCurrentTrackId(null); // Reset current track as there's no valid sound
      window.alert('Sorry, no preview available');
      return;
    } else {
      // If sound is available, assign it to the sound variable
      sound = foundTrack.sound;
    }
     // If there's already an audio object, toggle play/pause
   // If a new track is selected or there is no audio object yet
  // If a new track is selected or there is no audio object yet
  if (!audio || currentTrackId !== track.id) {
    if (audio) {
      // Stop the currently playing audio if there is one
      audio.pause();
      audio.currentTime = 0;
    }

    // Create a new Audio object for the selected track
    const newAudio = new Audio(sound);
    setAudio(newAudio);
    setCurrentTrackId(track.id);  // Set the current track ID to the selected track

    // Play the new track
    newAudio.play();
    setIsPlaying(true);

    // Set up an event listener to reset when the track finishes
    newAudio.onended = () => setIsPlaying(false);
  } else {
    // If the same track is clicked, toggle between play and pause
    if (isPlaying) {
      audio.pause();  // Pause the audio
      setIsPlaying(false);
    } else {
      audio.play();  // Play the audio
      setIsPlaying(true);
    }
  }
};

  // Cleanup the audio when component unmounts or when a new track is played
  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;  // Reset audio position when paused
      }
    };
  }, [audio]);

  return (
    <div className="App">
      <header className='navbar'>
        <h1>Jammming</h1>
      </header>
      <SearchBar search={search}/>
      <div className="app-playlist">
        <SearchResults searchResults={searchResults} onAdd={addTrack} playSound={play} />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onRemove={deleteTrack}
          onNameChange={updatePlaylistName}
          save={savePlaylist}
        />
      </div>
    </div>
  )
}
export default App;
