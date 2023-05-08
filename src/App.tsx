import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";

export const App = () => (
	<ThemeProvider theme={theme}>
		<StyledMain>Hello</StyledMain>
	</ThemeProvider>
);

const StyledMain = styled.main`
	background-color: ${(props) => props.theme.colors.veryDarkBlueBg};
	font-size: ${(props) => props.theme.fonts.sizes.m};
	font-family: ${(props) => props.theme.fonts.family.basic};
	font-weight: ${(props) => props.theme.fonts.weight.semiBold};
`;
