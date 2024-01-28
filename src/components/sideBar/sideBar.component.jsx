import React from "react";
import "./sideBar.styles.css";

const SideBar = ({ onButtonClick }) => (
    <aside className="side-bar">
        <button onClick={() => onButtonClick("inbox")}>Inbox</button>
        <button onClick={() => onButtonClick("trash")}>Trash</button>
    </aside>
);

export default SideBar;
