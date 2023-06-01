import {
	InputImage,
	StyledInputElement,
	StyledInputLabel,
} from "./Input.styles";

export interface InputProps {
	inputId: string;
	iconSrc: string;
	placeholder: string;
	alt: string;
}

export const Input = ({ inputId, iconSrc, placeholder, alt }: InputProps) => (
	<StyledInputLabel htmlFor={inputId}>
		<InputImage src={iconSrc} alt={alt} />
		<StyledInputElement id={inputId} placeholder={placeholder} />
	</StyledInputLabel>
);
