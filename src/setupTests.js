import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import "jest-styled-components";

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.mount = mount;
global.toJson = toJson;

window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
