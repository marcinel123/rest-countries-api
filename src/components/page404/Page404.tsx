import { useRouteError } from "react-router-dom";

export const Page404 = () => {
	const error = useRouteError() as Error;

	return <h2>{error.message}</h2>;
};
