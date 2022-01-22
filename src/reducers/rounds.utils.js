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

const defaultResourceSet = {
  resources: {
    pumpkin: cloneDeep(defaultResourceStats),
    heart: cloneDeep(defaultResourceStats),
    coin: cloneDeep(defaultResourceStats),
  },
};

const generateInitialRoundsState = () => [
  cloneDeep(defaultResourceSet),
  cloneDeep(defaultResourceSet),
  cloneDeep(defaultResourceSet),
];

const getResourceDataFromState = (state, round, resourceType) =>
  state[round - 1].resources[resourceType];

export {
  RESOURCE_MIN,
  RESOURCE_MAX,
  isValidResourceChange,
  generateInitialRoundsState,
  getResourceDataFromState,
};
