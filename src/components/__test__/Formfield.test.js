import React from "react";
import { TextField, DateField, Select } from "../common/FormFields";

describe("<TextField />", () => {
  it("should render props with inputs and an error", () => {
    const input = { name: "username", value: "" };
    const meta = { touched: true, error: "Required" };
    const label = "Username";
    const props = {
      input,
      label,
      meta
    };
    const wrapper = shallow(<TextField {...props} />);
    console.log(wrapper.debug());
    const textField =  wrapper.find("Styled(TextField)");
    expect(textField.props().helperText).toBe(meta.error);
    expect(textField.props().label).toBe(label);
    expect(textField.props().value).toBe(input.value);
    expect(textField.props().name).toBe(input.name);
  });
});
