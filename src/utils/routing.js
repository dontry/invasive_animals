const ROUTE_TABLE = {
  "/": "HOME",
  "/contact": "CONTACT US",
  "/about": "ABOUT US"
};
export function findRouteName(url) {
  return ROUTE_TABLE[url];
}
