import { Header, HeaderProps } from "../components/Header/Header";

export default {
	title: "Header",
	component: Header,
};

export const Default = (args: HeaderProps) => <Header {...args} />;
