import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";

export const App = () => (
	<ThemeProvider theme={theme}>
		<StyledMain>Hello</StyledMain>
	</ThemeProvider>
);

const StyledMain = styled.main`
	background-color: ${(props) => props.theme.colors.veryDarkBlueBg};
`;
