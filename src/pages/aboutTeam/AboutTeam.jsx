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
	row-gap: 25px;
	column-gap: 20px;
	padding-bottom: 20px;
`;

const AboutTeam = () => {
	const [activePopup, setActivePopup] = useState(false);
	const [showPerson, setShowPerson] = useState(0);
	const peopleMoreInfo = [
		{
			name: 'Рублева Елизавета',
			group: 'ПТКс-3801-02-00',
			role: 'Руководитель проекта, проектировщик'
		},
		{
			group: 'ПТКс-3801-02-00',
			name: "Покатов Андрей",
			role: 'Поиск информации'
		},
		{
			group: 'ПТКс-3801-02-00',
			name: "Ситников Даниил",
			role: 'Создание сайта-визитки'
		},
		{
			group: 'ПТКс-3801-02-00',
			name: "Васильев Евгений",
			role: 'Проектировщик'
		},
		{
			group: 'ПТКс-3801-02-00',
			name: "Стародумов Илья",
			role: 'формирование отчетности,\n' +
				'Формулирование целей и задач, представление проекта для аудитории'
		}
	];

	return (
		<Container>
			<Header>Команда</Header>
			<CardsContainer>
				<Person
					name="Рублева Елизавета"
					status="Руководитель проекта"
					group="ПТКс-3801-02-00"
					setShowPerson={setShowPerson}
					person={0}
					setActivePopup={setActivePopup}
				/>
				<Person
					name="Покатов Андрей"
					status="Поиск информации"
					group="ПТКс-3801-02-00"
					setShowPerson={setShowPerson}
					person={1}
					setActivePopup={setActivePopup}
				/>
				<Person
					name="Ситников Даниил"
					status="Создание сайта-визитки"
					group="ПТКс-3801-02-00"
					setShowPerson={setShowPerson}
					person={2}
					setActivePopup={setActivePopup}
				/>
				<Person
					name="Васильев Евгений"
					status="Проектировщик"
					group="ПТКс-3801-02-00"
					setShowPerson={setShowPerson}
					person={3}
					setActivePopup={setActivePopup}
				/>
				<Person
					name="Стародумов Илья"
					status="Формирование отчетности"
					group="ПТКс-3801-02-00"
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
