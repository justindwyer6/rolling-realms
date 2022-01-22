import { cloneDeep } from "lodash";
import {
  RESOURCE_MIN,
  RESOURCE_MAX,
  isValidResourceChange,
  generateInitialRoundsState,
  getResourceDataFromState,
} from "./rounds.utils";

// Actions
export const actions = {
  EARN_RESOURCE: "rolling-realms/app/earn-resource",
  SPEND_RESOURCE: "rolling-realms/app/spend-resource",
  RESET_RESOURCE: "rolling-realms/app/reset-resource",
};

const incrementResource = (state, round, resourceType) => {
  if (!isValidResourceChange(round, resourceType)) {
    return state;
  }

  const copyOfState = cloneDeep(state);
  const resourceData = getResourceDataFromState(
    copyOfState,
    round,
    resourceType,
  );
  if (resourceData.earned === RESOURCE_MAX) {
    return state;
  }

  resourceData.earned += 1;
  return copyOfState;
};

const decrementResource = (state, round, resourceType) => {
  if (!isValidResourceChange(round, resourceType)) {
    return state;
  }

  const copyOfState = cloneDeep(state);
  const resourceData = getResourceDataFromState(
    copyOfState,
    round,
    resourceType,
  );
  if (
    resourceData.earned === RESOURCE_MIN ||
    resourceData.earned === resourceData.spent
  ) {
    return state;
  }

  resourceData.spent += 1;
  return copyOfState;
};

const resetResource = (state, round, resourceType) => {
  if (!isValidResourceChange(round, resourceType)) {
    return state;
  }

  const copyOfState = cloneDeep(state);
  const resourceData = getResourceDataFromState(
    copyOfState,
    round,
    resourceType,
  );

  resourceData.earned = 0;
  resourceData.spent = 0;

  return copyOfState;
};

// Reducer
const rounds = (
  state = generateInitialRoundsState(),
  action = {},
) => {
  switch (action?.type) {
    case actions.EARN_RESOURCE:
      return incrementResource(
        state,
        action.round,
        action.resourceType,
      );
    case actions.SPEND_RESOURCE:
      return decrementResource(
        state,
        action.round,
        action.resourceType,
      );
    case actions.RESET_RESOURCE:
      return resetResource(state, action.round, action.resourceType);
    default:
      return state;
  }
};

// Action Creators
export const actionCreators = {
  earnResource: (round, resourceType) => ({
    type: actions.EARN_RESOURCE,
    round,
    resourceType,
  }),
  spendResource: (round, resourceType) => ({
    type: actions.SPEND_RESOURCE,
    round,
    resourceType,
  }),
  resetResource: (round, resourceType) => ({
    type: actions.RESET_RESOURCE,
    round,
    resourceType,
  }),
};

export default rounds;
