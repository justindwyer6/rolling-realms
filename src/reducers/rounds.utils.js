import { cloneDeep } from "lodash";

const RESOURCE_MIN = 0;
const RESOURCE_MAX = 12;
const VALID_RESOURCE_TYPES = ["coin", "heart", "pumpkin"];
const isValidResourceChange = (round, resourceType) =>
  round >= 1 ||
  round <= 3 ||
  VALID_RESOURCE_TYPES.includes(resourceType);

const defaultResourceStats = {
  earned: RESOURCE_MIN,
  spent: RESOURCE_MIN,
};

const defaultStarState = [false, false, false, false, false, false];

const defaultResourceSet = {
  pumpkin: cloneDeep(defaultResourceStats),
  heart: cloneDeep(defaultResourceStats),
  coin: cloneDeep(defaultResourceStats),
};

const defaultRoundState = {
  stars: defaultStarState,
  resources: defaultResourceSet,
};

const generateInitialRoundsState = () => [
  cloneDeep(defaultRoundState),
  cloneDeep(defaultRoundState),
  cloneDeep(defaultRoundState),
];

const getResourceDataFromState = (state, round, resourceType) =>
  state[round - 1].resources[resourceType];

const getStarCountFromState = (state, round) =>
  state[round - 1].stars.reduce(
    (starCount, star) => starCount + star,
    0,
  );

export {
  RESOURCE_MIN,
  RESOURCE_MAX,
  isValidResourceChange,
  generateInitialRoundsState,
  getResourceDataFromState,
  getStarCountFromState,
};
