import styled from "styled-components";

export const StyledSection = styled.section`
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
	flex-direction: column;
	@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
		flex-direction: row;
	}
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
