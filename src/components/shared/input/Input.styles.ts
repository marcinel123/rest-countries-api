import styled from "styled-components";

export const StyledInputLabel = styled.label`
	box-shadow: 2px 2px 10px -8px rgba(66, 68, 90, 1);
	border-radius: 5px;
	background-color: ${(props) => props.theme.colors.elements};
	display: flex;
	align-items: center;
	width: 100%;
	margin-bottom: 10%;
	@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
		min-width: 200px;
		margin-bottom: 0;
	}
`;

export const StyledInputElement = styled.input`
	background-color: ${(props) => props.theme.colors.elements};
	border: none;
	width: 100%;
	padding: 20px 10px;

	::placeholder {
		color: ${(props) => props.theme.colors.text};
		font-family: ${(props) => props.theme.fonts.family.basic};
		font-weight: ${(props) => props.theme.fonts.weight.semiBold};
	}
	:focus {
		outline: none;
		::placeholder {
			background-image: none;
			color: ${(props) => props.theme.colors.text};
		}
	}
	@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
		margin-bottom: 0;
		width: 80%;
		max-height: 58px;
		padding: 20px 15px;
	}
`;

export const InputImage = styled.img`
	display: flex;
	justify-content: center;
	margin-left: 5%;
	max-width: 15px;
	max-height: 15px;
`;
