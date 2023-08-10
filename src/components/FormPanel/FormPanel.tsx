import { StyledForm, StyledInputandSelectSection } from "./FormPanel.styles";
import { CustomSelect } from "../shared/select/CustomSelect";
import { Input } from "../shared/input/Input";

const continentsArray = [
	{ id: 1, name: "Africa" },
	{ id: 2, name: "Americas" },
	{ id: 3, name: "Asia" },
	{ id: 4, name: "Europe" },
	{ id: 5, name: "Oceania" },
];

export const FormPanel = () => (
	<StyledInputandSelectSection>
		<StyledForm>
			<Input inputId="countrySearch" placeholder="Search for country..." />
		</StyledForm>
		<CustomSelect data={continentsArray} />
	</StyledInputandSelectSection>
);
