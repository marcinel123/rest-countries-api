import styled from "styled-components";
import { MoonOutline } from "@styled-icons/evaicons-outline/MoonOutline";
import { Moon } from "@styled-icons/heroicons-solid/Moon";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.nav`
	padding: 20px 45px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.colors.elements};
`;

export const StyledH2 = styled.h2`
	color: ${(props) => props.theme.colors.text};
	font-family: ${(props) => props.theme.fonts.family.basic};
	font-size: ${(props) => props.theme.fonts.sizes.m};
	@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
		font-size: ${(props) => props.theme.fonts.sizes.l};
	}
`;

export const ThemeSwitchButton = styled.button`
	color: ${(props) => props.theme.colors.text};
	font-family: ${(props) => props.theme.fonts.family.basic};
	font-weight: ${(props) => props.theme.fonts.weight.semiBold};
	font-size: ${(props) => props.theme.fonts.sizes.m};
	padding: 10px 0 10px 10px;
	border: none;
	background-color: ${(props) => props.theme.colors.elements};
	@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
		font-size: ${(props) => props.theme.fonts.sizes.m};
	}
`;

export const StyledLightModeIcon = styled(MoonOutline)`
	color: ${(props) => props.theme.colors.text};
	width: 18px;
	height: 18px;
	margin: 0 10px;
`;

export const StyledDarkModeIcon = styled(Moon)`
	color: ${(props) => props.theme.colors.text};
	width: 16px;
	height: 16px;
	margin: 0 10px;
`;

export const StyledLogo = styled(NavLink)`
	text-decoration: none;
`;
