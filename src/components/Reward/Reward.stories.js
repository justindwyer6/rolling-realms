import React from "react";
import Reward from "./Reward";

export default {
  title: "Example/Reward",
  component: Reward,
  argTypes: {},
};

const Template = (args) => <Reward {...args} />; // eslint-disable-line react/jsx-props-no-spreading

export const Available = Template.bind({});
Available.args = {
  round: 1,
  reward: "pumpkin",
  i: 1,
};

export const Gained = Template.bind({});
Gained.args = {
  round: 1,
  reward: "pumpkin",
  i: 1,
};

export const Used = Template.bind({});
Used.args = {
  round: 1,
  reward: "pumpkin",
  i: 1,
};
