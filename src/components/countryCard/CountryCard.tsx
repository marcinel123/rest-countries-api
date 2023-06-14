import { CountriesProps } from "../CountriesList/CountriesProps";
import { StyledCountryCard } from "./CountryCard.styles";

export const CountryCard = ({
	name,
	flags,
	population,
	region,
	capital,
}: CountriesProps) => (
	<StyledCountryCard>
		<img src={flags.svg} alt={flags.alt} />
		<p>{name.common}</p>
		<p>Population:{population}</p>
		<p>Region:{region}</p>
		<p>Capital: {capital}</p>
	</StyledCountryCard>
);
