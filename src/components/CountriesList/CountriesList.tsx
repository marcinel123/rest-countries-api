import { StyledDisplaySection, StyledParagraph } from "./CountriesList.styles";
import { CountryCard } from "../countryCard/CountryCard";
import { useCountriesContext } from "../../context/CountriesDataContext";
import { CountriesProps } from "./CountriesProps";

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
		return <StyledParagraph>No countries found.</StyledParagraph>;
	}

	return (
		<>
			{error && <p>There is an error fetching API.</p>}
			<StyledDisplaySection>
				{!countries && "loading"}
				{filteredDataByRegionandInput?.map(
					({ name, flags, population, region, capital }: CountriesProps) => (
						<CountryCard
							key={name.common}
							name={name}
							flags={flags}
							population={population}
							region={region}
							capital={capital}
						/>
					)
				)}
			</StyledDisplaySection>
		</>
	);
};
