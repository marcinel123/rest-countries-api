import {
	StyledCategoriesWrapper,
	StyledCategoryName,
	StyledLeftColumnWithCountryInfo,
} from "./LeftColumnWithCountryInfo.styles";

export interface CountryInfoProps {
	nativeName: string;
	population: number;
	region: string;
	subregion: string;
	capital: string[];
}

export const LeftColumnWithCountryInfo = ({
	nativeName,
	population,
	region,
	subregion,
	capital,
}: CountryInfoProps) => {
	return (
		<StyledLeftColumnWithCountryInfo>
			<StyledCategoriesWrapper>
				<StyledCategoryName>Native Name:</StyledCategoryName> {nativeName[2]}
			</StyledCategoriesWrapper>

			<StyledCategoriesWrapper>
				<StyledCategoryName>Population:</StyledCategoryName> {population}
			</StyledCategoriesWrapper>
			<StyledCategoriesWrapper>
				<StyledCategoryName>Region:</StyledCategoryName> {region}
			</StyledCategoriesWrapper>
			<StyledCategoriesWrapper>
				<StyledCategoryName>Sub Region:</StyledCategoryName> {subregion}
			</StyledCategoriesWrapper>
			<StyledCategoriesWrapper>
				<StyledCategoryName>Capital:</StyledCategoryName> {capital}
			</StyledCategoriesWrapper>
		</StyledLeftColumnWithCountryInfo>
	);
};
