import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Sidebar from '../Common/Sidebar';
import Topbar from '../Common/Topbar';

const useStyles = makeStyles((theme) => ({
	mainBox: {
		minHeight: '100vh',
		background: theme.palette.background.secondary,
	},
	container: {},
}));

function Feed() {
	const classes = useStyles();
	return (
		<div className={classes.mainBox}>
			<Grid container className={classes.container}>
				<Topbar title='Feed' />
				<Sidebar />
			</Grid>
		</div>
	);
}

export default Feed;
