import { CountriesInfoPanel } from "../components/CountriesInfoPanel/CountriesInfoPanel";

export default {
	title: "CountriesInfo",
	component: CountriesInfoPanel,
};

const Template = (args) => <Template {...args} />;

export const Red = Template.bind({});
Red.args = {
	backgroundColor: "blue",
};
