/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Wingspan from "./Wingspan";

export default {
  title: "Minigame/Wingspan",
  component: Wingspan,
  argTypes: {},
};

const Template = (args) => (
  <div className="Minigame Wingspan">
    <Wingspan {...args} />
  </div>
);

export const WingspanRealm = Template.bind({});
WingspanRealm.args = {};
