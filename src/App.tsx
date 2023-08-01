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
import { CountriesDataContext } from "./Context/CountriesDataContext";
import { darkTheme } from "./darkTheme";
import { useDarkThemeMode } from "./hooks/useDarkThemeMode";
import {
	CountryDetails,
	countryDetailsLoader,
} from "./components/countryDetails/CountryDetails";
import { Page404 } from "./components/page404/Page404";

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.colors.background};
`;

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route
				path=":commonName"
				element={<CountryDetails />}
				loader={countryDetailsLoader}
				errorElement={<Page404 />}
			/>
			<Route path="/" element={<CountriesList />} />
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
					<RouterProvider router={router} />
				</StyledMain>
			</ThemeProvider>
		</CountriesDataContext>
	);
};
