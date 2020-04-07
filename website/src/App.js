import React, { Component } from "react";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect
} from "react-router-dom";

// Pages
import MainPage from "./pages/index.js";
import NotFoundPage from "./pages/404.js";
import CreateCompPage from "./pages/createComp.js";

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route exact path="/404" component={NotFoundPage} />
					<Route exact path="/createcomp" component={CreateCompPage} />

					<Redirect to="/404" />
				</Switch>
			</Router>
		);
	}
}

export default App;
