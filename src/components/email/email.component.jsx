import React from "react";
import "./email.styles.css";

const Email = ({ email }) => {
    if (!email) {
        return <div>Loading...</div>;
    }

    return (
        <div className="email">
            <div className="email__details">
                <span className="email__from">{email.from}</span>
                <span className="email__subject">{email.subject}</span>
                <span className="email__address">{email.address}</span>
                <span className="email__timestamp">{email.time}</span>
            </div>
            <p className="email__message">{email.message}</p>
        </div>
    );
}

export default Email;
