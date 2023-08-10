import React from "react";
import { useCountriesContext } from "../../../context/CountriesDataContext";
import {
	SearchIcon,
	StyledInputElement,
	StyledInputLabel,
} from "./Input.styles";

export interface InputProps {
	inputId: string;
	placeholder: string;
}

export const Input = ({ inputId, placeholder }: InputProps) => {
	const { inputValue, setInputValue } = useCountriesContext();
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	return (
		<StyledInputLabel htmlFor={inputId}>
			<SearchIcon />
			<StyledInputElement
				id={inputId}
				placeholder={placeholder}
				onChange={handleInputChange}
				value={inputValue}
				autoComplete="off"
			/>
		</StyledInputLabel>
	);
};
