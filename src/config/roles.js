const roles = ["user", "admin"];

const roleRights = new Map();
roleRights.set(roles[0], [
  "getUsers",
  "getProducts",
  "ViewProducts",
  "AddCart",
  "ViewCart",
  "viewCategory",
]);
roleRights.set(roles[1], [
  "getUsers",
  "manageUsers",
  "getProducts",
  "ViewProducts",
  "AddCart",
  "ViewCart",
  "createCategory",
  "createProduct",
  "viewCategory",
]);

module.exports = {
  roles,
  roleRights,
};
