import { take } from "lodash";
import defaultRealms from "../realms";

const NUM_OF_REALMS = 9;

export default (numOfRealms = NUM_OF_REALMS) =>
  take(defaultRealms, numOfRealms);
