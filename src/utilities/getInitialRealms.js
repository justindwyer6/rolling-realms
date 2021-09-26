import { take } from "lodash";
import defaultRounds from "../rounds";

const NUM_OF_REALMS = 9;

export default (numOfRealms = NUM_OF_REALMS) =>
  take(defaultRounds, numOfRealms);
