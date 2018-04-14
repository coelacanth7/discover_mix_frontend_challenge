import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { createMuiTheme } from "material-ui/styles";
import purple from "material-ui/colors/purple";
import green from "material-ui/colors/green";

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

import Home from "./Home";
import Event from "./Event";

const theme = createMuiTheme({
	palette: {
		primary: purple,
		secondary: green
	},
	status: {
		danger: "orange"
	}
});

class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<AppBar>
					<Toolbar>
						<Typography variant="title" color="inherit">
							HELLO DISCOVER MIXS
						</Typography>
					</Toolbar>
				</AppBar>

				<Router className="App">
					<div>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/event" component={Event} />
							<Route render={() => <h1>Page not found</h1>} />
						</Switch>
					</div>
				</Router>

				<footer>
					<hr />
					<Typography varient="headline">
						Created by <a href="http://gregoryalford.com/">Gregory Alford</a>
					</Typography>
				</footer>
			</MuiThemeProvider>
		);
	}
}

export default App;
