// import Validator from "email-validator";
import validator from "validator";
import { useState } from "react";
import axios from "axios";

import { useAppDispatch } from "../store";
import { setSnackBarStatus } from "../store/slices/appSlice";
export const useRegisterEmail = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const dispatch = useAppDispatch();

  const isValidEmail = (email: string) => validator.isEmail(email);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value.trim();
    setEmail(value);
    if (isValidEmail(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleSubmit = async () => {
    console.log("email");
    setEmail("");
    setIsValid(false);
    // setSnackbar(true);
    dispatch(setSnackBarStatus(true));
    await axios.post("https://server-wallet.ember.app/email/add", {
      email,
    });
  };

  const closeSnackBar = () => dispatch(setSnackBarStatus(false));

  return {
    isValidEmail,
    onChange,
    email,
    isValid,
    handleSubmit,
    closeSnackBar,
    setEmail,
  };
};
