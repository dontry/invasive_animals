const ROUTE_TABLE = {
  "/": "Home",
  "/contact": "Contact us",
  "/about": "About us",
  "/detect": "Detect",
  "/get_involved": "Get involved",
  "/get_involved/detect": "Detect",
};
export function findRouteName(url) {
  return ROUTE_TABLE[url];
}
