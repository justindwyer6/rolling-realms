import React from "react";
import Button from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />; // eslint-disable-line react/jsx-props-no-spreading

export const Standard = Template.bind({});
Standard.args = {};
