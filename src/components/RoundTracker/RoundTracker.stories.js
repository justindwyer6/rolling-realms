import React from "react";
import RoundTracker from "./RoundTracker";
import "../../index.css";

export default {
  title: "Example/RoundTracker",
  component: RoundTracker,
  argTypes: {},
};

const Template = (args) => <RoundTracker {...args} />; // eslint-disable-line react/jsx-props-no-spreading

export const Round1 = Template.bind({});
Round1.args = {
  round: 1,
};

export const Round2 = Template.bind({});
Round2.args = {
  round: 2,
};

export const Round3 = Template.bind({});
Round3.args = {
  round: 3,
};
