import React, { Component } from "react";

import EventCard from "./EventCard";

class Home extends Component {
	constructor() {
		super();
		this.state = {
			_events: [],
			isFetching: true,
			error: null
		};
	}

	componentWillMount() {
		fetch("https://www.mocky.io/v2/5ad175603000006500534bf6")
			.then(response => response.json())
			.then(data => {
				let _events = data.map((e, i) => <EventCard key={i} event={e} />);
				this.setState({ _events });
			})
			.catch(e => console.error(e.stack));
	}

	render() {
		return (
			<div>
				<div className="billboard">
					<img
						src={
							"https://images.pexels.com/photos/889545/pexels-photo-889545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						}
						className="img"
						alt="background imagge"
					/>
					<div className="heading">
						<h1>Hello discover mixs</h1>
						<h2>frontend challenge</h2>
					</div>
				</div>
				<div>{this.state._events}</div>
			</div>
		);
	}
}

export default Home;
