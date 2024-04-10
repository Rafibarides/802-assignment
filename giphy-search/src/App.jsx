import React, { useState, useEffect } from 'react';
import GifContainer from './components/GifContainer';
import GifSearch from './components/GifSearch';
import API_KEY from './config';
import { handleFetch } from './utils';

const App = () => {
  const [gifs, setGifs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchTrendingGifs = async () => {
      const [data, error] = await handleFetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`);
      if (!error) {
        setGifs(data.data);
      }
    };
    fetchTrendingGifs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [data, error] = await handleFetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchQuery}&limit=3&rating=g`);
    if (!error) {
      setGifs(data.data);
    }
  };

  return (
    <div>
      <GifSearch setSearchQuery={setSearchQuery} handleSubmit={handleSubmit} />
      <GifContainer gifs={gifs} />
    </div>
  );
};

export default App;
