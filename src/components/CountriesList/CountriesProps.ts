export interface CountriesProps {
	name: {
		common: string;
	};
	flags: {
		svg: string;
		alt: string;
	};
	population: number;
	region: string;
	capital: string;
	cca3?: string;
}
