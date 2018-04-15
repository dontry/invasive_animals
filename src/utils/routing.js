export const ROUTE_TABLE = {
  "/": "Home",
  "/contact": "Contact us",
  "/about": "About us",
  "/detect": "Detect",
  "/get_involved": "Get involved",
  "/get_involved/detect": "Detect"
};

export const SITE_MAP = [
  {
    name: "About",
    children: [
      {
        name: "About us",
        path: "/about"
      },
      {
        name: "Careers",
        path: "/careers"
      }
    ]
  },
  {
    name: "Support",
    children: [
      {
        name: "Contact us",
        path: "/contact"
      },
      {
        name: "Help",
        path: "/help"
      }
    ]
  },
  {
    name: "Legal",
    children: [
      { name: "Privacy", path: "/privacy" },
      { name: "Terms", path: "/terms" }
    ]
  }
];

export function findRouteName(url) {
  return ROUTE_TABLE[url];
}
