import { FC } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Fade } from "@mui/material";

import { BasicModalProps as PROPS } from "../../interfaces";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  // bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  borderRadius: "20px",
  outline: "none",
};

const BasicModal: FC<PROPS> = ({ children, onClose, open }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      sx={{ border: "none", outline: "none" }}
    >
      <Box sx={style}>
        <Fade in={open}>{children}</Fade>
      </Box>
    </Modal>
  );
};

export default BasicModal;
