const initialAppState = { areRulesOpen: false };
const actions = { TOGGLE_RULES: "rolling-realms/app/toggle-rules" };
export const toggleRules = () => ({ type: actions.TOGGLE_RULES });

const app = (state = initialAppState, action = {}) => {
  switch (action.type) {
    case actions.TOGGLE_RULES:
      return { ...state, areRulesOpen: !state.areRulesOpen };
    default:
      return state;
  }
};

export default app;
