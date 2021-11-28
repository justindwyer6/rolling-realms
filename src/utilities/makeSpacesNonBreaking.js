const makeSpacesNonBreaking = (str) => {
  return str.replace(" ", "\u00A0");
};

export default makeSpacesNonBreaking;
