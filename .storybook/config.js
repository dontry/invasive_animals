import { configure } from "@storybook/react";
import "babel-polyfill"; //fixed "regeneratorRuntime is not defined" issue
import '../src/index.css'

const req = require.context("../src/stories", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}



configure(loadStories, module);
