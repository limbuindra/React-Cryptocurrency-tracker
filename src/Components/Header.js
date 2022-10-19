import {
	AppBar,
	Container,
	MenuItem,
	Toolbar,
	Typography,
	Select,
	
} from "@material-ui/core";
import {
	createTheme,
	makeStyles,
	ThemeProvider,
} from "@material-ui/core/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
const useStyles = makeStyles(() => ({
	title: {
		flex: 1,
		fontFamily: "montserrat",
		fontWeight: "bold",
		cursor: "pointer",
	},
}));

const Header = () => {
	const classes = useStyles();
	const navigate = useNavigate();
	const darkTheme =  createTheme({
		palette:{
			primary: {
				main: "#fff"
			},
			type: 'dark',
		},
		
	});
	

	const { currency, setCurrency} =  CryptoState();
	return (
		<ThemeProvider theme={darkTheme}>
			<AppBar  color="transparent" position="static">
				<Container>
					<Toolbar>
						<Typography onClick={() => navigate("/")} className={classes.title} variant="h5">
							Cryptocurrency Tracker
						</Typography>
						 <Select
							variant="outlined"
							style={{
								width: 100,
								height: 40,
								marginRight: 15,
							}}
							value={currency}
							onChange={(e) => setCurrency(e.target.value)}
					

						>
							
							<MenuItem value={"USD"}>USD</MenuItem>
							<MenuItem value={"HKD"}>HKD</MenuItem>
						</Select> 
					</Toolbar>
				</Container>
			</AppBar>
		</ThemeProvider>
	);
};

export default Header;
