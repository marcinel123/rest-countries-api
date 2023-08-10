import { LoaderFunction } from "react-router-dom";

export const countryDetailsLoader: LoaderFunction = async ({ params }) => {
	const { commonName } = params;
	const res = await fetch(
		`https://restcountries.com/v3.1/name/${commonName}?fullText=true`
	);

	if (!res.ok) {
		throw Error("Could not find that country.");
	}

	return res.json();
};
