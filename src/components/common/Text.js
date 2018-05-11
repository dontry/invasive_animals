import styled from "styled-components";
import Typography from "material-ui/Typography";
import { grey } from "material-ui/colors";

export const Paragraph = styled(Typography)`
  && {
    color: ${props => props.text_color || grey[700]};
    text-align: ${props => props.align || "start"};
    padding: ${props => props.padding || "none"};
    font-weight: ${props => props.fontWeight};
    white-space: ${props => props.whiteSpace || "pre-line"};
    line-height: ${props => props.lineHeight || "1.5em"};
    font-size ${props => props.txtSize || "none"};
  }
`;
export const Title = Paragraph.extend`
  && {
    text-align: ${props => props.align || "center"};
  }
`;
