import React, { Component } from 'react'

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button"

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect
} from "react-router-dom"

// Pages
import MainPage from "./pages/index.js"
import NotFoundPage from "./pages/404.js"

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</Router>
		)
	}
}

export default App
