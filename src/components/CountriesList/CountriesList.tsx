import { StyledDisplaySection } from "./CountriesList.styles";
import { CountryCard } from "../countryCard/CountryCard";
import { useCountriesContext } from "../../Context/CountriesDataContext";
import { CountriesProps } from "./CountriesProps";

export const CountriesList = () => {
	const { error, countries, selectCountryRegion } = useCountriesContext();

	return (
		<>
			{error && <p>There is an error fetching API.</p>}
			<StyledDisplaySection>
				{!countries && "loading"}
				{countries
					?.filter((country) => {
						return selectCountryRegion
							? country.region === selectCountryRegion
							: country;
					})
					.map(
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
