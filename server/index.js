const express = require('express');
const path = require('path');
const fetch = require('node-fetch'); 
require('dotenv').config();

const app = express();

app.use(express.static(path.join(__dirname, '..', 'giphy-search', 'dist')));

app.get('/api/gifs', async (req, res) => {
  const searchTerm = req.query.search;
  const apiKey = process.env.API_KEY;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(searchTerm)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Fetch failed with status - ${response.status}, ${response.statusText}`);

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).send('Error fetching from Giphy API');
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
