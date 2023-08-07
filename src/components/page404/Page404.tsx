import { useRouteError } from "react-router-dom";
import styled from "styled-components";

export const StyledError = styled.h2`
	font-family: ${(props) => props.theme.fonts.family.basic};
	font-size: ${(props) => props.theme.fonts.sizes.l};
	color: ${(props) => props.theme.colors.text};
	text-align: center;
	margin: 5rem auto;
	height: 100vh;
`;

export const Page404 = () => {
	const error = useRouteError() as Error;

	return <StyledError>{error.message}</StyledError>;
};
