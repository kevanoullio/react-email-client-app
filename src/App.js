import "./App.css";
import Column from "./components/column/column.component";
import Sidebar from "./components/sideBar/sideBar.component";
import SearchBar from "./components/searchBar/searchBar.component";
import EmailList from "./components/emailList/emailList.component";
import EmailBody from "./components/emailBody/emailBody.component";

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
