import React, { useEffect } from "react";
import "./email.styles.css";

const Email = ({ email }) => {
    useEffect(() => {
        if (email) {
            console.log(email);
        }
    }, [email]);

    if (!email) {
        return <p id="no-email-selected">No email selected yet...</p>;
    }

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
