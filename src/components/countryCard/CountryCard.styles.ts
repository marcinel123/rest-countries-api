import styled from "styled-components";

export const StyledCountryCard = styled.div`
	border-radius: 10px;
	box-shadow: 2px 2px 10px -8px rgba(66, 68, 90, 1);
	background-color: ${(props) => props.theme.colors.white};
	margin: 20px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	width: 70%;
	min-width: 19rem;
	height: 24rem;
	overflow: hidden;
	@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
		flex-basis: 16%;
		height: 14rem;
		margin: 10px 60px;
		max-width: 18rem;
		min-width: 14rem;
	}
	@media screen and (min-width: ${(props) => props.theme.breakpoints.large}) {
		margin: 10px 60px;
		max-width: 22rem;
		flex-basis: 25%;
	}
`;

export const StyledCardFlagImage = styled.img`
	width: 100%;
	height: 50%;
	object-fit: cover;
	@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
		height: 45%;
	}
`;

export const StyledDivWithCountryInfo = styled.div`
	font-family: ${(props) => props.theme.fonts.family.basic};
	height: 50%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 20px;
	justify-content: flex-start;
	@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
		padding: 5px 20px;
	}
`;

export const StyledCountryName = styled.h4`
	font-size: ${(props) => props.theme.fonts.sizes.m};
	margin: 15px 0;
	@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
		font-size: ${(props) => props.theme.fonts.sizes.m};
		margin-bottom: 10px;
		margin-top: 0;
	}
`;

export const StyledParagraphWithCountryDetails = styled.p`
	margin: 5px 0;
	font-weight: ${(props) => props.theme.fonts.weight.semiBold};
	font-size: ${(props) => props.theme.fonts.sizes.s};
	@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
		font-size: ${(props) => props.theme.fonts.sizes.s};
		margin: 2px 0;
	}
`;
