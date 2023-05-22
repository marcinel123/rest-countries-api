import { InputandFilterPanel } from "../components/InputandFilterPanel/InputandFilterPanel";

export default {
	title: InputandFilterPanel,
	component: InputandFilterPanel,
};

const Template = (args) => <Template {...args} />;

export const Blue = Template.bind({});
Blue.args = {
	backgroundColor: "blue",
};
