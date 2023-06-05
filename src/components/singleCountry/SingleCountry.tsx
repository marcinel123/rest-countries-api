import { CountriesProps } from "../CountriesList/CountriesProps";
import { StyledDivWithCountryData } from "./SingleCountry.styles";

export const SingleCountry = ({
	name,
	flags,
	population,
	region,
	capital,
}: CountriesProps) => (
	<StyledDivWithCountryData>
		<img src={flags.svg} alt={flags.alt} />
		<p>{name.common}</p>
		<p>Population:{population}</p>
		<p>Region:{region}</p>
		<p>Capital: {capital}</p>
	</StyledDivWithCountryData>
);
