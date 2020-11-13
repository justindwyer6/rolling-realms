import qs from "query-string";

export const setQueryStringWithoutPageReload = (queryStringValue) => {
  const newurl = window.location.protocol + "//" +
                 window.location.host +
                 window.location.pathname +
                 queryStringValue;
  window.history.replaceState(newurl, "", newurl);
};

export const setQueryStringValue = (key) => {
   const newQueryStringValue = qs.stringify(key);
   setQueryStringWithoutPageReload(`?${newQueryStringValue}`);
};

export const getQueryStringValue = (
  key,
  queryStringValue = window.location.search
) => {
  const values = qs.parse(queryStringValue);
  return values[key];
};
