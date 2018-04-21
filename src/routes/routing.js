import React from "react";
import {
  TargetIcon,
  BinocularsIcon,
  MagnifierIcon
} from "../components/common/Icons";
import { lightGreen } from "material-ui/colors";

export const ROUTE_TABLE = {
  "/": "Home",
  "/detect": "Detect",
  "/find": "Find",
  "/observe": "Trend observation",
  "/contact": "Contact us",
  "/about": "About us",
  "/species": "Species"
};

export const NAV_BAR = [
  {
    name: "Home",
    path: "/"
  },
  { name: "Detect", path: "/detect" },
  { name: "Find", path: "/find" },
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
  return ROUTE_TABLE[url];
}
