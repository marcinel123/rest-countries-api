import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./lightTheme";
import { Header } from "./components/Header/Header";
import { FormPanel } from "./components/FormPanel/FormPanel";
import { CountriesList } from "./components/CountriesList/CountriesList";
import { GlobalStyle } from "./GlobalStyles";
import { CountriesDataContext } from "./Context/CountriesDataContext";
import { ThemeChangeProvider, useThemeContext } from "./Context/ThemeContext";
import { darkTheme } from "./darkTheme";

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.colors.background};
`;

export const App = () => {
	const { isDarkTheme } = useThemeContext();
	console.log(isDarkTheme);
	return (
		<ThemeChangeProvider>
			<CountriesDataContext>
				<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
					<GlobalStyle />
					<StyledMain>
						<Header />
						<FormPanel />
						<CountriesList />
					</StyledMain>
				</ThemeProvider>
			</CountriesDataContext>
		</ThemeChangeProvider>
	);
};
