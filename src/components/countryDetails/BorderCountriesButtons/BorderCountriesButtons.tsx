import { CountriesProps } from "../../CountriesList/CountriesProps";
import { NoBorderCountries } from "../NoBorderCountries/NoBorderCountries";
import {
	StyledLinkWithBorderCountries,
	StyledCategoryName,
	StyledWrapperWithButtons,
} from "./BorderCountriesButtons.styles";

interface BorderCountriesButtonsProps {
	borders: string[];
	countries: CountriesProps[] | undefined;
}

export const BorderCountriesButtons = ({
	borders,
	countries,
}: BorderCountriesButtonsProps) => {
	const borderCountriesArr = borders?.map((singleBorder) => {
		return countries?.find((singleCountry) => {
			return singleCountry.cca3 === singleBorder;
		});
	});

	if (!borderCountriesArr?.length) {
		return <NoBorderCountries />;
	}

	return (
		<StyledWrapperWithButtons>
			<StyledCategoryName>Border Countries:</StyledCategoryName>{" "}
			{borderCountriesArr.map((country, index) => {
				return (
					<StyledLinkWithBorderCountries
						to={`/${country?.name.common}`}
						key={index}
						type="button"
					>
						{country?.name.common}
					</StyledLinkWithBorderCountries>
				);
			})}
		</StyledWrapperWithButtons>
	);
};
