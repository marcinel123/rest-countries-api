import React, {
	createContext,
	ReactNode,
	useMemo,
	useContext,
	useState,
} from "react";
import { useFetchCountries } from "../api/useFetchCountries";
import { CountriesProps } from "../components/CountriesList/CountriesProps";

interface ContextProps {
	error: unknown;
	countries?: CountriesProps[];
	selectCountryRegion: string;
	setSelectCountryRegion: React.Dispatch<React.SetStateAction<string>>;
	inputValue: string;
	setInputValue: React.Dispatch<React.SetStateAction<string>>;
	fetchCountries: () => Promise<void>;
	selectOption: string;
	setSelectOption: React.Dispatch<React.SetStateAction<string>>;
}

export const CountriesContext = createContext<ContextProps>({
	error: null,
	countries: [],
	selectCountryRegion: "",
	setSelectCountryRegion: () => {},
	inputValue: "",
	setInputValue: () => {},
	fetchCountries: async () => {},
	selectOption: "Filter by Region",
	setSelectOption: () => {},
});

export const useCountriesContext = () => {
	const contextData = useContext(CountriesContext);
	return contextData;
};

export const CountriesDataContext = ({ children }: { children: ReactNode }) => {
	const [selectOption, setSelectOption] = useState("Filter by Region");
	const [inputValue, setInputValue] = useState<string>("");
	const [selectCountryRegion, setSelectCountryRegion] = useState<string>("");
	const { error, countries, fetchCountries } = useFetchCountries();

	const contextValues = useMemo(() => {
		return {
			error,
			countries,
			selectCountryRegion,
			setSelectCountryRegion,
			inputValue,
			setInputValue,
			fetchCountries,
			selectOption,
			setSelectOption,
		};
	}, [
		error,
		countries,
		selectCountryRegion,
		setSelectCountryRegion,
		inputValue,
		setInputValue,
		fetchCountries,
		selectOption,
		setSelectOption,
	]);

	return (
		<CountriesContext.Provider value={contextValues}>
			{children}
		</CountriesContext.Provider>
	);
};
