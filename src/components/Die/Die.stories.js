import React from "react";
import Die from "./Die";

export default {
  title: "Example/Die",
  component: Die,
  argTypes: {},
};

const Template = (args) => <Die {...args} />; // eslint-disable-line react/jsx-props-no-spreading

export const StandardAvailable = Template.bind({});
StandardAvailable.args = {
  dieType: "standard",
  initialDieState: "available",
  dieFace: 1,
};

export const StandardMarked = Template.bind({});
StandardMarked.args = {
  dieType: "standard",
  initialDieState: "marked",
  dieFace: 1,
};

export const GrapeAvailable = Template.bind({});
GrapeAvailable.args = {
  dieType: "grape",
  initialDieState: "available",
  dieFace: 1,
};

export const GrapeGained = Template.bind({});
GrapeGained.args = {
  dieType: "grape",
  initialDieState: "gained",
  dieFace: 1,
};

export const GrapeUsed = Template.bind({});
GrapeUsed.args = {
  dieType: "grape",
  initialDieState: "used",
  dieFace: 1,
};
