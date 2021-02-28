import React from "react";
import ResourceGrid from "./ResourceGrid";

export default {
  title: "Example/ResourceGrid",
  component: ResourceGrid,
  argTypes: {},
};

const Template = (args) => <ResourceGrid {...args} />; // eslint-disable-line react/jsx-props-no-spreading

export const Pumpkin = Template.bind({});
Pumpkin.args = {
  resource: "pumpkin",
};
