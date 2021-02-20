import React from "react";
import Button from "./Button";
import printSrc from "../../images/print.png";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />; // eslint-disable-line react/jsx-props-no-spreading

export const Print = Template.bind({});
Print.args = {
  name: "print",
  imageSrc: printSrc,
  onClickFunction: () => console.log("hi!"),
};
