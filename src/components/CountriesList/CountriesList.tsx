import {
	StyledDisplaySection,
	StyledLink,
	StyledParagraph,
} from "./CountriesList.styles";
import { CountryCard } from "../countryCard/CountryCard";
import { useCountriesContext } from "../../Context/CountriesDataContext";
import { CountriesProps } from "./CountriesProps";
import { FormPanel } from "../FormPanel/FormPanel";

export const CountriesList = () => {
	const { inputValue, error, countries, selectCountryRegion } =
		useCountriesContext();

	const filteredDataByRegion = countries?.filter((country) => {
		return selectCountryRegion
			? country.region === selectCountryRegion
			: country;
	});

	const filteredDataByRegionandInput = filteredDataByRegion?.filter(
		(country) => {
			return country.name.common
				.toLowerCase()
				.includes(inputValue.toLowerCase());
		}
	);

	if (!filteredDataByRegionandInput?.length) {
		return (
			<>
				<FormPanel />
				<StyledParagraph>No countries found.</StyledParagraph>
			</>
		);
	}

	return (
		<>
			<FormPanel />
			{error && <p>There is an error fetching API.</p>}
			<StyledDisplaySection>
				{!countries && "loading"}
				{filteredDataByRegionandInput?.map(
					({ name, flags, population, region, capital }: CountriesProps) => (
						<StyledLink to={name.common.toLocaleLowerCase()} key={name.common}>
							<CountryCard
								name={name}
								flags={flags}
								population={population}
								region={region}
								capital={capital}
							/>
						</StyledLink>
					)
				)}
			</StyledDisplaySection>
		</>
	);
};
