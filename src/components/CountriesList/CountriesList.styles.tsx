import styled from "styled-components";

export const StyledDisplaySection = styled.section`
	background-color: ${(props) => props.theme.colors.background};
	box-sizing: border-box;
	padding: 10px 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;
