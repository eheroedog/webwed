import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./login/login";
import Signup from "./login/signup";
import Error from "./Error";

function Auth(){
	return(
	<BrowserRouter>
		<Switch>
			
			<Route exact path="/" component={Login} />
			<Route path="/signup" component={Signup} />
			<Route component={Error} />
			
		</Switch>
	</BrowserRouter>
	);
}

export default Auth;
