import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./lightTheme";
import { Header } from "./components/Header/Header";
import { FormPanel } from "./components/FormPanel/FormPanel";
import { CountriesList } from "./components/CountriesList/CountriesList";
import { GlobalStyle } from "./GlobalStyles";
import { CountriesDataContext } from "./context/CountriesDataContext";
import { darkTheme } from "./darkTheme";
import { useDarkThemeMode } from "./hooks/useDarkThemeMode";

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.colors.background};
`;

export const App = () => {
	const { isDarkTheme, toggleTheme } = useDarkThemeMode();

	return (
		<CountriesDataContext>
			<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
				<GlobalStyle />
				<StyledMain>
					<Header toggleTheme={toggleTheme} />
					<FormPanel />
					<CountriesList />
				</StyledMain>
			</ThemeProvider>
		</CountriesDataContext>
	);
};
