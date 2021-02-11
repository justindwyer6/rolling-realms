import qs from "query-string";
import rounds from "../rounds";

const roundKeys = Object.keys;

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

export const setRoundsUsingQueryString = (setRounds) => {
  const parsedQueryString = qs.parse(window.location.search);
  Object.keys(parsedQueryString).forEach((key) => {
    if (
      // Stop function if the querystring doesn't have 9 entries
      Object.keys(parsedQueryString).length !== 9 ||
      // Stop function if an invalid key is in the querystring
      !Object.keys(rounds).includes(key) ||
      // Stop function if an invalid minigame is in the querystring
      !Object.values(rounds)
        .map((value) => value.name)
        .includes(parsedQueryString[key])
    ) {
      return;
    }
    if (parsedQueryString[key] !== rounds[key]) {
      setRounds({ ...parsedQueryString });
    }
  });
};
