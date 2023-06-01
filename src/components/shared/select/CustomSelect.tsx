import { useState } from "react";
import arrowIcon from "../../../images/arrow.png";
import {
	ContinentOption,
	FilterButton,
	StyledCustomSelect,
	StyledFilterPanel,
	StyledImg,
} from "./CustomSelect.styles";

export interface CustomSelectProps {
	data: {
		id: number;
		name: string;
	}[];
}

export const CustomSelect = ({ data }: CustomSelectProps) => {
	const [selectOption, setSelectOption] = useState("Filter by Region");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuToggle = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	const handleOptionSelection = (name: string) => {
		setSelectOption(name);
	};

	return (
		<StyledFilterPanel onClick={menuToggle}>
			<span>{selectOption}</span>
			<FilterButton type="button">
				<StyledImg
					src={arrowIcon}
					alt="button to open continents select"
				></StyledImg>
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
