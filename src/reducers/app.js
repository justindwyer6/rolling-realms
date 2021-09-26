import shuffle from "lodash";
import getInitialRealms from "../utilities/getInitialRealms";
import actions from "./actions";

const initialAppState = {
  areRulesOpen: false,
  realms: getInitialRealms(),
};

const app = (state = initialAppState, action = {}) => {
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

export default app;
