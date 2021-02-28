import React from "react";
import Die from "./Die";

export default {
  title: "Example/Die",
  component: Die,
  argTypes: {},
};

const Template = (args) => <Die {...args} />; // eslint-disable-line react/jsx-props-no-spreading

export const Standard = Template.bind({});
Standard.args = {
  dieType: "standard",
  dieFace: 1,
};

export const Grape = Template.bind({});
Grape.args = {
  dieType: "grape",
  dieFace: 1,
};
