import React from 'react';
import CanvasModel from './canvas/CanvasModel';
import { Header } from '../project/Project';
import styled from 'styled-components';

const Container = styled.div`
	color: white;
`;

const Model = () => {
	return (
		<Container>
			<Header>3D модель</Header>
			<CanvasModel />
		</Container>
	);
};

export default Model;
