import { getInitialRealms, randomizeRealms } from "./selectors";

const initialAppState = {
  areRulesOpen: false,
  rounds: getInitialRealms(),
};

// Actions
const actions = {
  TOGGLE_RULES: "rolling-realms/app/toggle-rules",
  RANDOMIZE_REALMS: "rolling-realms/app/randomize-realms",
};

// Action Creators
export const actionCreators = {
  toggleRules: () => ({ type: actions.TOGGLE_RULES }),
  randomizeRealms: () => ({
    type: actions.RANDOMIZE_REALMS,
  }),
};

// Reducer
const app = (state = initialAppState, action = {}) => {
  switch (action?.type) {
    case actions.TOGGLE_RULES:
      return { ...state, areRulesOpen: !state.areRulesOpen };

    case actions.RANDOMIZE_REALMS:
      return randomizeRealms(state);

    default:
      return state;
  }
};

export default app;
