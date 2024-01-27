import "./App.css";
import Column from "./components/column/column.component";
import Sidebar from "./components/email-sidebar/sidebar.component";
import Content from "./components/email-content/email-content.component";
import SearchBar from "./components/searchbar/searchbar.component";
import EmailList from "./components/email-list/email-list.component";
import EmailBody from "./components/email-body/email-body.component";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Really Cool Email Client</h1>
			</header>
			<main>
				<Column className="App-sidebar">
					<Sidebar />
				</Column>
				<Column className="App-email-index">
					<EmailIndex />
						<SearchBar
							placeholder="Search for emails"
							handleChange={(e) => console.log(e.target.value)}
						/>
						<EmailList
							emails={[
								{
									id: 1,
									from: "Joe",
									subject: "Hello",
									address: "address",
									timestamp: "timestamp"
								},
								{
									id: 2,
									from: "Joe",
									subject: "Hello",
									address: "address",
									timestamp: "timestamp"
								},
								{
									id: 3,
									from: "Joe",
									subject: "Hello",
									address: "address",
									timestamp: "timestamp"
								}
							]}
						/>
				</Column>
				<Column className="App-email-body">
					<EmailBody>
						from: "Joe",
						subject: "Hello",
						address: "address",
						timestamp: "timestamp",
						message: "message"
					</EmailBody>
				</Column>
			</main>
			<footer>
				<p>Thank you for choosing Really Cool Email Client! 2024 &copy Copyright</p>
			</footer>
		</div>
	);
}

export default App;
