import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, makeStyles, Typography } from "@material-ui/core";
import Popup from '../../../components/popup/Popup';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

const Person = (props) => {
	const classes = useStyles();
	const { name, status, group, setShowPerson, person, setActivePopup } = props;

	return (
		<>
			<Card className={classes.root}>
				<CardContent>
					<Typography variant="h5" component="h2">
						{name}
					</Typography>
					<br/>
					<Typography
						className={classes.pos}
						color="textSecondary"
						style={{margin: 0, fontSize: '14px'}}
					>
						{status}
					</Typography>
					<br/>
					<Typography variant="body2" component="p">
						Группа: {group}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						size="small"
						variant="outlined"
            onClick={() => {
              setShowPerson(person);
              setActivePopup(true);
            }}
					>
						Узнать больше
					</Button>
				</CardActions>
			</Card>
		</>
	)
};

export default Person;
