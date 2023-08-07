import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArrowLeft } from "@styled-icons/bootstrap/ArrowLeft";

export const StyledSection = styled.section`
	margin-bottom: 70%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	padding: 0 1rem;
	padding-bottom: 3rem;
	background-color: ${(props) => props.theme.colors.background};
	@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		padding: 0 1rem;
		background-color: ${(props) => props.theme.colors.background};
	}
`;

export const StyledFlagImage = styled.img`
	width: 100%;
	max-width: 60rem;
	height: 50%;
	max-height: 30rem;
	@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
		margin-right: 10rem;
	}
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

export const StyledCountryInfoWrapper = styled.div`
	color: ${(props) => props.theme.colors.text};
	display: flex;
	flex-direction: column;
	@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
		width: 100%;
		margin-top: 3rem;
	}
`;

export const StyledCountryDataWrapper = styled.div`
	display: flex;
`;

export const StyledDivWithFlag = styled.div`
margin-top: 3rem;
width 90%;
margin: 3rem 0;
@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
	width 50%;
}
 
`;

export const StyledDivWithCountryData = styled.div`
width 90%;
@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
	margin-top: 3rem;
padding: 2rem 1rem;
width 40%;}
`;

export const StyledCountryName = styled.h4`
	font-family: ${(props) => props.theme.fonts.family.basic};
	color: ${(props) => props.theme.colors.text};
	margin-bottom: 2rem;
	font-size: ${(props) => props.theme.fonts.sizes.xl};
`;

export const StyledWrapperWithButtons = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	font-family: ${(props) => props.theme.fonts.family.basic};
	font-size: ${(props) => props.theme.fonts.sizes.s};
	color: ${(props) => props.theme.colors.text};
`;

export const StyledButtons = styled(StyledLink)`
	text-align: center;
	min-height: 3rem;
	min-width: 8rem;
	width: 20%;
	max-width: 7rem;
	height: 8%;
	max-height: 3rem;
	font-size: ${(props) => props.theme.fonts.sizes.s};
	margin: 7px;
	padding: 5px;
`;
