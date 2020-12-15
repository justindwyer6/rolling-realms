import React from "react";
import Die from "./Die";

export default {
  title: "Example/Die",
  component: Die,
  argTypes: {},
};

const Template = (args) => <Die {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  dieType: "standard",
  initialDieState: "unmarked",
  dieFace: 1,
};

export const StandardMarked = Template.bind({});
StandardMarked.args = {
  dieType: "standard",
  initialDieState: "marked",
  dieFace: 1,
};

export const Grape = Template.bind({});
Grape.args = {
  dieType: "grape",
  initialDieState: "unmarked",
  dieFace: 1,
};

export const GrapeGained = Template.bind({});
GrapeGained.args = {
  dieType: "grape",
  initialDieState: "gained",
  dieFace: 1,
};

export const GrapeMarked = Template.bind({});
GrapeMarked.args = {
  dieType: "grape",
  initialDieState: "marked",
  dieFace: 1,
};
