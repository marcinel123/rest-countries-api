import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Header } from "./components/Header/Header";
import { CountriesSearchAndSelectModule } from "./components/CountriesSearchAndSelectModule/CountriesSearchAndSelectModule";
import { CountriesList } from "./components/CountriesInfoPanel/CountriesList";
import { GlobalStyle } from "./GlobalStyles";

export const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<StyledMain>
			<Header />
			<CountriesSearchAndSelectModule />
			<CountriesList />
		</StyledMain>
	</ThemeProvider>
);

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.colors.veryLightGray};
`;
