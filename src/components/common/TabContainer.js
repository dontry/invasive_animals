import React from "react";
import styled from "styled-components";

export default styled.div`
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
  max-width: ${props => props.max_width || "700px"};
  margin: 0 auto;
  padding: 2rem;
`;
