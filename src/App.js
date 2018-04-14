import React, { Component } from "react";
// import ReactDOM from "react-dom";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<AppBar>
					<Toolbar>
						<Typography variant="title" color="inherit">
							HELLO DISCOVER MIXS
						</Typography>
					</Toolbar>
				</AppBar>

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
