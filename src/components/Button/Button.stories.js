import React from "react";
import Button from "./Button";
import printIconSrc from "../../images/print.png";
import linkIconSrc from "../../images/link.png";
import randomizeIconSrc from "../../images/randomize.png";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />; // eslint-disable-line react/jsx-props-no-spreading

export const Print = Template.bind({});
Print.args = {
  name: "Print your game",
  imageSrc: printIconSrc,
  onClickFunction: () => window.print(),
};
export const Link = Template.bind({});
Link.args = {
  name: "Copy layout link",
  imageSrc: linkIconSrc,
  onClickFunction: () => console.log("Copying a link works!"),
};
export const Randomize = Template.bind({});
Randomize.args = {
  name: "Randomize minigames",
  imageSrc: randomizeIconSrc,
  onClickFunction: () => console.log("Randomizing minigames works!"),
};
