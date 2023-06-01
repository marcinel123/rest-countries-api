import styled from "styled-components";

export const StyledCustomSelect = styled.ul`
	margin-top: 42px;
	display: block;
	position: absolute;
	background-color: ${(props) => props.theme.colors.white};
	min-width: 160px;
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	z-index: 1;
	width: 100%;
	border-radius: 5px;
	padding: 10px 0;
`;

export const ContinentOption = styled.li`
	:hover {
		background-color: ${(props) => props.theme.colors.veryLightGray};
	}
	margin: 5px 0;
	box-sizing: border-box;
	padding: 0 0 0 20px;
	list-style: none;
`;
