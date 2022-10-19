import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";

const useStyles = makeStyles(() => ({
	banner: {
		backgroundImage: "url(./Bann.jpg)",
		backgroundSize: "cover",
	},
	bannerContext: {
		height: 400,
		display: "flex",
		flexDirection: "column",
		paddingTop: 25,
		justifyContent: "space-around",
	},
	tagline: {
		display: "flex",
		height: "40%",
		flexDirection: "column",
		textAlign: "center",
		justifyContent: "center",
	},
}));

const Banner = () => {
	const classes = useStyles();
	return (
		<div className={classes.banner}>
			<Container className={classes.bannerContext}>
				<div className={classes.tagline}>
					<Typography
						variant="h2"
						style={{
							color: "white",
							fontWeight: "bold",
							marginBottom: 15,
							fontFamily: "Montserrat",
						}}
					>
						Crypto Tracker
					</Typography>
					<Typography
						variant="subtitle2"
						style={{
							fontSize: 17,
color:"white",
							textTransform: "capitalize",
							fontFamily: "Montserrat",
						}}
					>
						Get all the Info regarding your favourite Crypto Currency
					</Typography>
				</div>
				<Carousel/>
			</Container>
		</div>
	);
};

export default Banner;
