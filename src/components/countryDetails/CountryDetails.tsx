import { LoaderFunction, useLoaderData } from "react-router-dom";
import { useCountriesContext } from "../../Context/CountriesDataContext";
import {
	StyledArrowIcon,
	StyledCountryName,
	StyledDivWithButtons,
	StyledDivWithCountryData,
	StyledDivWithCountryInfo,
	StyledDivWithFlag,
	StyledFlagImage,
	StyledLeftColumnWithCountryInfo,
	StyledLink,
	StyledLinkWithBorderCountries,
	StyledParagraphWithCountryInfo,
	StyledSection,
	StyledSpanWithCategoryName,
} from "./CountryDetails.styles";
import { CountriesProps } from "../CountriesList/CountriesProps";

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

export const CountryDetails = () => {
	const { inputValue, setInputValue, countries } = useCountriesContext();
	const countryData = useLoaderData() as CountryDataTypes[];

	const handleClick = (): void => {
		setInputValue(inputValue);
	};

	return (
		<StyledSection>
			<StyledDivWithFlag>
				<StyledLink onClick={handleClick} to="/">
					<StyledArrowIcon />
					Back
				</StyledLink>

				<div>
					{countryData?.map(({ name, flags }) => {
						return (
							<StyledFlagImage
								src={flags.png}
								alt={flags.alt}
								key={name.common}
							/>
						);
					})}
				</div>
			</StyledDivWithFlag>
			<StyledDivWithCountryData>
				{countryData?.map(
					({
						name,
						population,
						region,
						subregion,
						capital,
						tld,
						currencies,
						languages,
						altSpellings,
						borders,
					}) => {
						const arr: CountriesProps[] = [];

						borders?.forEach((singleBorder) => {
							const borderCountry = countries?.find((singleCountry) => {
								return singleCountry.cca3 === singleBorder;
							}) as CountriesProps;

							arr.push(borderCountry);
						});

						const currencieKey = Object.keys(currencies)[0];

						const currencieName =
							currencies[currencieKey as unknown as number].name;

						const languagesKeys = Object.keys(languages);

						return (
							<div key={name.common}>
								<StyledDivWithCountryInfo>
									<StyledLeftColumnWithCountryInfo>
										<StyledCountryName>{name.common}</StyledCountryName>
										<StyledParagraphWithCountryInfo>
											<StyledSpanWithCategoryName>
												Native Name:
											</StyledSpanWithCategoryName>{" "}
											{altSpellings[2]}
										</StyledParagraphWithCountryInfo>

										<StyledParagraphWithCountryInfo>
											<StyledSpanWithCategoryName>
												Population:
											</StyledSpanWithCategoryName>{" "}
											{population}
										</StyledParagraphWithCountryInfo>
										<StyledParagraphWithCountryInfo>
											<StyledSpanWithCategoryName>
												Region:
											</StyledSpanWithCategoryName>{" "}
											{region}
										</StyledParagraphWithCountryInfo>
										<StyledParagraphWithCountryInfo>
											<StyledSpanWithCategoryName>
												Sub Region:
											</StyledSpanWithCategoryName>{" "}
											{subregion}
										</StyledParagraphWithCountryInfo>
										<StyledParagraphWithCountryInfo>
											<StyledSpanWithCategoryName>
												Capital:
											</StyledSpanWithCategoryName>{" "}
											{capital}
										</StyledParagraphWithCountryInfo>
									</StyledLeftColumnWithCountryInfo>
									<div>
										<StyledParagraphWithCountryInfo>
											<StyledSpanWithCategoryName>
												Top Level Domain:
											</StyledSpanWithCategoryName>{" "}
											{tld[0]}
										</StyledParagraphWithCountryInfo>
										<StyledParagraphWithCountryInfo>
											<StyledSpanWithCategoryName>
												Currencies:
											</StyledSpanWithCategoryName>{" "}
											{currencieName}
										</StyledParagraphWithCountryInfo>
										<StyledParagraphWithCountryInfo>
											<StyledSpanWithCategoryName>
												Languages:
											</StyledSpanWithCategoryName>{" "}
											{languagesKeys.map((lang) => {
												return (
													<span key={lang}>
														{languages[lang as unknown as number]},{" "}
													</span>
												);
											})}
										</StyledParagraphWithCountryInfo>
									</div>
								</StyledDivWithCountryInfo>
								<StyledDivWithButtons>
									<StyledSpanWithCategoryName>
										Border Countries:
									</StyledSpanWithCategoryName>{" "}
									{arr.length
										? arr.map((country, index) => {
												return (
													<StyledLinkWithBorderCountries
														to={`/${country?.name.common}`}
														key={index}
														type="button"
													>
														{country?.name.common.substr(0, 12)}
													</StyledLinkWithBorderCountries>
												);
										  })
										: "No border countries found."}
								</StyledDivWithButtons>
							</div>
						);
					}
				)}
			</StyledDivWithCountryData>
		</StyledSection>
	);
};

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
