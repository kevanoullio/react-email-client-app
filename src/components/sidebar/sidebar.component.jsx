import React from "react";

const Sidebar = () => (
    <aside className="sidebar">
    <ul>
        <button onClick={() => onButtonClick("inbox")}>Inbox</button>
        <button onClick={() => onButtonClick("trash")}>Trash</button>
    </ul>
    </aside>
);

export default Sidebar;
