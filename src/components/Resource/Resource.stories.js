import React from "react";
import Reward from "./Reward";

export default {
  title: "Example/Reward",
  component: Reward,
  argTypes: {},
};

const Template = (args) => <Reward {...args} />; // eslint-disable-line react/jsx-props-no-spreading

export const Pumpkin = Template.bind({});
Pumpkin.args = {
  round: 1,
  reward: "pumpkin",
  i: 1,
};

export const Heart = Template.bind({});
Heart.args = {
  round: 1,
  reward: "heart",
  i: 1,
};

export const Coin = Template.bind({});
Coin.args = {
  round: 1,
  reward: "coin",
  i: 1,
};
