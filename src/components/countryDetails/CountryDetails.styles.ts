import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArrowLeft } from "@styled-icons/bootstrap/ArrowLeft";

export const StyledSection = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 0 1rem;
	background-color: ${(props) => props.theme.colors.background};
	height: 100vh;
`;

export const StyledFlagImage = styled.img`
	width: 100%;
	height: 50%;
	margin-right: 10rem;
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	width: 6rem;
	height: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	box-shadow: 0px 0px 7px -4px ${(props) => props.theme.colors.text};
	padding: 5px;
	margin-bottom: 4rem;
	font-family: ${(props) => props.theme.fonts.family.basic};
	font-size: ${(props) => props.theme.fonts.sizes.m};
	color: ${(props) => props.theme.colors.text};
	background-color: ${(props) => props.theme.colors.elements};
	font-weight: ${(props) => props.theme.fonts.weight.semiBold};
`;
export const StyledArrowIcon = styled(ArrowLeft)`
	color: ${(props) => props.theme.colors.text};
	width: 1.5rem;
	height: 1rem;
	margin-right: 5px;
`;

export const StyledDivWithCountryInfo = styled.div`
	color: ${(props) => props.theme.colors.text};
	display: flex;
	align-items: center;
	width: 100%;
	margin-top: 3rem;
`;

export const StyledDivWithFlag = styled.div`
 width 50%;
`;

export const StyledDivWithCountryData = styled.div`
padding: 2rem;
width 40%;
`;

export const StyledLeftColumnWithCountryInfo = styled.div`
	margin-right: 6rem;
`;

export const StyledCountryName = styled.h3`
	font-family: ${(props) => props.theme.fonts.family.basic};
	color: ${(props) => props.theme.colors.text};
	margin-bottom: 2rem;
`;

export const StyledParagraphWithCountryInfo = styled.p`
	font-family: ${(props) => props.theme.fonts.family.basic};
	font-size: ${(props) => props.theme.fonts.sizes.m};
	color: ${(props) => props.theme.colors.text};
	margin-top: 5px;
`;

export const StyledSpanWithCategoryName = styled.span`
	font-weight: ${(props) => props.theme.fonts.weight.extraBold};
	font-size: ${(props) => props.theme.fonts.sizes.m};
`;

export const StyledDivWithButtons = styled.div`
	margin-top: 4rem;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	font-family: ${(props) => props.theme.fonts.family.basic};
	font-size: ${(props) => props.theme.fonts.sizes.s};
	color: ${(props) => props.theme.colors.text};
`;

export const StyledLinkWithBorderCountries = styled(StyledLink)`
	width: 20%;
	max-width: 7rem;
	height: 8%;
	max-height: 3rem;
	font-size: ${(props) => props.theme.fonts.sizes.s};
	margin: auto 5px;
	padding: 5px;
`;