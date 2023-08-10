import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapperWithButtons = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	font-family: ${(props) => props.theme.fonts.family.basic};
	font-size: ${(props) => props.theme.fonts.sizes.s};
	color: ${(props) => props.theme.colors.text};
`;

export const StyledCategoryName = styled.span`
	font-weight: ${(props) => props.theme.fonts.weight.extraBold};
	font-size: ${(props) => props.theme.fonts.sizes.m};
`;

export const StyledLinkWithBorderCountries = styled(Link)`
	text-decoration: none;
	border-radius: 3px;
	box-shadow: 0px 0px 7px -4px ${(props) => props.theme.colors.text};
	text-align: center;
	font-family: ${(props) => props.theme.fonts.family.basic};
	font-size: ${(props) => props.theme.fonts.sizes.s};
	margin: 7px;
	padding: 5px;
	color: ${(props) => props.theme.colors.text};
	background-color: ${(props) => props.theme.colors.elements};
	font-weight: ${(props) => props.theme.fonts.weight.semiBold};
`;
