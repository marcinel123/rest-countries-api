export interface CountryDataTypes {
	name: {
		common: string;
		nativeName: {
			ara: {
				official: string;
			};
		};
	};
	altSpellings: string;
	population: number;
	flags: {
		alt: string;
		png: string;
	};
	region: string;
	subregion: string;
	capital: [];
	tld: string[];
	currencies: {
		[key: number]: {
			name: string;
		};
	};

	languages: string;
	borders: string[];
}
