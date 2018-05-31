import React from "react";
import { ActionButton, StyledButton } from "../common/ActionButtonGroup";
import { shallowWithTheme } from "./helpers";

describe("<StyledButton />", () => {
  it("StyledButton default props", () => {
    const wrapper = shallow(<StyledButton>button</StyledButton>);
    const json = toJson(wrapper);
    expect(json).toMatchSnapshot();
  });
  it("StyleButton rules", () => {
    const wrapper = renderer.create(<StyledButton>button</StyledButton>);
    const json = wrapper.toJSON();
    expect(json).toMatchSnapshot();
  })
});

describe("<ActionButton />", () => {
  it("ActionButton default props", () => {
    const wrapper = shallow(<ActionButton label="button" />);
    const json = toJson(wrapper);
    expect(wrapper.props().type).toBe("primary");
    expect(wrapper.props().trait).toBe("main");
    expect(wrapper.props().variant).toBe("flat");
    expect(wrapper.props().children).toBe("button");
    expect(json).toMatchSnapshot();
  });

});

