import { shuffle, cloneDeep } from "lodash";
import getInitialRealms from "utilities/getInitialRealms";
import { generateRealmOrderArray } from "utilities/queryString";

const generateInitialAppState = () => ({
  areRulesOpen: false,
  realms: generateRealmOrderArray(),
});

// Actions
export const actions = {
  TOGGLE_RULES: "rolling-realms/app/toggle-rules",
  SET_REALMS: "rolling-realms/app/set-realms",
  SET_REALM: "rolling-realms/app/set-realm",
  RANDOMIZE_REALMS: "rolling-realms/app/randomize-realms",
};

const setRealmIn = (state, realm, round) => {
  const newState = cloneDeep(state);
  newState.realms[round] = realm;

  return newState;
};

// Reducer
const app = (state = generateInitialAppState(), action = {}) => {
  switch (action?.type) {
    case actions.TOGGLE_RULES:
      return { ...state, areRulesOpen: !state.areRulesOpen };

    case actions.SET_REALMS:
      return { ...state, realms: action.realms };

    case actions.SET_REALM:
      return setRealmIn(state, action.realm, action.round);

    case actions.RANDOMIZE_REALMS:
      return { ...state, realms: shuffle(getInitialRealms()) };

    default:
      return state;
  }
};

// Action Creators
export const actionCreators = {
  toggleRules: () => ({ type: actions.TOGGLE_RULES }),
  setRealms: (realms) => ({
    type: actions.SET_REALMS,
    realms,
  }),
  setRealm: (realm, round) => ({
    type: actions.SET_REALM,
    realm,
    round,
  }),
  randomizeRealms: () => ({
    type: actions.RANDOMIZE_REALMS,
  }),
};

export default app;
