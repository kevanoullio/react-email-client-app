import React, { useState } from "react";
import "./emailList.styles.css";

/**
 * Function to render the EmailList component
 * @param {Object} emails - Object representing the emails
 * @param {String} view - String representing the view
 * @param {Function} onSelectEmail - Function to select an email
 * @param {Function} markAsRead - Function to mark an email as read
 * @param {Function} markAsUnread - Function to mark an email as unread
 * @param {Function} deleteEmail - Function to delete an email
 * @param {Function} restoreEmail - Function to restore an email
 * @returns The EmailList component
 */
const EmailList = ({ emails, view, onSelectEmail, markAsRead, markAsUnread, deleteEmail, restoreEmail }) => {
    const filteredEmails = emails.filter(email => email.deleted === (view === "inbox" ? false : true));
    const [activeEmail, setActiveEmail] = useState(null);

    /**
     * Function to handle the click event
     * @param {Object} email - Object representing the email
     */
    const handleEmailClick = (email) => {
        onSelectEmail(email);
        setActiveEmail(email.id);
    };

    // If no emails are selected, return a placeholder message
    if (!emails) {
        return <div>No email selected...</div>;
    }

    /**
     * Return the EmailList component
     */
    return (
        <div id="email-list">
            {filteredEmails.map(email => ( // Map through the emails and render the email list
                <div
                    id="email-list-item"
                    key={email.id}
                    className={`email-item ${activeEmail === email.id ? "active" : ""} ${!email.read ? "unread" : ""}`}
                    onClick={() => handleEmailClick(email)}
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
                    {email.read ? ( // If the email is read, display the unread icon
                        <img
                            id="unread"
                            src={process.env.PUBLIC_URL + "/assets/icons/email-unread-icon.png"}
                            alt="email unread icon"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent making the email item active onClick
                                markAsUnread(email.id);
                            }}
                        />
                    ) : ( // If the email is unread, display the read icon
                        <img
                            id="read"
                            src={process.env.PUBLIC_URL + "/assets/icons/email-read-icon.png"}
                            alt="email read icon"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent making the email item active onClick
                                markAsRead(email.id);
                            }} 
                        />
                    )}
                    {email.deleted ? ( // If the email is deleted, display the restore icon
                        <img 
                            id="restore-email" 
                            src={process.env.PUBLIC_URL + "/assets/icons/restore-email-icon.png"}
                            alt="restore email icon" 
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent making the email item active onClick
                                restoreEmail(email.id);
                            }}
                        />
                    ) : ( // If the email is not deleted, display the trash can icon
                        <img 
                            id="trash-can" 
                            src={process.env.PUBLIC_URL + "/assets/icons/trash-can-icon.png"}
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
