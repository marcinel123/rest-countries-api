import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Header } from "./components/Header/Header";
import { FormPanel } from "./components/FormPanel/FormPanel";
import { CountriesList } from "./components/CountriesList/CountriesList";
import { GlobalStyle } from "./GlobalStyles";
import { CountriesDataContext } from "./Context/CountriesDataContext";

export const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<StyledMain>
			<Header />
			<FormPanel />
			<CountriesDataContext>
				<CountriesList />
			</CountriesDataContext>
		</StyledMain>
	</ThemeProvider>
);

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.colors.veryLightGray};
`;
