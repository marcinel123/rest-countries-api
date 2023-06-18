import { CountriesProps } from "../CountriesList/CountriesProps";
import {
	StyledCardFlagImage,
	StyledCountryCard,
	StyledCountryName,
	StyledDivWithCountryInfo,
	StyledParagraphWithCountryDetails,
} from "./CountryCard.styles";

export const CountryCard = ({
	name,
	flags,
	population,
	region,
	capital,
}: CountriesProps) => (
	<StyledCountryCard>
		<StyledCardFlagImage src={flags.svg} alt={flags.alt} />
		<StyledDivWithCountryInfo>
			<StyledCountryName>{name.common}</StyledCountryName>
			<StyledParagraphWithCountryDetails>
				<strong>Population: </strong>
				{population}
			</StyledParagraphWithCountryDetails>
			<StyledParagraphWithCountryDetails>
				<strong>Region: </strong>
				{region}
			</StyledParagraphWithCountryDetails>
			<StyledParagraphWithCountryDetails>
				<strong>Capital: </strong>
				{capital}
			</StyledParagraphWithCountryDetails>
		</StyledDivWithCountryInfo>
	</StyledCountryCard>
);
