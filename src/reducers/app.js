import { shuffle } from "lodash";
import getInitialRealms from "utilities/getInitialRealms";

const generateInitialAppState = () => ({
  areRulesOpen: false,
  realms: shuffle(getInitialRealms()),
});

// Actions
export const actions = {
  TOGGLE_RULES: "rolling-realms/app/toggle-rules",
  SET_REALMS: "rolling-realms/app/set-realms",
  RANDOMIZE_REALMS: "rolling-realms/app/randomize-realms",
};

// Reducer
const app = (state = generateInitialAppState(), action = {}) => {
  switch (action?.type) {
    case actions.TOGGLE_RULES:
      return { ...state, areRulesOpen: !state.areRulesOpen };

    case actions.SET_REALMS:
      return { ...state, realms: action.payload };

    case actions.RANDOMIZE_REALMS:
      return { ...state, realms: shuffle(getInitialRealms()) };

    default:
      return state;
  }
};

// Action Creators
export const actionCreators = {
  toggleRules: () => ({ type: actions.TOGGLE_RULES }),
  setRealms: (payload) => ({
    type: actions.SET_REALMS,
    payload,
  }),
  randomizeRealms: () => ({
    type: actions.RANDOMIZE_REALMS,
  }),
};

export default app;
