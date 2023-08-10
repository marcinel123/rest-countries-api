import { CountriesProps } from "../CountriesList/CountriesProps";
import {
	StyledCardFlagImage,
	StyledCountryCard,
	StyledCountryName,
	StyledDivWithCountryInfo,
	StyledParagraphWithCountryDetails,
	StyledSpanWithCategoryName,
} from "./CountryCard.styles";

export const CountryCard = ({
	name,
	flags,
	population,
	region,
	capital,
}: CountriesProps) => {
	return (
		<StyledCountryCard>
			<StyledCardFlagImage src={flags.svg} alt={flags.alt} />
			<StyledDivWithCountryInfo>
				<StyledCountryName>{name.common}</StyledCountryName>
				<StyledParagraphWithCountryDetails>
					<StyledSpanWithCategoryName>Population: </StyledSpanWithCategoryName>
					{population}
				</StyledParagraphWithCountryDetails>
				<StyledParagraphWithCountryDetails>
					<StyledSpanWithCategoryName>Region: </StyledSpanWithCategoryName>
					{region}
				</StyledParagraphWithCountryDetails>
				<StyledParagraphWithCountryDetails>
					<StyledSpanWithCategoryName>Capital: </StyledSpanWithCategoryName>
					{capital}
				</StyledParagraphWithCountryDetails>
			</StyledDivWithCountryInfo>
		</StyledCountryCard>
	);
};
