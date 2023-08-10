import styled from "styled-components";

export const StyledLeftColumnWithCountryInfo = styled.div`
	margin-bottom: 3rem;
	@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
		margin-right: 5rem;
	}
`;

export const StyledCategoriesWrapper = styled.p`
	font-family: ${(props) => props.theme.fonts.family.basic};
	font-size: ${(props) => props.theme.fonts.sizes.m};
	color: ${(props) => props.theme.colors.text};
	margin-top: 10px;
`;

export const StyledCategoryName = styled.span`
	font-weight: ${(props) => props.theme.fonts.weight.extraBold};
	font-size: ${(props) => props.theme.fonts.sizes.m};
`;
