import React, { useState, useEffect } from "react";
import axios from 'axios';
import Column from "./components/column/column.component";
import Sidebar from "./components/sideBar/sideBar.component";
import SearchBar from "./components/searchBar/searchBar.component";
import EmailList from "./components/emailList/emailList.component";
import Email from "./components/email/email.component";
import "./App.css";

function App() {
	const [view, setView] = useState("inbox");
	const [emails, setEmails] = useState([]);
	const [filteredEmails, setFilteredEmails] = useState([]);
	const [selectedEmail, setSelectedEmail] = useState(null);
	const [searchInput, setSearchInput] = useState("");

	const onButtonClick = (view) => {
		setView(view);
	};

	const onSelectEmail = (email) => {
		setSelectedEmail(email);
	};

	useEffect(() => {
		const fetchEmails = async () => {
			const response = await axios(
				"https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json"
			);
			// console.log(response.data);
			const emailsWithDeleted = response.data.map(email => ({
				...email,
				deleted: false // Add the 'deleted' attribute here
			}));
			setEmails(emailsWithDeleted);
		}
		fetchEmails();
	});
	console.log("view", view);
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
	
	const handleChange = e => {
		setSearchInput(e.target.value)
	};

	return (
		<body>
			<header>
				<h1>Really Cool Email Client</h1>
			</header>
			<main>
				<Column className="App-sidebar">
					<Sidebar onButtonClick={onButtonClick} />
				</Column>
				<Column className="App-email-index">
					<SearchBar className="App-search-bar"
						placeholder="Search for emails"
						handleInput={handleChange}
						handleChange={(e) => console.log(e.target.value)}
					/>
					<EmailList className="App-email-list" view={view} emails={filteredEmails} onSelectEmail={onSelectEmail} />
				</Column>
				<Column className="App-email-body">
					<Email email={selectedEmail} />
				</Column>
			</main>
			<footer>
				<p>Thank you for choosing Really Cool Email Client || 2024 &copy; Copyright</p>
			</footer>
		</body>
	);
}

export default App;
