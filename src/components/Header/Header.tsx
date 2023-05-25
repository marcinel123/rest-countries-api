import {
	StyledIcon,
	StyledH2,
	StyledHeader,
	ThemeSwitchButton,
} from "./Header.styles";

export const Header = () => (
	<StyledHeader>
		<StyledH2>Where in the world?</StyledH2>
		<ThemeSwitchButton type="button">
			<StyledIcon className="fa-regular fa-moon"></StyledIcon>
			Dark Mode
		</ThemeSwitchButton>
	</StyledHeader>
);
