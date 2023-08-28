import styled, { ThemeProvider } from "styled-components";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { lightTheme } from "../../theme/lightTheme";
import { Header } from "../Header/Header";
import { CountriesList } from "../CountriesList/CountriesList";
import { GlobalStyle } from "../../theme/globalStyles/GlobalStyles";
import { CountriesDataContext } from "../../Context/CountriesDataContext";
import { darkTheme } from "../../theme/darkTheme";
import { useDarkThemeMode } from "../../hooks/useDarkThemeMode";
import { CountryDetails } from "../countryDetails/CountryDetails";
import { Page404 } from "../page404/Page404";
import { countryDetailsLoader } from "../../api/countryDetailsLoader";

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.colors.background};
	min-height: 100vh;
`;

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Header />}>
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
	const { isDarkTheme } = useDarkThemeMode();
	console.log(isDarkTheme);

	return (
		<CountriesDataContext>
			<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
				<GlobalStyle />
				<StyledMain>
					{/* <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} /> */}
					<RouterProvider router={router} />
				</StyledMain>
			</ThemeProvider>
		</CountriesDataContext>
	);
};
