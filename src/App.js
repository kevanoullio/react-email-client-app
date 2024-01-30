import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from "./components/sideBar/sideBar.component";
import SearchBar from "./components/searchBar/searchBar.component";
import EmailList from "./components/emailList/emailList.component";
import Email from "./components/email/email.component";
import "./App.css";

/**
 * Main App component
 * @returns {JSX.Element} App component
 */
function App() {
	const [view, setView] = useState("inbox"); // Set default view to inbox
	const [emails, setEmails] = useState([]);
	const [filteredEmails, setFilteredEmails] = useState([]);
	const [selectedEmail, setSelectedEmail] = useState(null);
	const [searchInput, setSearchInput] = useState("");

	/**
	 * Function to handle view button click
	 * @param {String} view - String representing the view
	 */
	const onViewButtonClick = (view) => {
		setView(view);
	}

	/**
	 * Function to handle email selection
	 * @param {Object} email - Object representing the email
	 */
	const onSelectEmail = (email) => {
		setSelectedEmail(email);
		markAsRead(email.id);
	};

	/**
	 * Function to mark email as read
	 * @param {String} emailId - String representing the email id
	 */
	const markAsRead = (emailId) => {
		setEmails(emails.map(email => 
			email.id === emailId ? { ...email, read: true } : email
		));
	}
	
	/**
	 * Function to mark email as unread
	 * @param {String} emailId - String representing the email id
	 */
	const markAsUnread = (emailId) => {
		setEmails(emails.map(email => 
			email.id === emailId ? { ...email, read: false } : email
			));
	}

	/**
	 * Function to delete email
	 * @param {String} id - String representing the email id
	 */
	const deleteEmail = (id) => {
		const updatedEmails = emails.map(email => {
			if (email.id === id) {
				return {
					...email,
					deleted: true
				};
			}
			return email;
		});

		setEmails(updatedEmails);
	}

	/**
	 * Function to restore email from deleted state
	 * @param {String} id - String representing the email id
	 */
	const restoreEmail = (id) => {
		const updatedEmails = emails.map(email => {
			if (email.id === id) {
				return {
					...email,
					deleted: false
				};
			}
			return email;
		});

		setEmails(updatedEmails);
	}

	/**
	 * Function to handle search input change
	 * @param {Object} e - Object representing the event
	 */
	const handleSearchInputChange = e => {
		setSearchInput(e.target.value)
	};

	/**
	 * Fetch emails from the API
	 */
	useEffect(() => {
		const fetchEmails = async () => {
			const response = await axios(
				"https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json"
			);

			const emailsWithDeleted = response.data.map(email => ({
				...email,
				read: email.read === "true",
				deleted: false
			}));

			setEmails(emailsWithDeleted);
		}
		fetchEmails();
	}, []);

	/**
	 * Filter emails based on search input and view
	 */
	useEffect(() => {
		let filtered = emails;

		if (searchInput !== "") {
        filtered = filtered.filter(email =>
            email.subject && email.subject.toLowerCase().includes(searchInput.toLowerCase())
			);
		}

		if (view === "inbox") {
			filtered = filtered.filter(email => !email.deleted);
		} else {
			filtered = filtered.filter(email => email.deleted);
		}

		setFilteredEmails(filtered);
	}, [emails, searchInput, view]);

	/**
	 * Return the main App component
	 */
	return (
		<body>
			<header>
				<h1>Really Cool Email Client</h1>
			</header>
			<main>
				<section className="App-sidebar">
					<Sidebar onButtonClick={onViewButtonClick} />
				</section>
				<section className="App-email-index">
					<SearchBar
						className="App-search-bar"
						placeholder="Search for emails"
						handleInput={handleSearchInputChange}
						handleChange={(e) => console.log(e.target.value)}
					/>
					<EmailList 
						className="App-email-list"
						view={view} emails={filteredEmails}
						onSelectEmail={onSelectEmail}
						markAsRead={markAsRead}
						markAsUnread={markAsUnread}
						deleteEmail={deleteEmail}
						restoreEmail={restoreEmail}
					/>
				</section>
				<section className="App-email-body">
					<Email email={selectedEmail} />
				</section>
			</main>
			<footer>
				<p>Thank you for choosing Really Cool Email Client || 2024 &copy; Copyright</p>
			</footer>
		</body>
	);
}

export default App;
