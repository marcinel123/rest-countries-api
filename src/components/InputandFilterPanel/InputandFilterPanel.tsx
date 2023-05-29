import { useState } from "react";
import {
	CountryOption,
	FilterButton,
	InputImage,
	StyledDivWithOption,
	StyledFilterPanel,
	StyledForm,
	StyledImg,
	StyledInputElement,
	StyledInputLabel,
	StyledInputandFilterSection,
} from "./InputandFilterPanel.styles";
import searchIcon from "../../images/search.png";
import arrowIcon from "../../images/arrow.png";

export const InputandFilterPanel = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const MenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
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

			<StyledFilterPanel>
				<span>Filter by Region</span>
				<FilterButton type="button" onClick={MenuToggle}>
					<StyledImg src={arrowIcon} alt=""></StyledImg>
				</FilterButton>
				{isMenuOpen ? (
					<StyledDivWithOption>
						<CountryOption>Africa</CountryOption>
						<CountryOption>America</CountryOption>
						<CountryOption>Asia</CountryOption>
						<CountryOption>Europa</CountryOption>
						<CountryOption>Oceania</CountryOption>
					</StyledDivWithOption>
				) : null}
			</StyledFilterPanel>
		</StyledInputandFilterSection>
	);
};
