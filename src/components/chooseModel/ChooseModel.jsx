import React from 'react';
import styled from 'styled-components';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import { IconButton } from '@material-ui/core';

const Container = styled.div`
	display: flex;
	align-items: center;
	width: 300px;
	justify-content: space-around;
	margin: 5px auto;
`;

const ChooseModel = (props) => {
	const {setActiveModel, activeModel} = props;
	const numbers = [Filter1Icon, Filter2Icon, Filter3Icon];

	return (
		<Container>
			{
				numbers.map((Number, i) => {
					const num = i + 1;

					return (
						<IconButton
							onClick={() => setActiveModel(num)}
							key={i}
							style={(num) === activeModel ? {background: '#0000b5'} : null}
						>
							<Number style={{color: 'white'}} />
						</IconButton>
					);
				})
			}
		</Container>
	);
};

export default ChooseModel;
