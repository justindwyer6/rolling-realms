import actions from "./actions";

export default {
  toggleRules: () => ({ type: actions.TOGGLE_RULES }),
  randomizeRealms: () => ({
    type: actions.RANDOMIZE_REALMS,
  }),
};
