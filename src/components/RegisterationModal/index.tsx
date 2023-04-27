import React from "react";

import { useRegisterEmail } from "../../hooks/useRegisterEmail";
import { useAppDispatch, useAppSelector } from "../../store";
import { setModalStatus } from "../../store/slices/appSlice";
import { BasicModal, EndAdornment, TitleAndSubTitle } from "../index";
import {
  RegisterationModalWrapper,
  StyledCloseIcon,
  StyledInputBase,
} from "../styled";

const Index = () => {
  const { isModalOpen } = useAppSelector((state) => state.app);

  const dispatch = useAppDispatch();

  const { email, onChange, isValid, handleSubmit, setEmail } =
    useRegisterEmail();

  const closeModal = () => {
    setEmail("");
    dispatch(setModalStatus(false));
  };

  const handleClick = () => {
    handleSubmit();
    closeModal();
  };
  return (
    <BasicModal open={isModalOpen} onClose={closeModal}>
      <RegisterationModalWrapper>
        <StyledCloseIcon onClick={closeModal} />
        <TitleAndSubTitle
          title="Don’t miss out!"
          subTitle="Sign up to our newsletter to stay up to date with everything Stashed."
        />
        <StyledInputBase
          placeholder="Enter your email"
          endAdornment={
            <EndAdornment isValid={isValid} handleClick={handleClick} />
          }
          onChange={onChange}
          value={email}
          input={email}
          isValid={isValid}
        />
      </RegisterationModalWrapper>
    </BasicModal>
  );
};

export default Index;
