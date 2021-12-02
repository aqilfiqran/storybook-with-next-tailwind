import { ComponentStory, ComponentMeta } from "@storybook/react";
import Home from "../pages";
export default {
  title: "Example/Home",
  component: Home,
} as ComponentMeta<typeof Home>;
const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const LoggedIn = Template.bind({});
