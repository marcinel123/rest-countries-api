import { useState } from "react";
import {
	FilterButton,
	InputImage,
	StyledFilterPanel,
	StyledForm,
	StyledImg,
	StyledInputElement,
	StyledInputLabel,
	StyledInputandSelectSection,
} from "./CountriesSearchAndSelectModule.styles";
import searchIcon from "../../images/search.png";
import arrowIcon from "../../images/arrow.png";
import { CustomSelect } from "./CustomSelect";

const continentsArray = [
	{ id: 1, name: "Africa" },
	{ id: 2, name: "America" },
	{ id: 3, name: "Asia" },
	{ id: 4, name: "Europe" },
	{ id: 5, name: "Oceania" },
];

export const CountriesSearchAndSelectModule = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [selectOption, setSelectOption] = useState("Filter by Region");

	const MenuToggle = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	return (
		<StyledInputandSelectSection>
			<StyledForm>
				<StyledInputLabel htmlFor="country_search">
					<InputImage src={searchIcon} alt="" />
					<StyledInputElement
						id="country_search"
						placeholder="Search for a country..."
					/>
				</StyledInputLabel>
			</StyledForm>

			<StyledFilterPanel onClick={MenuToggle}>
				<span>{selectOption}</span>
				<FilterButton type="button">
					<StyledImg
						src={arrowIcon}
						alt="button to open continents select"
					></StyledImg>
				</FilterButton>
				{isMenuOpen && (
					<CustomSelect
						data={continentsArray}
						setSelectOption={setSelectOption}
					/>
				)}
			</StyledFilterPanel>
		</StyledInputandSelectSection>
	);
};
