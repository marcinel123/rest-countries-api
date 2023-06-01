import React from "react";
import { ContinentOption, StyledCustomSelect } from "./CustomSelect.styles";

export interface CustomSelectProps {
	data: {
		id: number;
		name: string;
	}[];
	setSelectOption: React.Dispatch<React.SetStateAction<string>>;
}

export const CustomSelect = ({ data, setSelectOption }: CustomSelectProps) => {
	const handleOptionSelection = (name: string) => {
		setSelectOption(name);
	};

	return (
		<StyledCustomSelect>
			{data.map(({ name, id }) => (
				<ContinentOption key={id} onClick={() => handleOptionSelection(name)}>
					{name}
				</ContinentOption>
			))}
		</StyledCustomSelect>
	);
};
