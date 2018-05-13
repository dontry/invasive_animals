import React from "react";
import styled from "styled-components";

import { grey } from "material-ui/colors";
import Icon from "material-ui/Icon";

import { Paragraph, Title } from "../common/Text";

const Wrapper = styled.section`
  padding: 1rem 0;
`;

const Instruction = () => (
  <Wrapper>
    <Paragraph variant="subheading" text_color={grey[600]} line_height="1.5em">
      Early intervention is critical in a pest or invasive animal. If you
      suspect an invasive animal or have seen something unusual and you’re not
      sure whether it is invasive or not – report it. Small signs may be an
      early indication that something’s wrong.
      <br />
      Reporting is easy - just phone the hotline, wherever you are in Australia.
      This will put you in touch with your department of agriculture or primary
      industries.
    </Paragraph>
    <br />
    <ul>
      <li>
        <Title variant="title" text_color={grey[700]} align="left">
          <Icon style={{ verticalAlign: "baseline" }}>phone</Icon> Call for help
        </Title>
        <Paragraph variant="subheading" text_color={grey[600]} line_height="1.5em">
          For animals: To report pests and diseases in animals (including
          livestock, wildlife, birds and aquatic animals), phone the ​Emergency
          Animal Disease Watch Hotline on{" "}
          <a href="tel:1800 675 888">1800 675 888</a> or Agriculture Victoria
          Customer Service Centre on <a href="tel:136 186">136 186</a>.
          <br />
          Report plants: To report plant or honey bee pests and diseases
          (including new weeds) phone the ​Exotic Plant Pest Hotline on{" "}
          <a href="tel:1800 084 881">1800 084 881</a>.
        </Paragraph>
      </li>
      <br />
      <li>
        <Title variant="title" text_color={grey[700]} align="left">
          <Icon style={{ verticalAlign: "baseline" }}>email</Icon> Use our
          online form!
        </Title>
        <Paragraph variant="subheading" text_color={grey[600]} line_height="1.5em">
          You can submit your report or sighting using the form below. Please
          fill out the form and send it to us. A member of our team will contact
          you directly. The form will be sent to{" "}
          <span style={{ color: grey[800] }}>vic.invasive@gmail.com</span>
        </Paragraph>
      </li>
    </ul>
  </Wrapper>
);

export default Instruction;
