import React from "react";
import { MemoryRouter } from "react-router-dom";
import Error from "../common/Error";

configure({ adapter: new Adapter() });
describe("<Error />", () => {
  const ERR_MSG = "Error found";
  const ERR_CODE = "404"
  it("matches the snapshot", () => {
    const wrapper = shallow(
      <MemoryRouter>
        <Error errorMessage={ERR_MSG} errorCode={ERR_CODE}/>
      </MemoryRouter>
    );

    console.log(wrapper.debug());
    expect(wrapper.props().children.props.errorMessage).toBe(ERR_MSG);
    expect(wrapper.props().children.props.errorCode).toBe(ERR_CODE);

    wrapper.unmount();
  });
});
