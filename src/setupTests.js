import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import "jest-styled-components";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.mount = mount;
global.toJson = toJson;
global.renderer = renderer;

window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
