import React from "react";
import Email from "../email/email.component";

const EmailList = ({ emails }) => (
    <div className="email-list">
        {emails.map(email => (
            <Email key={email.id} email={email} />
        ))}
    </div>
);

export default EmailList;
