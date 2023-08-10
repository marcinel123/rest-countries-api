import {
	StyledDarkModeIcon,
	StyledH2,
	StyledHeader,
	StyledLightModeIcon,
	StyledLogo,
	ThemeSwitchButton,
} from "./Header.styles";

export interface HeaderProps {
	toggleTheme: () => void;
	isDarkTheme: boolean;
}

export const Header = ({ toggleTheme, isDarkTheme }: HeaderProps) => {
	return (
		<StyledHeader>
			<StyledLogo href="/">
				<StyledH2>Where in the world?</StyledH2>
			</StyledLogo>
			<ThemeSwitchButton onClick={toggleTheme} type="button">
				{isDarkTheme ? <StyledDarkModeIcon /> : <StyledLightModeIcon />}
				Dark Mode
			</ThemeSwitchButton>
		</StyledHeader>
	);
};
