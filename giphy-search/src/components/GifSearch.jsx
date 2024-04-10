import React, { useState } from 'react';

const GifSearch = ({ setSearchQuery, handleSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setSearchQuery(e.target.value);
  };

  return (
    <form className='fillout' onSubmit={handleSubmit}>
      <label htmlFor="textInput">Search: </label>
      <input type="text" id="textInput" value={inputValue} onChange={handleInputChange} />
      <button className='button' type="submit">Find Gifs</button>
    </form>
  );
};

export default GifSearch;

