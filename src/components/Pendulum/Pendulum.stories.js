/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Pendulum from "./Pendulum";

export default {
  title: "Minigame/Pendulum",
  component: Pendulum,
  argTypes: {},
};

const Template = (args) => (
  <div className="Minigame Pendulum">
    <Pendulum {...args} />
  </div>
);

export const PendulumRealm = Template.bind({});
PendulumRealm.args = {};
