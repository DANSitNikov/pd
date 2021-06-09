import React, { useState } from 'react';
import { Container, Header } from '../project/Project';
import styled from 'styled-components';
import Person from './cards/Person';
import Popup from '../../components/popup/Popup';

const CardsContainer = styled.div`
	max-width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	row-gap: 20px;
	column-gap: 20px;
	padding-bottom: 20px;
`;

const AboutTeam = () => {
	const [activePopup, setActivePopup] = useState(false);
	const [showPerson, setShowPerson] = useState(0);
	const peopleMoreInfo = [
		{
			name: 'Рублева Елизавета',
			group: 'ПТКс-3801',
		},
		{
			group: 'ПТКс-3801',
			name: "Покатов Андрей",
		},
		{
			group: 'ПТКс-3801',
			name: "Ситников Даниил",
		},
		{
			group: 'ПТКс-3801',
			name: "Васильев Евгений",
		},
		{
			group: 'ПТКс-3801',
			name: "Стародумов Илья",
		}
	];

	return (
		<Container>
			<Header>О команде</Header>
			<CardsContainer>
				<Person
					name="Рублева Елизавета"
					status="Руководитель проекта"
					todo="Руковожу проектом тут"
					setShowPerson={setShowPerson}
					person={0}
					setActivePopup={setActivePopup}
				/>
				<Person
					name="Покатов Андрей"
					status="кто-то там"
					todo="Сделал что-то тут"
					setShowPerson={setShowPerson}
					person={1}
					setActivePopup={setActivePopup}
				/>
				<Person
					name="Ситников Даниил"
					status="кто-то там"
					todo="Сделал сайтик тут"
					setShowPerson={setShowPerson}
					person={2}
					setActivePopup={setActivePopup}
				/>
				<Person
					name="Васильев Евгений"
					status="кто-то там"
					todo="Сделал что-то тут"
					setShowPerson={setShowPerson}
					person={3}
					setActivePopup={setActivePopup}
				/>
				<Person
					name="Стародумов Илья"
					status="кто-то там"
					todo="Сделал что-то тут"
					setShowPerson={setShowPerson}
					person={4}
					setActivePopup={setActivePopup}
				/>
			</CardsContainer>
			<Popup
				active={activePopup}
				setActivePopup={setActivePopup}
				info={peopleMoreInfo[showPerson]}
			/>
		</Container>
	);
};

export default AboutTeam;
