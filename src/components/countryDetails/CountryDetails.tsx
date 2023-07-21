import { Link, useLoaderData, useParams } from "react-router-dom";
import { useCountriesContext } from "../../Context/CountriesDataContext";

export const CountryDetails = () => {
	const { inputValue, setInputValue } = useCountriesContext();
	const { commonName } = useParams();
	const countryData = useLoaderData();

	const handleClick = (): void => {
		setInputValue(inputValue);
	};

	return (
		<div>
			<Link onClick={handleClick} to="/">
				Go back
			</Link>
			countryDetails
			<p>{commonName}</p>
			<div>
				{countryData.map((country) => {
					return <p key={country.name.common}>{country.name.common}</p>;
				})}
			</div>
		</div>
	);
};

export const countryDetailsLoader = async ({ params }) => {
	const { commonName } = params;
	const res = await fetch(`https://restcountries.com/v3.1/name/${commonName}`);

	if (!res.ok) {
		throw Error("Could not find that country.");
	}

	return res.json();
};
