import { useRouteError } from "react-router-dom";

export const Page404 = () => {
	const error: unknown = useRouteError();
	return <h2>{error.message}</h2>;
};
