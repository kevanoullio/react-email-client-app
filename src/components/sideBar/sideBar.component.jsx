import React from "react";
import "./sideBar.styles.css";

const SideBar = ({ onButtonClick }) => (
    <aside className="side-bar">
    <ul>
        <button onClick={() => onButtonClick("inbox")}>Inbox</button>
        <button onClick={() => onButtonClick("trash")}>Trash</button>
    </ul>
    </aside>
);

export default SideBar;
