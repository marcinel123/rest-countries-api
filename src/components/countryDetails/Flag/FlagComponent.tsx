import React from "react";
import { CountryDataTypes } from "../CountryDetailsProps";
import {
	StyledArrowIcon,
	StyledFlagWrapper,
	StyledFlagImage,
	StyledLink,
} from "./FlagComponent.styles";

interface FlagComponentProps {
	countryData: CountryDataTypes[];
	inputValue: string;
	setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export const FlagComponent = ({
	countryData,
	inputValue,
	setInputValue,
}: FlagComponentProps) => {
	const handleClick = () => {
		setInputValue(inputValue);
	};

	return (
		<StyledFlagWrapper>
			<StyledLink onClick={handleClick} to="/">
				<StyledArrowIcon />
				Back
			</StyledLink>

			<div>
				{countryData?.map(({ name, flags }) => {
					return (
						<StyledFlagImage
							src={flags.png}
							alt={flags.alt}
							key={name.common}
						/>
					);
				})}
			</div>
		</StyledFlagWrapper>
	);
};
