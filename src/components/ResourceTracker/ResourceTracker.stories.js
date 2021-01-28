import React from "react";
import ResourceTracker from "./ResourceTracker";
import "../../index.css";

export default {
  title: "Example/ResourceTracker",
  component: ResourceTracker,
  argTypes: {},
};

const Template = (args) => <ResourceTracker {...args} />; // eslint-disable-line react/jsx-props-no-spreading

export const Pumpkin = Template.bind({});
Pumpkin.args = {
  resourceType: "pumpkin",
};

export const Heart = Template.bind({});
Heart.args = {
  resourceType: "heart",
};

export const Coin = Template.bind({});
Coin.args = {
  resourceType: "coin",
};
