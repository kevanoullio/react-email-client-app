import React from "react";
import Email from "../email/email.component";
import "./emailList.styles.css";

const EmailList = ({ emails, view }) => {
    if (!emails) {
        return <div>Loading...</div>;
    }

    const filteredEmails = emails.filter(email => email.deleted === (view === "inbox" ? false : true));

    return (
        <div className="email-list">
            {filteredEmails.map(email => (
                <Email key={email.id} email={email} />
            ))}
        </div>
    );
}
    

export default EmailList;
