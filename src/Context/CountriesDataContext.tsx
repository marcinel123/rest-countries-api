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
	selectCountryRegion: string;
	setSelectCountryRegion: React.Dispatch<React.SetStateAction<string>>;
	toggleTheme: () => void;
	darkTheme: boolean;
}

export const CountriesContext = createContext<ContextProps>({
	error: null,
	countries: [],
	selectCountryRegion: "",
	setSelectCountryRegion: () => {},
	toggleTheme: () => {},
	darkTheme: false,
});

export const useCountriesContext = () => {
	const contextData = useContext(CountriesContext);
	return contextData;
};

export const CountriesDataContext = ({ children }: { children: ReactNode }) => {
	const [darkTheme, setDarkTheme] = useState(false);
	const [selectCountryRegion, setSelectCountryRegion] = useState<string>("");
	const { error, countries, fetchCountries } = useFetchCountries();

	const toggleTheme = () => {
		console.log("toggle clicked");
		setDarkTheme((prevDarkTheme) => !prevDarkTheme);
	};

	useEffect(() => {
		fetchCountries();
	}, []);

	const contextValues = useMemo(() => {
		return {
			error,
			countries,
			selectCountryRegion,
			setSelectCountryRegion,
			toggleTheme,
			darkTheme,
		};
	}, [
		error,
		countries,
		selectCountryRegion,
		setSelectCountryRegion,
		darkTheme,
	]);

	return (
		<CountriesContext.Provider value={contextValues}>
			{children}
		</CountriesContext.Provider>
	);
};
