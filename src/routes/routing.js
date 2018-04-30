import React from "react";
import {BinocularsIcon, MagnifierIcon, TargetIcon} from "../components/common/Icons";
import {lightGreen} from "material-ui/colors";

export const ROUTE_TABLE = {
  "/": "Home",
  "/identify": "Identify",
  "/find": "Find",
  "/observe": "Trend observation",
  "/report": "Report",
  "/help_center": "Help Center",
  "/species": "Species",
  "/about": "About us",
  "/contact": "Contact us"
};

export const NAV_BAR = [
  {
    name: "Home",
    path: "/"
  },
  { name: "Identify", path: "/identify" },
  { name: "Find", path: "/find" },
  { name: "Help Center", path: "/help_center" },
  { name: "Report", path: "/report" },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Contact",
    path: "/contact"
  }
];

export const HOMEPAGE_TILES = [
  {
    title: "Detect",
    path: "/detect",
    icon: <TargetIcon color={lightGreen[500]} />
  },
  {
    title: "Find",
    path: "/find",
    icon: <MagnifierIcon color={lightGreen[500]} />
  },
  {
    title: "Trend Observation",
    path: "/observe",
    icon: <BinocularsIcon color={lightGreen[500]} />
  }
];

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
  if(url.includes("/species/")) {
    const reg = /(\w+$)/;
    const speciesName =  url.match(reg)[0].replace("_", " ");

    return speciesName;
  } 
  return ROUTE_TABLE[url];
}
