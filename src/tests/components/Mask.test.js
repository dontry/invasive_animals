import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Mask } from "../../components/common/Mask";

configure({ adapter: new Adapter() });
describe("<Mask />", () => {
  it("should render Mask", () => {
    const wrapper = shallow(<Mask />, {
      context: {},
      disableLifeCycleMethods: false
    });
    console.log(wrapper.debug());
    expect(wrapper.find('div').length).toBe(1);
  });
});
