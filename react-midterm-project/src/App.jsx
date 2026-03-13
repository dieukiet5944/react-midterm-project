import { useState } from 'react';
import Home from './components/Home';
import AnimeDetails from './components/AnimeDetails';
import moviesData from './data/movies';
import 'antd/dist/reset.css';
import './App.css';

function App() {
  const [movies] = useState(moviesData);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedMovie(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return selectedMovie ? (
    <AnimeDetails
      movie={selectedMovie}
      movies={movies}
      onMovieClick={handleMovieClick}
      onBack={handleBack}
    />
  ) : (
    <Home onMovieClick={handleMovieClick} />
  );
}

export default App;