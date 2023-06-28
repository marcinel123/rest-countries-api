import {
	createContext,
	ReactNode,
	useEffect,
	useMemo,
	useContext,
} from "react";
import { useFetchCountries } from "../api/useFetchCountries";

interface ContextProps {
	error: unknown;
	countries: [];
}

export const CountriesContext = createContext<ContextProps>({
	error: null,
	countries: [],
});

export const useCountriesContext = () => {
	const contextData = useContext(CountriesContext);
	return contextData;
};

export const CountriesDataContext = ({ children }: { children: ReactNode }) => {
	const { error, countries, fetchCountries } = useFetchCountries();

	useEffect(() => {
		fetchCountries();
	}, []);

	const contextValues = useMemo(() => {
		return { error, countries };
	}, [error, countries]);

	return (
		<CountriesContext.Provider value={contextValues}>
			{children}
		</CountriesContext.Provider>
	);
};
