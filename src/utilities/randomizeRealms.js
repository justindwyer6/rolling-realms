import { shuffle } from "lodash";
import getInitialRealms from "./getInitialRealms";

export default (state) => {
  return { ...state, rounds: shuffle(getInitialRealms()) };
};
