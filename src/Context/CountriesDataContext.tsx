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
	const contextDate = useContext(CountriesContext);
	return contextDate;
};

export const CountriesDataContext = ({ children }: { children: ReactNode }) => {
	const { error, countries, fetchCountries } = useFetchCountries();

	const contextValues = useMemo(() => [error, countries], [error, countries]);

	useEffect(() => {
		fetchCountries();
		console.log("useEffect called");
	}, []);

	return (
		<CountriesContext.Provider value={contextValues}>
			{children}
		</CountriesContext.Provider>
	);
};
