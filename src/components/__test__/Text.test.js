import React from "react";
import { Title, Paragraph} from "../../components/common/Text";

describe("<Paragraph />", () => {
  it("Paragraph accepts text_color  props", () => {
    const wrapper = mount(<Title text_color="#010" />);
    const json = toJson(wrapper);
    expect(json).toMatchSnapshot();
  });
});


