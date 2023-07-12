import { useState } from "react";

export const useDarkThemeMode = () => {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const toggleTheme = () => {
		setIsDarkTheme((prevState) => !prevState);
	};

	return { isDarkTheme, setIsDarkTheme, toggleTheme };
};
