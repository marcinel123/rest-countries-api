import { Link, useParams } from "react-router-dom";

export const CountryDetails = () => {
	const { name } = useParams();
	return (
		<div>
			<Link to="/">Go back</Link>
			countryDetails
			<p>{name}</p>
		</div>
	);
};
