import {
	StyledButtonIcon,
	StyledH2,
	StyledHeader,
	StyledModeButton,
} from "./Header.styles";

export const Header = () => (
	<StyledHeader>
		<StyledH2>Where in the world?</StyledH2>
		<StyledModeButton type="button">
			<StyledButtonIcon
				className="fa-regular fa-moon"
				style={{ color: "#0d0d0d" }}
			></StyledButtonIcon>
			Dark Mode
		</StyledModeButton>
	</StyledHeader>
);
