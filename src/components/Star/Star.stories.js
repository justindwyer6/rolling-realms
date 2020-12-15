import React from "react";
import Star from "./Star";
import unearnedStar from "../../images/star-outline.png";
import earnedStar from "../../images/star.png";

export default {
  title: "Example/Star",
  component: Star,
  argTypes: {},
};

const Template = () => <Star />;

export const Unearned = Template.bind({});
Unearned.args = {
  starSource: unearnedStar,
};

export const Earned = Template.bind({});
Earned.args = {
  starSource: earnedStar,
};
