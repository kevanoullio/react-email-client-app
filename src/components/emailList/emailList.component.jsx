import React, { useState } from "react";
import "./emailList.styles.css";

const EmailList = ({ emails, view, onSelectEmail, markAsRead, markAsUnread, deleteEmail, restoreEmail }) => {
    const filteredEmails = emails.filter(email => email.deleted === (view === "inbox" ? false : true));
    const [activeEmail, setActiveEmail] = useState(null);

    const handleClick = (email) => {
        onSelectEmail(email);
        setActiveEmail(email.id);
        markAsRead(email.id);
    };

    if (!emails) {
        return <div>No email selected...</div>;
    }

    return (
        <div id="email-list">
            {filteredEmails.map(email => (
                <div
                    id="email-list-item"
                    key={email.id}
                    className={`email-item ${activeEmail === email.id ? "active" : ""} ${!email.read ? "unread" : ""}`}
                    onClick={() => handleClick(email)}
                >
                    <div 
                        id="email-details" key={email.id}
                        onClick={() => onSelectEmail(email)}
                    >
                        <div id="email-from">From: {email.from}</div>
                        <div id="email-subject">Subject: {email.subject}</div>
                        <div id="email-address">Address: {email.address}</div>
                        <div id="email-timestamp">Time: {email.time}</div>
                    </div>
                    {email.read ? (
                        <img
                            id="unread"
                            src="/assets/icons/email-unread-icon.png"
                            alt="email unread icon"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent making the email item active onClick
                                markAsUnread(email.id);
                            }}
                        />
                    ) : (
                        <img
                            id="read"
                            src="/assets/icons/email-read-icon.png"
                            alt="email read icon"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent making the email item active onClick
                                markAsRead(email.id);
                            }} 
                        />
                    )}
                    {email.deleted ? (
                        <img 
                            id="restore-email" 
                            src="/assets/icons/restore-email-icon.png" 
                            alt="restore email icon" 
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent making the email item active onClick
                                restoreEmail(email.id);
                            }}
                        />
                    ) : (
                        <img 
                            id="trash-can" 
                            src="/assets/icons/trash-can-icon.png" 
                            alt="trash can icon" 
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent making the email item active onClick
                                deleteEmail(email.id);
                            }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
} 

export default EmailList;
