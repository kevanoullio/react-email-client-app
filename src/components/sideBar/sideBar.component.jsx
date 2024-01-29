import React, { useState } from "react";
import "./sideBar.styles.css";

const SideBar = ({ onButtonClick }) => {
    const [activeButton, setActiveButton] = useState("inbox");

    const handleClick = (buttonName) => {
        onButtonClick(buttonName);
        setActiveButton(buttonName);
    };

    return (
        <aside className="side-bar">
            <button
                id="button-inbox"
                className={activeButton === "inbox" ? "active" : ""} 
                onClick={() => handleClick("inbox")}
            >
                Inbox
            </button>
            <button
                id="button-trash"
                className={activeButton === "trash" ? "active" : ""} 
                onClick={() => handleClick("trash")}
            >
                Trash
            </button>
        </aside>
    );
}

export default SideBar;
