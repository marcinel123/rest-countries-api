import styled from "styled-components";

export const Header = () => (
	<StyledHeader>
		<h2>Where in the world?</h2>
		<button type="button">Dark Mode</button>
	</StyledHeader>
);

export const StyledHeader = styled.header`
	padding: 20px 30px;
	width: 100%;
	display: flex;
	justify-content: space-between;
`
