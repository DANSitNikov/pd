import React from 'react';
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import styled from 'styled-components';

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

const PersonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const PersonIcon = styled(PermContactCalendarIcon)`
	width: 40px !important;
	height: 40px !important;
`;

const Person = (props) => {
	const classes = useStyles();
	const {
		name, status, group, setShowPerson,
		person, setActivePopup, color,
	} = props;

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
					<PersonContainer>
						<PersonIcon
							style={{color: color}}
						/>
					</PersonContainer>
				</CardContent>
				{/*<CardActions>*/}
				{/*	<Button*/}
				{/*		size="small"*/}
				{/*		variant="outlined"*/}
        {/*    onClick={() => {*/}
        {/*      setShowPerson(person);*/}
        {/*      setActivePopup(true);*/}
        {/*    }}*/}
				{/*	>*/}
				{/*		Узнать больше*/}
				{/*	</Button>*/}
				{/*</CardActions>*/}
			</Card>
		</>
	)
};

export default Person;
