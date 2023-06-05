import { useState, useEffect } from "react";
import { StyledDisplaySection } from "./CountriesList.styles";
import api from "../../api/countriesApi";
import { CountriesProps } from "./CountriesProps";
import { SingleCountry } from "../singleCountry/SingleCountry";

export const CountriesList = () => {
	const [error, setError] = useState<boolean>();
	const [countries, setCountries] = useState<CountriesProps[]>();

	useEffect(() => {
		const fetchCountries = async () => {
			try {
				const response = await api.get("/all");
				setCountries(response.data);
			} catch (err: unknown) {
				setError(true);
			}
		};
		fetchCountries();
	}, []);

	return (
		<>
			{error && <p>There is an error fetching API.</p>}
			<StyledDisplaySection>
				{countries
					? countries.map(({ name, flags, population, region, capital }) => (
							<SingleCountry
								name={name}
								flags={flags}
								population={population}
								region={region}
								capital={capital}
							/>
					  ))
					: "loading"}
			</StyledDisplaySection>
		</>
	);
};
