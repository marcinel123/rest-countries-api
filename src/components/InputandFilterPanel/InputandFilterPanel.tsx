import {
	InputImage,
	StyledCountriesSelect,
	StyledCountriesSelectLabel,
	StyledForm,
	StyledInputElement,
	StyledInputLabel,
	StyledInputandFilterSection,
} from "./InputandFilterPanel.styles";
import searchIcon from "../../images/search.png";

export const InputandFilterPanel = () => (
	<StyledInputandFilterSection>
		<StyledForm>
			<StyledInputLabel htmlFor="country_search">
				<InputImage src={searchIcon} alt="" />
				<StyledInputElement
					id="country_search"
					placeholder="Search for a country..."
				/>
			</StyledInputLabel>
		</StyledForm>

		<StyledCountriesSelectLabel htmlFor="continents">
			<StyledCountriesSelect name="continents" id="continents">
				<option value="" selected disabled hidden>
					Filter by region
				</option>
				<option value="Africa">Africa</option>
				<option value="America">America</option>
				<option value="Asia">Asia</option>
				<option value="Europa">Europa</option>
				<option value="Oceania">Oceania</option>
			</StyledCountriesSelect>
		</StyledCountriesSelectLabel>
	</StyledInputandFilterSection>
);
