import { useState } from "react";
import api from "./countriesApi";
import { CountriesProps } from "../components/CountriesList/CountriesProps";

export const useFetchCountries = () => {
	const [error, setError] = useState<boolean>();
	const [countries, setCountries] = useState<CountriesProps[]>();

	const fetchCountries = async () => {
		try {
			const response = await api.get("/all");
			setCountries(response.data);
		} catch (err: unknown) {
			setError(true);
		}
	};

	return { error, countries, fetchCountries };
};
