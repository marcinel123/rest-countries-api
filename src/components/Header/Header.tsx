import { useCountriesContext } from "../../Context/CountriesDataContext";
import {
	StyledIcon,
	StyledH2,
	StyledHeader,
	ThemeSwitchButton,
} from "./Header.styles";

export const Header = () => {
	const { toggleTheme, darkTheme } = useCountriesContext();

	return (
		<StyledHeader darkTheme={darkTheme}>
			<StyledH2>Where in the world?</StyledH2>
			<ThemeSwitchButton onClick={toggleTheme} type="button">
				<StyledIcon className="fa-regular fa-moon" />
				Dark Mode
			</ThemeSwitchButton>
		</StyledHeader>
	);
};
