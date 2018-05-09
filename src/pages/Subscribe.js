import React, { Fragment, Component } from "react";
import styled from "styled-components";

import { Grid } from "material-ui";
import { green } from "material-ui/colors";
import Button from "material-ui/Button";
import PageContainer from "../components/common/PageContainer";
import { TextField, Select } from "../components/common/FormFields";
import { Title, Paragraph } from "../components/common/Text";
import NavAppBar from "../components/common/NavAppBar";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";
import { StyledButton } from "../components/common/ActionButtonGroup";

const DescriptionWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 1.5rem;
`;

const FormWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FormBody = styled(Grid)`
  && {
    padding: 2rem;
    text-align: center;
  }
`;

const Regions = [
  {
    value: "Loddon-Mallee"
  },
  {
    value: "Hume"
  },
  {
    value: "Port Phillip"
  },
  {
    value: "Gippsland"
  },
  {
    value: "Barwon South West"
  }
];
const meta = { touched: false, error: false };
class Subscription extends Component {
  state = {
    email: "",
    fName: "",
    lName: "",
    MMEGRE5: ""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <Fragment>
        <NavAppBar />
        <BreadcrumbsWithRouter />
        <PageContainer style={{ padding: "1rem 2rem" }}>
          <Title variant="display1">Subscribe to our mailing list</Title>
          <DescriptionWrapper>
            <Paragraph variant="body" align="left">
              Do not miss out on the up-to-date trends and alert of presence of
              invasive animals in your farming areas. Fill out the form below,
              let us know which region you are interested in, and we will send
              you monthly updates! Subscribe now to our mailing list to receive
              our newletters in your inbox!
            </Paragraph>
          </DescriptionWrapper>
          <FormWrapper id="mc_embed_signup">
            {/*  <Title variant="subheading">* indicates required</Title> */}
            <form
              action="https://facebook.us18.list-manage.com/subscribe/post?u=24f1d7a8269684bd046565d7c&amp;id=6f819e9c64"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              novalidate
            >
              <FormBody
                id="mc_embed_signup_scroll"
                container
                direction="column"
                alignItems="center"
              >
                <TextField
                  required
                  id="mce-EMAIL"
                  label="Email Address"
                  meta={meta}
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                />
                <TextField
                  required
                  id="mce-FNAME"
                  label="First Name"
                  meta={meta}
                  name="fName"
                  onChange={this.handleChange}
                />
                <TextField
                  required
                  id="mce-LNAME"
                  label="Last Name"
                  meta={meta}
                  name="lName"
                  onChange={this.handleChange}
                />
                <Select
                  id="mce-MMEGRE5"
                  label="Location"
                  name="MMERGE5"
                  onChange={this.handleChange}
                  meta={meta}
                  options={Regions}
                />
                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  />
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  />
                </div>
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_24f1d7a8269684bd046565d7c_6f819e9c64"
                    tabindex="-1"
                    value=""
                  />
                </div>
                <div className="clear">
                  <Button
                    variant="raised"
                    style={{ background: green[500], color: "#fff" }}
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                  >
                    Submit
                  </Button>
                </div>
              </FormBody>
            </form>
          </FormWrapper>
        </PageContainer>
      </Fragment>
    );
  }
}
export default Subscription;
