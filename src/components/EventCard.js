import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

function EventCard({ classes, event }) {
	// const { classes, e } = props;
	if (!event) return null;
	return (
		<div>
			<Card className={classes.card}>
				<CardMedia
					className={classes.media}
					image="/static/images/cards/contemplative-reptile.jpg"
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography gutterBottom variant="headline" component="h2">
						{event.description}
					</Typography>
					<Typography component="p">
						Join us in {event.city} on {event.date} for a fun filled day of
						activities and lectures including speakers from all over the city...
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" color="primary">
						Share
					</Button>
					<Link to="/event">
						<Button size="small" color="primary">
							Learn more
						</Button>
					</Link>
				</CardActions>
			</Card>
		</div>
	);
}

export default withStyles()(EventCard);
