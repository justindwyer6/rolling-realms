const realms = [
  { id: 1, name: "Between Two Castles", slug: "BetweenTwoCastles" },
  { id: 2, name: "Between Two Cities", slug: "BetweenTwoCities" },
  { id: 3, name: "Charterstone", slug: "Charterstone" },
  { id: 4, name: "Euphoria", slug: "Euphoria" },
  { id: 5, name: "My Little Scythe", slug: "MyLittleScythe" },
  { id: 6, name: "Scythe", slug: "Scythe" },
  { id: 7, name: "Tapestry", slug: "Tapestry" },
  { id: 8, name: "Viticulture", slug: "Viticulture" },
  { id: 9, name: "Wingspan", slug: "Wingspan" },
];

export const validRealmOrderString = new RegExp(/[1-9]{9}/gm);
export const getOrderStringFromRealms = (realmArray) =>
  realmArray.map((r) => r.id).join("");
export const getRealmByProp = (prop) => (val) =>
  realms.filter((r) => r[prop] === val)[0] || {};

export const getRealmById = (id) => getRealmByProp("id")(id);
// export const getRealmByName = (name) =>
//   getRealmByProp("name")(name) || {};
// export const getRealmBySlug = (slug) =>
//   getRealmByProp("slug")(slug) || {};

export default realms;
