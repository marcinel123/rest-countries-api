import { useState } from "react";
import arrowIcon from "../../../images/arrow.png";
import {
	ContinentOption,
	FilterButton,
	StyledCustomSelect,
	StyledFilterPanel,
	StyledImg,
} from "./CustomSelect.styles";
import { useCountriesContext } from "../../../Context/CountriesDataContext";

export interface CustomSelectProps {
	data: {
		id: number;
		name: string;
	}[];
}

export const CustomSelect = ({ data }: CustomSelectProps) => {
	const [selectOption, setSelectOption] = useState("Filter by Region");
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { setSelectCountryRegion } = useCountriesContext();

	const menuToggle = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	const handleOptionSelection = (name: string) => {
		setSelectOption(name);
		setSelectCountryRegion(name);
	};

	return (
		<StyledFilterPanel onClick={menuToggle}>
			<span>{selectOption}</span>
			<FilterButton type="button">
				<StyledImg src={arrowIcon} alt="button to open continents select" />
			</FilterButton>
			{isMenuOpen && (
				<StyledCustomSelect>
					{data.map(({ name, id }) => (
						<ContinentOption
							key={id}
							onClick={() => handleOptionSelection(name)}
						>
							{name}
						</ContinentOption>
					))}
				</StyledCustomSelect>
			)}
		</StyledFilterPanel>
	);
};
