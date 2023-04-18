import { Tooltip } from "@mui/material";
import { FC } from "react";

import { AppStore, GoogleStore } from "../../assets";
import { AppleAndGoogleStoreButton as PROPS } from "../../interfaces";
import { ButtonsWrapper } from "../styled";

const AppleAndGoogleStoreButton: FC<PROPS> = ({ flexDirection }) => {
  return (
    <ButtonsWrapper flexDirection={flexDirection}>
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
          className={`cursor googleStoreButton ${
            flexDirection === "column" && "zeroMargin"
          }`}
        />
      </Tooltip>
    </ButtonsWrapper>
  );
};

export default AppleAndGoogleStoreButton;
