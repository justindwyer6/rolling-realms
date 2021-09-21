import { shuffle, take } from "lodash";
import defaultRounds from "../rounds";

const NUM_OF_REALMS = 9;

export const getInitialRealms = (numOfRealms = NUM_OF_REALMS) =>
  take(defaultRounds, numOfRealms);

export const randomizeRealms = (state) => {
  return { ...state, rounds: shuffle(getInitialRealms()) };
};
