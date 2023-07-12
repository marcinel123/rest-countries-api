import {
	SearchIcon,
	StyledInputElement,
	StyledInputLabel,
} from "./Input.styles";

export interface InputProps {
	inputId: string;
	placeholder: string;
}

export const Input = ({ inputId, placeholder }: InputProps) => (
	<StyledInputLabel htmlFor={inputId}>
		<SearchIcon />
		<StyledInputElement id={inputId} placeholder={placeholder} />
	</StyledInputLabel>
);
