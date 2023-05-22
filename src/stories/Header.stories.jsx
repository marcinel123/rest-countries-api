import { Header } from "../components/Header/Header";

export default {
	title: "Header",
	component: Header,
};

const Template = (args) => <Template {...args} />;

export const Red = Template.bind({});
Red.args = {
	backgroundColor: "red",
};
