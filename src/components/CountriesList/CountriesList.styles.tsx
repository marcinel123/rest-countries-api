import styled from "styled-components";

export const StyledDisplaySection = styled.section`
	background-color: ${(props) => props.theme.colors.background};
	box-sizing: border-box;
	padding: 10px 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

export const StyledH4 = styled.h4`
	font-family: ${(props) => props.theme.fonts.family.basic};
	color: ${(props) => props.theme.colors.text};
	font-size: ${(props) => props.theme.fonts.sizes.l};
	margin: 15px 0;
	@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
		font-size: ${(props) => props.theme.fonts.sizes.l};
		margin-bottom: 10px;
		margin-top: 0;
	}
`;
