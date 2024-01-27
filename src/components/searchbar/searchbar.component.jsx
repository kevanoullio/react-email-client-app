import React from "react";
import "./searchbar.styles.css";

const SearchBar = ({ placeholder, handleInput }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleInput}
        // onClick={handleInput} *** important for assignment
    />
);

export default SearchBar;
