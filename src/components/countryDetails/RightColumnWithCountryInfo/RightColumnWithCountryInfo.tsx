import {
	StyledCategoriesWrapper,
	StyledCategoryName,
} from "./RightColumnWithCountryInfo.styles";

export interface CountryInfoProps {
	tld: string[];
	currencies: {
		[keys: string]: {
			name: string;
		};
	};
	languages: {
		[keys: string]: string;
	};
}

export const RightColumnWithCountryInfo = ({
	tld,
	currencies,
	languages,
}: CountryInfoProps) => {
	const currencyKey = Object.keys(currencies)[0];

	const currencyName = currencies[currencyKey].name;
	const languagesKeys = Object.keys(languages);
	return (
		<div>
			<StyledCategoriesWrapper>
				<StyledCategoryName>Top Level Domain:</StyledCategoryName> {tld[0]}
			</StyledCategoriesWrapper>
			<StyledCategoriesWrapper>
				<StyledCategoryName>Currencies:</StyledCategoryName> {currencyName}
			</StyledCategoriesWrapper>
			<StyledCategoriesWrapper>
				<StyledCategoryName>Languages:</StyledCategoryName>{" "}
				{languagesKeys.map((lang, index) => {
					if (index === languagesKeys.length - 1) {
						return <span key={lang}>{languages[lang]} </span>;
					}
					return <span key={lang}>{languages[lang]}, </span>;
				})}
			</StyledCategoriesWrapper>
		</div>
	);
};
