import "antd/dist/antd.css";
import Navigation from "./components/navigation";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";

function App() {
	return (
		<BrowserRouter>
			<Navigation />
		</BrowserRouter>
	);
}

export default App;
