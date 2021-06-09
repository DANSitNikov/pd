import React, { useEffect } from 'react';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const Container = styled.div`
	position: fixed;
	display: ${props => props.active ? 'block' : 'none'};
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	color: black;
`;

const Card = styled.div`
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 500px;
	height: 500px;
	background-color: whitesmoke;
	padding: 10px;
	border-radius: 10px;
	
	@media (max-width: 550px) {
    width: 280px;
    height: 400px;
	}
`;

const Name = styled.h2`
	text-align: center;
`;

const Group = styled.div`
	display: flex;
	align-items: start;
	column-gap: 5px;
`;

const CloseButton = styled(IconButton)`
	position: fixed !important;
	top: 40px;
	right: 40px;
	background-color: whitesmoke !important;
`;

const Role = styled.div`
  display: flex;
  align-items: start;
  column-gap: 5px;
`;

const Popup = (props) => {
	const {info, active, setActivePopup} = props;

	useEffect(() => {
		setActivePopup(active);
	}, [active]);

	return (
		<Container active={active}>
			<Card>
				<Name>{info.name}</Name>
				<Group>
					<p>Группа:</p>
					<p>{info.group}</p>
				</Group>
				<Role>
					<p>Роль:</p>
					<p>{info.role}</p>
				</Role>
			</Card>
			<CloseButton
				onClick={() => setActivePopup(false)}
			>
				<CloseIcon />
			</CloseButton>
		</Container>
	);
};

export default Popup;
