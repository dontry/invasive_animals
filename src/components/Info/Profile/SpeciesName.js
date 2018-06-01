import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { grey } from "material-ui/colors";
import { Title } from "../../common/Text";

const SpeciesName = ({ commonName, academicalName }) => {
  return (
    <Fragment>
      <Title variant="display1" text_color={grey[800]} align="left">
        {commonName}
      </Title>
      <Title variant="title" text_color={grey[600]} align="left">
        {academicalName}
      </Title>
    </Fragment>
  );
};

SpeciesName.propTypes = {
  commonName: PropTypes.string,
  academicalName: PropTypes.string
};

export default SpeciesName;
