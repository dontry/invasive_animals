import React from "react";
import PropTypes from "prop-types";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui";
import Icon from "material-ui/Icon";
import { grey } from "material-ui/colors";
//Components
import { Title, Paragraph } from "../../common/Text";
import { addLineBreaker } from "../../../utils/tools";
import { GeographicalDistribution } from "../../Insight/DistributionMap";

const AttributeDetail = ({ attr, content, category, commonName }) => {
  return (
    <ExpansionPanel key={attr.value}>
      <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
        <Title variant="title" text_color={grey[800]} align="left">
          {attr.value}
        </Title>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ display: "block" }}>
        <Paragraph
          font_size="1.1em"
          text_color={grey[600]}
          line_height="1.5em"
          padding="0.5rem 0 2rem"
        >
          {addLineBreaker(content)}
        </Paragraph>
        {attr.key === "Distribution" &&
          category === "Animal" && (
            <div style={{ width: "100%", margin: "0 auto" }}>
              <GeographicalDistribution species={commonName} />
              <Title text_color={grey[700]}>
                Distribution of {commonName} in Australia
              </Title>
            </div>
          )}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

AttributeDetail.propTypes = {
  attr: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string
  }).isRequired,
  category: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  commonName: PropTypes.string.isRequired
};

export default AttributeDetail;
