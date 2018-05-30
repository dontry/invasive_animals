import React from "react";
import renderer from "react-test-renderer";
import { ActionButton } from "../common/ActionButtonGroup";
import { shallowWithTheme } from "./helpers";

describe("<ActionButton />", () => {
  it("ActionButton default props", () => {
    const wrapper = mount(<ActionButton label="button" />);
    const json = toJson(wrapper);
    expect(wrapper.props().type).toBe("primary");
    expect(wrapper.props().trait).toBe("main");
    expect(json).toMatchSnapshot();
  });
});
