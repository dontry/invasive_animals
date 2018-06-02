import { configure } from "@storybook/react";
import "babel-polyfill"; //fixed "regeneratorRuntime is not defined" issue
import {addDecorator} from '@storybook/react'

const req = require.context("../src/stories", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}



configure(loadStories, module);
