import React, { useState } from "react";
import "./sideBar.styles.css";

/**
 * Function to render the SideBar component
 * @param {Object} props - Object representing the component properties
 * @returns 
 */
const SideBar = ({ onButtonClick }) => {
    const [activeButton, setActiveButton] = useState("inbox");

    /**
     * Function to handle the button click
     * @param {String} buttonName - String representing the button name
     */
    const handleButtonClick = (buttonName) => {
        onButtonClick(buttonName);
        setActiveButton(buttonName);
    };

    /**
     * Render the SideBar component
     */
    return (
        <aside className="side-bar">
            <button
                id="button-inbox"
                className={activeButton === "inbox" ? "active" : ""} 
                onClick={() => handleButtonClick("inbox")}
            >
                Inbox
            </button>
            <button
                id="button-trash"
                className={activeButton === "trash" ? "active" : ""} 
                onClick={() => handleButtonClick("trash")}
            >
                Trash
            </button>
        </aside>
    );
}

export default SideBar;
