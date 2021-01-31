import React from "react";
import Resource from "./Resource";

export default {
  title: "Example/Resource",
  component: Resource,
  argTypes: {},
};

const Template = (args) => <Resource {...args} />; // eslint-disable-line react/jsx-props-no-spreading

export const Pumpkin = Template.bind({});
Pumpkin.args = {
  name: "pumpkin",
};

export const Heart = Template.bind({});
Heart.args = {
  name: "heart",
};

export const Coin = Template.bind({});
Coin.args = {
  name: "coin",
};

export const Star = Template.bind({});
Star.args = {
  name: "star",
};
