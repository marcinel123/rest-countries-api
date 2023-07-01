import React, {
	createContext,
	ReactNode,
	useEffect,
	useMemo,
	useContext,
	useState,
} from "react";
import { useFetchCountries } from "../api/useFetchCountries";
import { CountriesProps } from "../components/CountriesList/CountriesProps";

interface ContextProps {
	error: unknown;
	countries?: CountriesProps[];
}

interface SelectCountriesContextProps {
	selectCountryRegion: string;
	setSelectCountryRegion: React.Dispatch<React.SetStateAction<string>>;
}
export const SelectCountriesContext =
	createContext<SelectCountriesContextProps>({
		selectCountryRegion: "",
		setSelectCountryRegion: () => {},
	});

export const CountriesContext = createContext<ContextProps>({
	error: null,
	countries: [],
});

export const useCountriesContext = () => {
	const contextData = useContext(CountriesContext);
	return contextData;
};

export const useSelectCountriesContext = () => {
	const selectedCountry = useContext(SelectCountriesContext);
	return selectedCountry;
};

export const CountriesDataContext = ({ children }: { children: ReactNode }) => {
	const [selectCountryRegion, setSelectCountryRegion] = useState<string>("");
	const { error, countries, fetchCountries } = useFetchCountries();

	useEffect(() => {
		fetchCountries();
	}, []);

	const contextValues = useMemo(() => {
		return { error, countries };
	}, [error, countries]);

	const selectedCountryContext = useMemo(() => {
		return { selectCountryRegion, setSelectCountryRegion };
	}, [selectCountryRegion, setSelectCountryRegion]);

	return (
		<CountriesContext.Provider value={contextValues}>
			<SelectCountriesContext.Provider value={selectedCountryContext}>
				{children}
			</SelectCountriesContext.Provider>
		</CountriesContext.Provider>
	);
};
