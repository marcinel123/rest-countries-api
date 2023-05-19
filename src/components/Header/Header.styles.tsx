import styled from "styled-components";

export const StyledHeader = styled.header`
	padding: 20px 40px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.colors.white};
`;

export const StyledH2 = styled.h2`
	font-family: ${(props) => props.theme.fonts.family.basic};
	font-size: ${(props) => props.theme.fonts.sizes.m};
	@media screen and (min-width: 550px) {
		font-size: ${(props) => props.theme.fonts.sizes.l};
	}
`;

export const StyledModeButton = styled.button`
	font-family: ${(props) => props.theme.fonts.family.basic};
	font-weight: ${(props) => props.theme.fonts.weight.semiBold};
	font-size: ${(props) => props.theme.fonts.sizes.m};
	padding: 10px;
	border: none;
	background-color: white;
	@media screen and (min-width: 550px) {
		font-size: ${(props) => props.theme.fonts.sizes.l};
	}
`;
export const StyledButtonIcon = styled.i`
	margin: 0 10px;
	transform: rotate(-30deg);
`;
