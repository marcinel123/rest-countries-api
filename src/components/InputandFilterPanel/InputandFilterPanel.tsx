import styled from "styled-components";
import searchIcon from "../../images/search.svg";

export const InputandFilterPanel = () => (
	<StyledInputandFilterSection>
		<form>
			<label htmlFor="country_search">
				<StyledInputElement
					// style={{
					// 	backgroundImage: `url(${searchIcon})`,
					// 	backgroundRepeat: "no-repeat",
					// }}
					id="country_search"
					placeholder="Search for a conutry"
				/>
			</label>
		</form>

		<label htmlFor="continents">
			<select name="continents" id="continents">
				<option value="" selected disabled hidden>
					Filter by region
				</option>
				<option value="Africa">Africa</option>
				<option value="America">America</option>
				<option value="Asia">Asia</option>
				<option value="Europa">Europa</option>
				<option value="Oceania">Oceania</option>
			</select>
		</label>
	</StyledInputandFilterSection>
);

export const StyledInputandFilterSection = styled.section`
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 550px) {
		padding: 20px 40px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

export const StyledInputElement = styled.input`
	::placeholder {
		color: #b8b8b8;
		padding-left: 5%;
		@media screen and (min-width: 550px) {
			width: 100%;
			padding-left: 10%;
		}
	}
	background-image: url(${searchIcon});
	background-repeat: no-repeat;
	width: 100%;
	@media screen and (min-width: 550px) {
		width: 100%;
	}
`;
