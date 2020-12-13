import React from "react";
import Star from "./Star";

export default {
  title: "Example/Star",
  component: Star,
  argTypes: {},
};

const Template = (args) => <Star />;

export const Unmarked = Template.bind({});
Unmarked.args = {
  starSource: "/images/star-outline.png",
};

export const Marked = Template.bind({});
Marked.args = {
  starSource: "/images/star.png",
};
