import React, { useState } from "react";
import {
	ContinentOption,
	FilterButton,
	InputImage,
	StyledCustomSelect,
	StyledFilterPanel,
	StyledForm,
	StyledImg,
	StyledInputElement,
	StyledInputLabel,
	StyledInputandFilterSection,
} from "./InputandFilterPanel.styles";
import searchIcon from "../../images/search.png";
import arrowIcon from "../../images/arrow.png";

const ContinentsArray = [
	{ id: 1, name: "Africa" },
	{ id: 2, name: "America" },
	{ id: 3, name: "Asia" },
	{ id: 4, name: "Europe" },
	{ id: 5, name: "Oceania" },
];

export const InputandFilterPanel = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [selectOption, setSelectOption] = useState("Filter by Region");

	const MenuToggle = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	const SelectOptionsHandle = (e: React.ChangeEvent<HTMLLIElement>) => {
		setSelectOption(e.target.innerText);
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

			<StyledFilterPanel onClick={MenuToggle}>
				<span>{selectOption}</span>
				<FilterButton type="button">
					<StyledImg
						src={arrowIcon}
						alt="button to open continents select"
					></StyledImg>
				</FilterButton>
				{isMenuOpen ? (
					<StyledCustomSelect>
						{ContinentsArray.map(({ name, id }) => (
							<ContinentOption key={id} onClick={(e) => SelectOptionsHandle(e)}>
								{name}
							</ContinentOption>
						))}
					</StyledCustomSelect>
				) : null}
			</StyledFilterPanel>
		</StyledInputandFilterSection>
	);
};
