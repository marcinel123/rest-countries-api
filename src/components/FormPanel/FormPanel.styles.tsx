import styled from "styled-components";

export const StyledInputandSelectSection = styled.section`
	margin-top: 15px;
	padding: 25px 45px 10px 45px;
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

export const StyledCountriesLabel = styled.label`
	border-radius: 5px;
	width: 20%;
	min-width: 145px;
	background-color: ${(props) => props.theme.colors.white};
	text-align: center;
`;
