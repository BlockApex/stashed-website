import { FC } from "react";

import { AppStore, GoogleStore } from "../../assets";
import { AppleAndGoogleStoreButton as PROPS } from "../../interfaces";
import { useAppDispatch } from "../../store";
import { setModalStatus } from "../../store/slices/appSlice";
import { ButtonsWrapper } from "../styled";

const AppleAndGoogleStoreButton: FC<PROPS> = ({ flexDirection }) => {
  const dispatch = useAppDispatch();

  const openModal = () => dispatch(setModalStatus(true));
  return (
    <ButtonsWrapper flexDirection={flexDirection}>
      <img
        src={AppStore}
        alt="appStoreButton"
        width={125}
        height={50}
        className="cursor"
        onClick={openModal}
      />

      <img
        src={GoogleStore}
        alt="googleStoreButton"
        width={125}
        height={50}
        className={`cursor googleStoreButton ${
          flexDirection === "column" && "zeroMargin"
        }`}
        onClick={openModal}
      />
    </ButtonsWrapper>
  );
};

export default AppleAndGoogleStoreButton;
