import React from "react";
import MinigameSelector from "./MinigameSelector";
import rounds from "../../rounds";

export default {
  title: "Example/MinigameSelector",
  component: MinigameSelector,
  argTypes: {},
};

const updateMinigame = (minigame, round) => {
  const updatingRoundOrder = { ...rounds };
  updatingRoundOrder[round] = minigame;
  setRounds({ ...updatingRoundOrder });
};

const Template = (args) => <MinigameSelector {...args} />; // eslint-disable-line react/jsx-props-no-spreading

export const Default = Template.bind({});
Default.args = {
  minigameName: "Scythe",
  updateMinigame: () => updateMinigame(),
};
