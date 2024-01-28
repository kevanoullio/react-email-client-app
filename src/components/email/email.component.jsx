import React, { useEffect } from "react";
import "./email.styles.css";

const Email = ({ email }) => {
    useEffect(() => {
        if (email) {
            console.log(email);
        }
    }, [email]);

    if (!email) {
        return <div>Loading...</div>;
    }

    return (
        <div className="email">
            <div id="email-details">
                <span id="email-from">From: {email.from}</span>
                <span id="email-subject">Subject: {email.subject}</span>
                <span id="email-address">Address: {email.address}</span>
                <span id="email-timestamp">Time: {email.time}</span>
            </div>
            <p id="email-message">Message: {email.message}</p>
        </div>
    );
}

export default Email;
