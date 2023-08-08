import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useCountriesContext } from "../../Context/CountriesDataContext";
import {
	StyledCountryDataWrapper,
	StyledCountryInfoWrapper,
	StyledCountryName,
	StyledDivWithCountryData,
	StyledSection,
} from "./CountryDetails.styles";
import { CountryDataTypes } from "./CountryDetailsProps";
import { LeftColumnWithCountryInfo } from "./LeftColumnWithCountryInfo/LeftColumnWithCountryInfo";
import { RightColumnWithCountryInfo } from "./RightColumnWithCountryInfo/RightColumnWithCountryInfo";
import { BorderCountriesButtons } from "./BorderCountriesButtons/BorderCountriesButtons";
import { FlagComponent } from "./Flag/FlagComponent";

export const CountryDetails = () => {
	const { inputValue, setInputValue, countries, fetchCountries } =
		useCountriesContext();
	const countryData = useLoaderData() as CountryDataTypes[];

	useEffect(() => {
		if (!countries?.length) {
			fetchCountries();
		}
	}, []);

	return (
		<StyledSection>
			<FlagComponent
				countryData={countryData}
				inputValue={inputValue}
				setInputValue={setInputValue}
			/>

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

								<BorderCountriesButtons
									countries={countries}
									borders={borders}
								/>
							</div>
						);
					}
				)}
			</StyledDivWithCountryData>
		</StyledSection>
	);
};
