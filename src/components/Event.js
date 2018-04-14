import React, { Component } from "react";

class Event extends Component {
	constructor() {
		super();
		this.state = {
			_event: {},
			isFetching: true,
			error: null
		};
	}

	componentWillMount() {
		fetch("https://www.mocky.io/v2/5ad17cb23000006400534c0b")
			.then(response => response.json())
			.then(data => {
				this.setState({ _event: data });
			})
			.catch(e => console.error(e.stack));
	}

	render() {
		const { _event } = this.state;
		return (
			<div>
				<h1 className="heading">Join us</h1>
				<img src={_event.image} className="img" alt="event" />
				<h1>{_event.description}</h1>
				<h2>
					{_event.duration} hours on {_event.date} at {_event.time}
				</h2>
				<p>
					TV Lab (short for Television Laboratory) was a program founded at
					Thirteen/WNET public television station in 1972 by David Loxton with
					support from the Rockefeller Foundation and New York State Council on
					the Arts. The program provided artists with advanced video making
					equipment through an artist-in-residence program. Between 1975 and
					1977, the Video Tape Review series was established and broadcast
					through TV Lab. David Loxton created TV Lab's Independent Documentary
					Fund in 1977, aiming to provide funding for the creation of
					independent documentaries. Unable to match funds from the National
					Endowment for the Arts, the IDF and TV Lab lost support, eventually
					ending in 1984.{" "}
				</p>
				<p>
					S arnówko [sarˈnufkɔ] is a settlement in the administrative district
					of Gmina Somonino, within Kartuzy County, Pomeranian Voivodeship, in
					northern Poland. It lies approximately 6 kilometres (4 mi) west of
					Somonino, 9 km (6 mi) south-west of Kartuzy, and 36 km (22 mi) west of
					the regional capital Gdańsk. For details of the history of the region,
					see History of Pomerania.
				</p>
				<iframe
					title="location"
					width="100%"
					height="450"
					frameBorder="0"
					style={{ border: 0 }}
					src={`https://www.google.com/maps/embed/v1/place?q=${
						_event.location_lat
					}%2C%20${_event.location_lng}&key=${
						process.env.REACT_APP_MAPS_API_KEY
					}`}
					allowFullScreen
				/>
			</div>
		);
	}
}

export default Event;
