import React from 'react';
import Die from './Die';

export default {
  title: 'Example/Die',
  component: Die,
  argTypes: {},
};

const Template = (args) => <Die {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  dieType: "standard",
  dieState: "unmarked",
  dieFace: 1,
};

export const StandardMarked = Template.bind({});
StandardMarked.args = {
  dieType: "standard",
  dieState: "marked",
  dieFace: 1,
};

export const Grape = Template.bind({});
Grape.args = {
  dieType: "grape",
  dieState: "unmarked",
  dieFace: 1,
};

export const GrapeGained = Template.bind({});
GrapeGained.args = {
  dieType: "grape",
  dieState: "gained",
  dieFace: 1,
};

export const GrapeMarked = Template.bind({});
GrapeMarked.args = {
  dieType: "grape",
  dieState: "marked",
  dieFace: 1,
};
