import React from "react";
import "./searchBar.styles.css";

const SearchBar = ({ placeholder, handleInput }) => (
    <input
        className="search-bar"
        type="search"
        placeholder={placeholder}
        onChange={handleInput}
        // onClick={handleInput} *** important for assignment
    />
);

export default SearchBar;
