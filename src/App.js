import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Register from './components/Register';

function App() {
	return (
		<main className="App">
		<Navbar />
		<div className="App-body">
			<Switch>
			<Route path="/" component = {Home} exact/>
			<Route path="/about" component = {About} />
			<Route path="/register" component = {Register} />
			<Route component = {Error} />
			</Switch>
		</div>
		</main>
	);
}

export default App;
