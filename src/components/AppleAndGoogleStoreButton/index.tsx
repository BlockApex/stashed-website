import { Tooltip } from "@mui/material";

import { AppStore, GoogleStore } from "../../assets";
import { ButtonsWrapper } from "../styled";

const AppleAndGoogleStoreButton = () => {
  return (
    <ButtonsWrapper>
      <Tooltip title="Coming Soon...">
        <img
          src={AppStore}
          alt="appStoreButton"
          width={125}
          height={50}
          className="cursor"
        />
      </Tooltip>
      <Tooltip title="Coming Soon...">
        <img
          src={GoogleStore}
          alt="googleStoreButton"
          width={125}
          height={50}
          className="cursor googleStoreButton"
        />
      </Tooltip>
    </ButtonsWrapper>
  );
};

export default AppleAndGoogleStoreButton;
