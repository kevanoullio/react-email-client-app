import React, { useEffect } from "react";
import "./email.styles.css";

/**
 * Function to render the Email component
 * @param {Object} email - Object representing the email 
 * @returns The Email component
 */
const Email = ({ email }) => {
    // If no email is selected, return a placeholder message
    if (!email) {
        return <p id="no-email-selected">No email selected yet...</p>;
    }

    /**
     * Return the Email component
     */
    return (
        <div id="email-body-item">
            <div id="email-details">
                <div id="email-from">From: {email.from}</div>
                <div id="email-subject">Subject: {email.subject}</div>
                <div id="email-address">Address: {email.address}</div>
                <div id="email-timestamp">Time: {email.time}</div>
            </div>
            <p id="email-message">Message: {email.message}</p>
        </div>
    );
}

export default Email;
