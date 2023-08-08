import { useRouteError } from "react-router-dom";
import styled from "styled-components";

export const StyledError = styled.h2`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${(props) => props.theme.fonts.family.basic};
	font-size: ${(props) => props.theme.fonts.sizes.xl};
	color: ${(props) => props.theme.colors.text};
	height: 100vh;
`;

export const Page404 = () => {
	const error = useRouteError() as Error;

	return <StyledError>{error.message}</StyledError>;
};
