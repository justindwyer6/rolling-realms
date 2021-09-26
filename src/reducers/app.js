import getInitialRealms from "../utilities/getInitialRealms";
import randomizeRealms from "../utilities/randomizeRealms";
import actions from "./actions";

const initialAppState = {
  areRulesOpen: false,
  rounds: getInitialRealms(),
};

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
