import styled from "styled-components";
import searchIcon from "../../images/search.svg";

export const StyledInputandFilterSection = styled.section`
	padding: 20px 40px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: start;
	@media screen and (min-width: 550px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

export const StyledForm = styled.form`
	width: 100%;
	@media screen and (min-width: 550px) {
		width: 40%;
	}
`;

export const StyledInputLabel = styled.label`
	width: 100%;
`;

export const StyledInputElement = styled.input`
	border: none;
	width: 100%;
	padding: 4% 0;
	margin-bottom: 10%;

	::placeholder {
		background-image: url(${searchIcon});
		background-repeat: no-repeat;
		color: #b8b8b8;
		padding-left: 5%;
		@media screen and (min-width: 550px) {
			padding-left: 10%;
		}
	}
	:focus {
		::placeholder {
			background-image: none;
			color: white;
		}
	}
	@media screen and (min-width: 550px) {
		margin-bottom: 0;
		width: 100%;
		max-height: 58px;
		padding: 4% 15px;
	}
`;
export const StyledCountriesSelectLabel = styled.label`
	width: 20%;
	min-width: 145px;
`;

export const StyledCountriesSelect = styled.select`
	border: none;
	width: 100%;
	padding: 7%;
`;
