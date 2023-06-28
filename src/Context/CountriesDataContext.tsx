import {
	createContext,
	ReactNode,
	useEffect,
	useMemo,
	useContext,
} from "react";
import { useFetchCountries } from "../api/useFetchCountries";

export const CountriesContext = createContext({});

export const useCountriesContext = () => {
	const contextData = useContext(CountriesContext);
	return contextData;
};

export const CountriesDataContext = ({ children }: { children: ReactNode }) => {
	const { error, countries, fetchCountries } = useFetchCountries();

	useEffect(() => {
		fetchCountries();
	}, []);

	const contextValues = useMemo(() => [error, countries], [error, countries]);

	return (
		<CountriesContext.Provider value={contextValues}>
			{children}
		</CountriesContext.Provider>
	);
};
