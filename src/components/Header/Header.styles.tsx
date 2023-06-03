import styled from "styled-components";

export const StyledHeader = styled.nav`
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
	@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
		font-size: ${(props) => props.theme.fonts.sizes.l};
	}
`;

export const ThemeSwitchButton = styled.button`
	font-family: ${(props) => props.theme.fonts.family.basic};
	font-weight: ${(props) => props.theme.fonts.weight.semiBold};
	font-size: ${(props) => props.theme.fonts.sizes.m};
	padding: 10px 0 10px 10px;
	border: none;
	background-color: ${(props) => props.theme.colors.white};
	@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
		font-size: ${(props) => props.theme.fonts.sizes.m};
	}
`;
export const StyledIcon = styled.i`
	margin: 0 10px;
	transform: rotate(-30deg);
`;
