import React, { useState } from 'react';
import CanvasModel from './canvas/CanvasModel';
import { Header } from '../project/Project';
import styled from 'styled-components';
import { IconButton, makeStyles, Popper } from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ChooseModel from '../../components/chooseModel/ChooseModel';

const Container = styled.div`
	color: white;
`;

const HeaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 20px;
`;

const useStyles = makeStyles((theme) => ({
	paper: {
		border: '1px solid',
		padding: theme.spacing(1),
		backgroundColor: theme.palette.background.paper,
	},
}));

const Model = () => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const [activeModel, setActiveModel] = useState(1);

	const handleClick = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popper' : undefined;

	return (
		<Container>
			<HeaderContainer>
				<Header>3D модель</Header>
				<IconButton
					onClick={handleClick}
				>
					<HelpOutlineIcon style={{color: 'whitesmoke'}}/>
				</IconButton>

				<div>
					<Popper id={id} open={open} anchorEl={anchorEl}>
						<div className={classes.paper}>
							<p>1 - Шарнир в сборе</p>
							<p>2 - Шарнир</p>
							<p>3 - Шарнироприемник</p>
						</div>
					</Popper>
				</div>
			</HeaderContainer>
			<CanvasModel activeModel={activeModel}/>
			<ChooseModel
				setActiveModel={setActiveModel}
				activeModel={activeModel}
			/>
		</Container>
	);
};

export default Model;
