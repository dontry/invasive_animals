import React from "react";
import styled from "styled-components";
import Dialog, { DialogActions, DialogContent } from "material-ui/Dialog";
import { grey } from "material-ui/colors";
import { Paragraph } from "../common/Text";
import { StyledButton } from "../common/ActionButtonGroup";

const StyledDialog = styled(Dialog)`
  width: 500px;
  max-height: 300px;
  padding: 1rem 2rem;
  overflow-y: scroll;
  @media screen and (max-width: 600px) {
    width: 80vw;
  }
`;

const MessageDialog = ({ handleClose, title, message, ...rest }) => {
  return (
    <StyledDialog
      disableBackdropClick
      disableEscapeKeyDown
      max_width="xs"
      aria-lablledby={title}
      {...rest}
    >
      <DialogContent>
        <Paragraph variant="title" text_color={grey[700]}>
          {message}
        </Paragraph>
      </DialogContent>
      <DialogActions>
        <StyledButton
          onClick={handleClose}
          type="message"
          trait="main"
          variant="flat"
        >
          Confirm
        </StyledButton>
      </DialogActions>
    </StyledDialog>
  );
};

export default MessageDialog;
