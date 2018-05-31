import React from "react";
import { ContactForm, StyledForm } from "../Contact/ContactForm";
import { shallowWithTheme } from "./helpers";
import { ExpansionPanelActions } from "material-ui";

describe("<ContactForm />", () => {
  let submitting, touched, error, reset, sendEmail, handleSubmit;
  const email = {
    username: "Trump",
    from: "dtrump2018@gmail.com",
    message: "MAGA",
    to: "vic.invasive@gmail.com"
  };
  beforeEach(() => {
    submitting = false;
    touched = false;
    error = null;
    reset = jest.fn();
    sendEmail = jest.fn();
    handleSubmit = fn => fn;
  });
  const buildForm = () => {
    const props = {
      submitting,
      fields: {
        username: {
          value: email.username,
          touched,
          error
        },
        from: {
          value: email.from,
          touched,
          error
        },
        message: {
          value: email.message,
          touched,
          error
        }
      },
      handleSubmit,
      reset,
      email: {
        entity: null,
        loading: false,
        error: null
      },
      sendEmail
    };
    return shallow(<ContactForm {...props} />);
  };

  // if use arrow function, then we have to use spyOn(instance(), fn)
  // to monitor function
  it("calls sendemail after submit; calls reset after unmount", () => {
    const wrapper = buildForm();
    wrapper.find(StyledForm).simulate("submit");

    expect(sendEmail.mock.calls.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
    expect(reset.mock.calls.length).toBe(1);
  });

  it("calls handleSubmit", () => {
    const wrapper = buildForm();
    wrapper.instance().handleSubmit(email);

    expect(sendEmail).toHaveBeenCalledWith(email);
    wrapper.unmount();
  });
});
