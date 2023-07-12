import { useState } from "react";
import {
	ContinentOption,
	FilterButton,
	StyledArrowIcon,
	StyledCustomSelect,
	StyledFilterPanel,
	StyledSpan,
} from "./CustomSelect.styles";
import { useCountriesContext } from "../../../context/CountriesDataContext";

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
			<StyledSpan>{selectOption}</StyledSpan>
			<FilterButton type="button">
				<StyledArrowIcon />
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
