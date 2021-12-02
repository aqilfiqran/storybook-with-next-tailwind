import { ComponentStory, ComponentMeta } from "@storybook/react";
import Home from "../pages";
export default {
  title: "Pages/Home",
  component: Home,
} as ComponentMeta<typeof Home>;
const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Base = Template.bind({});
