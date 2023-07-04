import React, {
	useState,
	createContext,
	ReactNode,
	useMemo,
	useContext,
} from "react";

interface ThemeProps {
	toggleTheme: () => void;
	isDarkTheme: boolean;
}

export const ThemeContext = createContext<ThemeProps>({
	toggleTheme: () => {},
	isDarkTheme: false,
});

export const useThemeContext = () => {
	const useTheme = useContext(ThemeContext);
	return useTheme;
};

export const ThemeChangeProvider = ({ children }: { children: ReactNode }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	console.log(isDarkTheme);

	const toggleTheme = () => {
		console.log("clicked");
		setIsDarkTheme((prevState) => !prevState);
	};

	const themeValues = useMemo(() => {
		return {
			toggleTheme,
			isDarkTheme,
		};
	}, [isDarkTheme]);

	return (
		<ThemeContext.Provider value={themeValues}>
			{children}
		</ThemeContext.Provider>
	);
};
