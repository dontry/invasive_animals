import React from "react";
import PropTypes from "prop-types";
import { green } from "material-ui/colors";
import Grid from "material-ui/Grid";
import {  Paragraph } from "../../common/Text";

const TAXONOMY = ["Kingdom", "Phylum", "Class", "Order", "Family"];

const Detail = ({ name, value }) => (
  <Grid item xs={6} style={{ marginBottom: "0.5rem" }}>
    <Paragraph variant="subheading" font_weight="bold" text_color={green[700]}>
      {name}:
    </Paragraph>
    <Paragraph variant="body1">{value}</Paragraph>
  </Grid>
);

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

const TaxonomyList = ({ profile }) => (
  <Grid container>
    {TAXONOMY.map(
      attr =>
        profile[attr] && <Detail key={attr} name={attr} value={profile[attr]} />
    )}
  </Grid>
);

TaxonomyList.propTypes = {
  profile: PropTypes.object.isRequired
}

export default TaxonomyList;


