import qs from "query-string";

export const setQueryStringWithoutPageReload = (queryStringValue) => {
  const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}${queryStringValue}`;
  window.history.replaceState(newurl, "", newurl);
};

export const setQueryStringValue = (key) => {
  const newQueryStringValue = qs.stringify(key);
  setQueryStringWithoutPageReload(`?${newQueryStringValue}`);
};

export const getQueryStringValue = (
  key,
  queryStringValue = window.location.search,
) => {
  const values = qs.parse(queryStringValue);
  return values[key];
};

// NEW FUNCTION
export const setRoundsUsingQueryString = (setRounds) => {
  const parsedQueryString = qs.parse(window.location.search);

  // Short circuit if the querystring doesn't have 9 entries
  if (Object.keys(parsedQueryString).length !== 9) {
    return;
  }

  const newRounds = Object.keys(parsedQueryString).map((key) => {
    const minigameName = parsedQueryString[key];
    const thisRound = {};

    // This error logic will need some reworking
    // if (
    //   // Stop function if this key is invalid
    //   !Object.keys(defaultRounds).includes(key) ||
    //   // Stop function if this minigame is invalid
    //   !Object.values(defaultRounds).includes(minigameName)
    // ) {
    //   return;
    // }

    thisRound.id = key;
    thisRound.minigame = {};
    thisRound.minigame.name = minigameName;
    thisRound.minigame.state = "getMinigameState(minigameName)";
    // {
    //   id: key,
    //   minigame: {
    //     name: minigameName,
    //     state: "getMinigameState(minigameName)",
    //   },
    // }
    console.log(thisRound);
    return thisRound;
  });

  setRounds(newRounds);
};
