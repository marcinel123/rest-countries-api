import { Outlet } from "react-router-dom";

import {
	StyledDarkModeIcon,
	StyledH2,
	StyledHeader,
	StyledLightModeIcon,
	StyledLogo,
	ThemeSwitchButton,
} from "./Header.styles";
import { useDarkThemeMode } from "../../hooks/useDarkThemeMode";

export interface HeaderProps {
	toggleTheme: () => void;
	isDarkTheme: boolean;
}

export const Header = () => {
	const { isDarkTheme, toggleTheme } = useDarkThemeMode();
	console.log(isDarkTheme);
	return (
		<>
			<StyledHeader>
				<StyledLogo to="/">
					<StyledH2>Where in the world?</StyledH2>
				</StyledLogo>
				<ThemeSwitchButton onClick={toggleTheme} type="button">
					{isDarkTheme ? <StyledDarkModeIcon /> : <StyledLightModeIcon />}
					Dark Mode
				</ThemeSwitchButton>
			</StyledHeader>
			<Outlet />
		</>
	);
};
