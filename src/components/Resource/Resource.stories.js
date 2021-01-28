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
  reward: "pumpkin",
  i: 1,
};

export const Heart = Template.bind({});
Heart.args = {
  reward: "heart",
};

export const Coin = Template.bind({});
Coin.args = {
  reward: "coin",
};
