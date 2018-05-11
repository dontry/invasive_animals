import React from "react";
import Dialog, { DialogActions, DialogContent } from "material-ui/Dialog";
import { grey } from "material-ui/colors";
import { Paragraph } from "../common/Text";
import { StyledButton } from "../common/ActionButtonGroup";

const ConfirmationDialog = ({ handleClose, title, message, ...rest }) => {
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      max_width="xs"
      aria-lablledby={title}
      {...rest}
      style={{ padding: "2rem", min_width: "500px" }}
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
    </Dialog>
  );
};

export default ConfirmationDialog;
