import { useEffect } from "react";
import { StyledDisplaySection } from "./CountriesList.styles";
import { CountryCard } from "../countryCard/CountryCard";
import { useFetchCountries } from "../../api/useFetchCountries";

export const CountriesList = () => {
	const { error, countries, fetchCountries } = useFetchCountries();

	useEffect(() => {
		fetchCountries();
	}, []);

	return (
		<>
			{error && <p>There is an error fetching API.</p>}
			<StyledDisplaySection>
				{!countries && "loading"}
				{countries?.map(({ name, flags, population, region, capital }) => (
					<CountryCard
						name={name}
						flags={flags}
						population={population}
						region={region}
						capital={capital}
					/>
				))}
			</StyledDisplaySection>
		</>
	);
};
