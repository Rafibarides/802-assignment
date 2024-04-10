import React from 'react';

const GifContainer = ({ gifs }) => (
  <div className='box'>
    <ul className='gifs-display'>
        {gifs.map((gif) => (
        <li  key={gif.id}><img className='picture' src={gif.images.fixed_height.url} alt={gif.title} /></li>
        ))}
    </ul>
  </div>
);

export default GifContainer;
