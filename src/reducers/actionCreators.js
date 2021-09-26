import actions from "./actions";

export default {
  toggleRules: () => ({ type: actions.TOGGLE_RULES }),
  setRealms: (payload) => ({
    type: actions.SET_REALMS,
    payload,
  }),
  randomizeRealms: () => ({
    type: actions.RANDOMIZE_REALMS,
  }),
};
