// import Validator from "email-validator";
import validator from "validator";
import { useState } from "react";
import axios from "axios";
export const useRegisterEmail = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [snackbar, setSnackbar] = useState(false);

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
    setSnackbar(true);
    await axios.post("https://server-wallet.ember.app/email/add", {
      email,
    });
  };

  const closeSnackBar = () => setSnackbar(false);

  return {
    isValidEmail,
    onChange,
    email,
    isValid,
    handleSubmit,
    snackbar,
    closeSnackBar,
  };
};
