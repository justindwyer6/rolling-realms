import realms, { getRealmById, validRealmOrderString } from "realms";

export const setQueryString = (qsValue) => {
  const { origin, pathname } = window.location;
  const newurl = `${origin}${pathname}?${qsValue}`;
  window.history.replaceState(newurl, "", newurl);
};

const parseRealmOrder = () => {
  const qs = window.location.search.substring(1);
  const qsArray = qs.split("&");
  const realmOrder = qsArray.filter((q) =>
    q.includes("realmOrder="),
  )[0];

  if (!realmOrder) {
    return "";
  }

  return realmOrder.split("=")[1];
};

export const generateRealmOrderArray = (
  realmOrder = parseRealmOrder(),
) => {
  if (!realmOrder.match(validRealmOrderString)) {
    return realms;
  }

  return realmOrder.split("").map((id) => getRealmById(+id));
};
