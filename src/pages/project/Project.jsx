import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
	width: 75%;
	max-width: 1100px;
	margin: 20px auto;
	height: 90vh;
	overflow-y: auto;
	color: white;

  ::-webkit-scrollbar{
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Header = styled.h1`
	text-align: center;
`;

const Project = () => {
	return (
		<Container>
			<Header>Проектирование универсального шарнирного соединения</Header>
			<div
				style={{
					margin: '0 20px',
					lineHeight: '25px',
					fontSize: '16px',
					fontFamily: 'monospace',
				}}
			>
				<p>
					1) Направление проекта: машиностроительное производство, бионика, игрушки и манекены.
				</p>
				<p>
					2) Основная идея и уникальность проекта: разработать шарнир, который можно использовать в любой деятельности.
				</p>
				<p>
					3) Текущая стадия проекта: идея. разработка.
				</p>
				<p>
					4) Актуальность проекта / Описание проблемы, на решение которой направлен проект: шарнирное соединение может быть использовано в различных сферах деятельности,
					начиная машиностроением, заканчивая изготовлением детских игрушек.
				</p>
				<p>
					5) Цель проекта по Smart: изготовить макет универсального шарнирного соединения, для дальнейшей продажи
					3D-модели.
				</p>
				<p>
					6) География проекта: проект не привязан к географическому положению, так как предполагается создание
					универсального соединения, которое можно будет использовать в любом виде
					деятельности.
				</p>
				<p>
					7) Ценностное предложение: универсальность применения, масштабируемость
				</p>
				<p>
					8) Описание решения проблемы: Не нужно искать решение для изготовления различных соединений, универсальное
					соединение подойдет для любого вида производств.
				</p>
			</div>
		</Container>
	);
};

export default Project;
