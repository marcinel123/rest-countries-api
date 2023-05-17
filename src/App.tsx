import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Header } from "./components/Header/Header";
import { InputandFilterPanel } from "./components/InputandFilterPanel/InputandFilterPanel";
import { CountriesInfoPanel } from "./components/CountriesInfoPanel/CountriesInfoPanel";
import { GlobalStyle } from "./GlobalStyles";

export const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle/>
		<StyledMain>
			<Header />
			<InputandFilterPanel />
			<CountriesInfoPanel />
		</StyledMain>
	</ThemeProvider>
);


const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
`;
