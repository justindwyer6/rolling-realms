import React from "react";
import ResourceDie from "./ResourceDie";

export default {
  title: "Example/ResourceDie",
  component: ResourceDie,
  argTypes: {},
};

const Template = (args) => <ResourceDie {...args} />; // eslint-disable-line react/jsx-props-no-spreading

export const Standard = Template.bind({});
Standard.args = {
  dieType: "standard",
  dieFace: 1,
  resourceName: "pumpkin",
};

export const Grape = Template.bind({});
Grape.args = {
  dieType: "grape",
  dieFace: 1,
  resourceName: "pumpkin",
};
