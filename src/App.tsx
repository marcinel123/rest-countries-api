import styled, { ThemeProvider } from "styled-components";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { lightTheme } from "./lightTheme";
import { Header } from "./components/Header/Header";
import { CountriesList } from "./components/CountriesList/CountriesList";
import { GlobalStyle } from "./GlobalStyles";
import { CountriesDataContext } from "./context/CountriesDataContext";
import { darkTheme } from "./darkTheme";
import { useDarkThemeMode } from "./hooks/useDarkThemeMode";
import { CountryDetails } from "./components/countryDetails/CountryDetails";

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.colors.background};
`;

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route index element={<CountriesList />} />
			<Route path=":name" element={<CountryDetails />} />
			<Route path="*" element={<CountriesList />} />
		</Route>
	)
);

export const App = () => {
	const { isDarkTheme, toggleTheme } = useDarkThemeMode();

	return (
		<CountriesDataContext>
			<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
				<GlobalStyle />
				<StyledMain>
					<Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
					{/* <CountriesList /> */}
					<RouterProvider router={router} />
				</StyledMain>
			</ThemeProvider>
		</CountriesDataContext>
	);
};
