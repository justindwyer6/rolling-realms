import React from "react";
import RewardTracker from "./RewardTracker";
import "../../index.css";

export default {
  title: "Example/RewardTracker",
  component: RewardTracker,
  argTypes: {},
};

const Template = (args) => <RewardTracker {...args} />; // eslint-disable-line react/jsx-props-no-spreading

export const Pumpkin = Template.bind({});
Pumpkin.args = {
  rewardType: "pumpkin",
};

export const Heart = Template.bind({});
Heart.args = {
  rewardType: "heart",
};

export const Coin = Template.bind({});
Coin.args = {
  rewardType: "coin",
};
