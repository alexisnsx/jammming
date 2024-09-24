import './App.css';

// importing components
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  return (
    <div className="App">
      <header className='navbar'>
        <h1>Jammming</h1>
      </header>
      <SearchBar />
      <SearchResults />
    </div>
  );
}

export default App;
