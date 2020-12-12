import React from 'react';

import Die from '../components/Die';

export default {
  title: 'Example/Die',
  component: Die,
  argTypes: {},
};

const Template = (args) => <Die {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  dieClasses: "",
  dieFace: 1,
};
