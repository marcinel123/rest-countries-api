import {
	StyledH2,
	StyledHeader,
	ThemeSwitchButton,
	StyledModeIcon,
} from "./Header.styles";

export interface HeaderProps {
	toggleTheme: () => void;
}

export const Header = ({ toggleTheme }: HeaderProps) => {
	return (
		<StyledHeader>
			<StyledH2>Where in the world?</StyledH2>
			<ThemeSwitchButton onClick={toggleTheme} type="button">
				<StyledModeIcon />
				Dark Mode
			</ThemeSwitchButton>
		</StyledHeader>
	);
};
