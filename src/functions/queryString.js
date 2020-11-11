import qs from "query-string";

export const setQueryStringWithoutPageReload = (queryStringValue) => {
  const newurl = window.location.protocol + "//" +
                 window.location.host +
                 window.location.pathname +
                 queryStringValue;

  window.history.pushState({ path: newurl }, "", newurl);
};

export const setQueryStringValue = (
  key,
  value,
  initialQueryStringValue = window.location.search
) => {
   const values = qs.parse(initialQueryStringValue);
   const newQueryStringValue = qs.stringify({ ...values, [key]: value });
   setQueryStringWithoutPageReload(`?${newQueryStringValue}`);
};

export const getQueryStringValue = (
  key,
  queryStringValue = window.location.search
) => {
  const values = qs.parse(queryStringValue);
  return values[key];
};
