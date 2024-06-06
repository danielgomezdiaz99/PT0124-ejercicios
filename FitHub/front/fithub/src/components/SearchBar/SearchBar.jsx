import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

export const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input
        type="text"
        placeholder="Buscar artículos..."
        onChange={handleChange}
      />
      
    </div>
  );
};
