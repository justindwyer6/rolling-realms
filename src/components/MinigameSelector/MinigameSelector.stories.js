import React from "react";
import MinigameSelector from "./MinigameSelector";

export default {
  title: "Example/MinigameSelector",
  component: MinigameSelector,
  argTypes: {},
};

const Template = (args) => <MinigameSelector {...args} />; // eslint-disable-line react/jsx-props-no-spreading

export const Scythe = Template.bind({});
Scythe.args = {
  minigameName: "Scythe",
};
