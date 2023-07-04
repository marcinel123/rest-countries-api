import { useThemeContext } from "../../Context/ThemeContext";
import {
	StyledIcon,
	StyledH2,
	StyledHeader,
	ThemeSwitchButton,
} from "./Header.styles";

export const Header = () => {
	const { toggleTheme } = useThemeContext();

	return (
		<StyledHeader>
			<StyledH2>Where in the world?</StyledH2>
			<ThemeSwitchButton onClick={toggleTheme} type="button">
				<StyledIcon className="fa-regular fa-moon" />
				Dark Mode
			</ThemeSwitchButton>
		</StyledHeader>
	);
};
