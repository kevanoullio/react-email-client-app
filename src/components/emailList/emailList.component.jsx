import React, { useState } from "react";
import "./emailList.styles.css";

const EmailList = ({ emails, view, onSelectEmail }) => {
    const filteredEmails = emails.filter(email => email.deleted === (view === "inbox" ? false : true));
    const [activeEmail, setActiveEmail] = useState(null);

    const handleClick = (email) => {
        onSelectEmail(email);
        setActiveEmail(email.id);
    };

    if (!emails) {
        return <div>No email selected...</div>;
    }

    return (
        <div id="email-list">
            {filteredEmails.map(email => (
                <div
                    id="email-item"
                    key={email.id}
                    className={`email-item ${activeEmail === email.id ? "active" : ""}`}
                    onClick={() => handleClick(email)}
                >
                    <div id="email-details" key={email.id} onClick={() => onSelectEmail(email)}>
                        <div id="email-from">From: {email.from}</div>
                        <div id="email-subject">Subject: {email.subject}</div>
                        <div id="email-address">Address: {email.address}</div>
                        <div id="email-timestamp">Time: {email.time}</div>
                    </div>
                    <img id="trash-can" src="/assets/icons/trash-can-icon.png" alt="trash can icon" />
                </div>
            ))}
        </div>
    );
} 

export default EmailList;
