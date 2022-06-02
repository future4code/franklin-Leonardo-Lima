import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
	align-items: center;
`;
const IconImage = styled.img`
	margin-right: 5px;
	width: 24px;
	height: 24px;
`;

export function IconeComContador(props) {
	return (
		<IconContainer>
			<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone} />
			<p>{props.valorContador}</p>
		</IconContainer>
	);
}
