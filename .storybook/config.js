import { configure } from "@storybook/react";
import "babel-polyfill"; //fixed "regeneratorRuntime is not defined" issue

function loadStories() {
  require("../src/stories");
}

configure(loadStories, module);
