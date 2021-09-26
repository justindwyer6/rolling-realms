import { shuffle } from "lodash";
import getInitialRealms from "./getInitialRealms";

export default (state) => {
  return { ...state, realms: shuffle(getInitialRealms()) };
};
