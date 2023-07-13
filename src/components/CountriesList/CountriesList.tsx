import { StyledDisplaySection, StyledH4 } from "./CountriesList.styles";
import { CountryCard } from "../countryCard/CountryCard";
import { useCountriesContext } from "../../context/CountriesDataContext";
import { CountriesProps } from "./CountriesProps";

export const CountriesList = () => {
	const { inputValue, error, countries, selectCountryRegion } =
		useCountriesContext();

	const filteredData = countries
		?.filter((country) => {
			return selectCountryRegion
				? country.region === selectCountryRegion
				: country;
		})
		.filter((country) => {
			return country.name.common
				.toLowerCase()
				.includes(inputValue.toLowerCase());
		});

	return (
		<>
			{error && <p>There is an error fetching API.</p>}
			<StyledDisplaySection>
				{!countries && "loading"}
				{filteredData?.length ? (
					filteredData?.map(
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
					)
				) : (
					<StyledH4>No countries found.</StyledH4>
				)}
			</StyledDisplaySection>
		</>
	);
};
