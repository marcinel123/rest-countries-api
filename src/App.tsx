import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Header } from "./components/Header/Header";
import { InputandFilterPanel } from "./components/InputandFilterPanel/InputandFilterPanel";
import { CountriesInfoPanel } from "./components/CountriesInfoPanel/CountriesInfoPanel";

export const App = () => (
	<ThemeProvider theme={theme}>
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
