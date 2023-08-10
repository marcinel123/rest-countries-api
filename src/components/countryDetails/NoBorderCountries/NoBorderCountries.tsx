import styled from "styled-components";

export const StyledErrorMessage = styled.p`
	font-family: ${(props) => props.theme.fonts.family.basic};
	font-size: ${(props) => props.theme.fonts.sizes.m};
	color: ${(props) => props.theme.colors.text};
	margin: 0 5px;
`;

export const NoBorderCountries = () => {
	return <StyledErrorMessage>No border countries.</StyledErrorMessage>;
};
