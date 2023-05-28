import styled from "styled-components";

export const StyledInputandFilterSection = styled.section`
	padding: 20px 40px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: start;
	@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

export const StyledForm = styled.form`
	width: 100%;
	@media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
		width: 35%;
	}
`;

export const StyledInputLabel = styled.label`
	box-shadow: 2px 2px 10px -8px rgba(66, 68, 90, 1);
	border-radius: 5px;
	background-color: ${(props) => props.theme.colors.white};
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
	border: none;
	width: 100%;
	padding: 20px 10px;

	::placeholder {
		color: ${(props) => props.theme.colors.darkGray};
		font-family: ${(props) => props.theme.fonts.family.basic};
		font-weight: ${(props) => props.theme.fonts.weight.semiBold};
	}
	:focus {
		outline: none;
		::placeholder {
			background-image: none;
			color: ${(props) => props.theme.colors.white};
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

export const StyledCountriesSelectLabel = styled.label`
	border-radius: 5px;
	width: 20%;
	min-width: 145px;
	background-color: ${(props) => props.theme.colors.white};
	text-align: center;
`;

export const StyledCountriesSelect = styled.select`
	border: none;
	width: 90%;
	padding: 18px 5px;
`;
