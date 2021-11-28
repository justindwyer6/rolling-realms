import React from "react";
import IconButton from "./IconButton";
import printIconSrc from "../../images/print.png";
import linkIconSrc from "../../images/link.png";
import randomizeIconSrc from "../../images/randomize.png";

export default {
  title: "Example/IconButton",
  component: IconButton,
  argTypes: {},
};

const Template = (args) => <IconButton {...args} />; // eslint-disable-line react/jsx-props-no-spreading

export const Print = Template.bind({});
Print.args = {
  name: "Print your game",
  imageSrc: printIconSrc,
  onClick: () => window.print(),
};
export const Link = Template.bind({});
Link.args = {
  name: "Copy layout link",
  imageSrc: linkIconSrc,
  onClick: () => console.log("Copying a link works!"),
};
export const Randomize = Template.bind({});
Randomize.args = {
  name: "Randomize minigames",
  imageSrc: randomizeIconSrc,
  onClick: () => console.log("Randomizing minigames works!"),
};
