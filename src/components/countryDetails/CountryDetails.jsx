import { Link, useParams } from "react-router-dom";
import { useCountriesContext } from "../../Context/CountriesDataContext";

export const CountryDetails = () => {
	const { inputValue, setInputValue } = useCountriesContext();

	const { name } = useParams();
	return (
		<div>
			<Link onClick={() => setInputValue(inputValue)} to="/">
				Go back
			</Link>
			countryDetails
			<p>{name}</p>
		</div>
	);
};
