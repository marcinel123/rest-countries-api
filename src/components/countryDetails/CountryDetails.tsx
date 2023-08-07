import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useCountriesContext } from "../../Context/CountriesDataContext";
import {
	StyledArrowIcon,
	StyledButtons,
	StyledCountryDataWrapper,
	StyledCountryInfoWrapper,
	StyledCountryName,
	StyledDivWithCountryData,
	StyledDivWithFlag,
	StyledFlagImage,
	StyledLink,
	StyledSection,
	StyledWrapperWithButtons,
} from "./CountryDetails.styles";
import { CountryDataTypes } from "./CountryDetailsProps";
import { LeftColumnWithCountryInfo } from "./LeftColumnWithCountryInfo/LeftColumnWithCountryInfo";
import { StyledCategoryName } from "./LeftColumnWithCountryInfo/LeftColumnWithCountryInfo.styles";
import { RightColumnWithCountryInfo } from "./RightColumnWithCountryInfo/RightColumnWithCountryInfo";
import { NoBorderCountries } from "./NoBorderCountries/NoBorderCountries";

export const CountryDetails = () => {
	const { inputValue, setInputValue, countries, fetchCountries } =
		useCountriesContext();
	const countryData = useLoaderData() as CountryDataTypes[];

	useEffect(() => {
		if (!countries?.length) {
			fetchCountries();
		}
	}, []);

	const handleClick = () => {
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
						const borderCountriesArr = borders?.map((singleBorder) => {
							return countries?.find((singleCountry) => {
								return singleCountry.cca3 === singleBorder;
							});
						});

						return (
							<div key={name.common}>
								<StyledCountryInfoWrapper>
									<StyledCountryName>{name.common}</StyledCountryName>
									<StyledCountryDataWrapper>
										<LeftColumnWithCountryInfo
											nativeName={altSpellings}
											population={population}
											region={region}
											subregion={subregion}
											capital={capital}
										/>
										<RightColumnWithCountryInfo
											tld={tld}
											currencies={currencies}
											languages={languages}
										/>
									</StyledCountryDataWrapper>
								</StyledCountryInfoWrapper>
								<StyledWrapperWithButtons>
									<StyledCategoryName>Border Countries:</StyledCategoryName>{" "}
									{borderCountriesArr?.length ? (
										borderCountriesArr.map((country, index) => {
											return (
												<StyledButtons
													to={`/${country?.name.common}`}
													key={index}
													type="button"
												>
													{country?.name.common}
												</StyledButtons>
											);
										})
									) : (
										<NoBorderCountries />
									)}
								</StyledWrapperWithButtons>
							</div>
						);
					}
				)}
			</StyledDivWithCountryData>
		</StyledSection>
	);
};
