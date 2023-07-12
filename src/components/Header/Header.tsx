import {
	StyledDarkModeIcon,
	StyledH2,
	StyledHeader,
	StyledLightModeIcon,
	ThemeSwitchButton,
} from "./Header.styles";

export interface HeaderProps {
	toggleTheme: () => void;
	isDarkTheme: boolean;
}

export const Header = ({ toggleTheme, isDarkTheme }: HeaderProps) => {
	return (
		<StyledHeader>
			<StyledH2>Where in the world?</StyledH2>
			<ThemeSwitchButton onClick={toggleTheme} type="button">
				{isDarkTheme ? <StyledDarkModeIcon /> : <StyledLightModeIcon />}
				Dark Mode
			</ThemeSwitchButton>
		</StyledHeader>
	);
};
