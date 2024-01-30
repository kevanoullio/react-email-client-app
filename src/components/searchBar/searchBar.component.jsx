import React from "react";
import "./searchBar.styles.css";
import { type } from "@testing-library/user-event/dist/type";

/**
 * Function to render the SearchBar component
 * @param {String} placeholder - String representing the placeholder text prior to user input
 * @param {String} handleInput - String representing the user input text
 */
const SearchBar = ({ placeholder, handleInput }) => (
    <input
        className="search-bar"
        type="search"
        placeholder={placeholder}
        onChange={handleInput}
    />
);

export default SearchBar;
