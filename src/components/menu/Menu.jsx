import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.nav`
	width: 100%;
	border-bottom: 2px solid whitesmoke;
`;

const Navigation = styled.ul`
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	padding: 0;
`;

const NavigationItem = styled.li`
	list-style: none;
  transform: scale(${props => props.active ? 1.3 : 1});
	text-decoration: ${props => props.active ? 'underline' : 'none'};
	
  a{
		color: white;
		text-decoration: none;
		
		&:hover{
			color: grey !important;
		}
	}
`;

const Menu = () => {
	const [active, setActive] = useState(1);
	let history = useHistory();

	useEffect(() => {
		const path = history.location.pathname;
		if(path === '/') {
			setActive(1);
		} else if (path === '/model') {
			setActive(2);
		} else if (path === '/about-team') {
			setActive(3);
		}
	}, []);

	return (
		<Container>
			<Navigation>
				<NavigationItem
					active={1 === active}
					onClick={() => setActive(1)}
				>
					<NavLink to="/">О проекте</NavLink>
				</NavigationItem>
				<NavigationItem
					active={2 === active}
					onClick={() => setActive(2)}
				>
					<NavLink to="/model">3D модель</NavLink>
				</NavigationItem>
				<NavigationItem
					active={3 === active}
					onClick={() => setActive(3)}
				>
					<NavLink to="/about-team">Команда</NavLink>
				</NavigationItem>
				{/*<NavigationItem*/}
				{/*	active={4 === active}*/}
				{/*	onClick={() => setActive(4)}*/}
				{/*>*/}
				{/*	<NavLink to="/contacts">Контакты</NavLink>*/}
				{/*</NavigationItem>*/}
			</Navigation>
		</Container>
	);
};

export default Menu;
