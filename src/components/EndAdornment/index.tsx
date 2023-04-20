import { FC } from "react";

import { RightArrow } from "../../assets";
import { EndAdornmentProps as PROPS } from "../../interfaces";

const EndAdornment: FC<PROPS> = ({ isValid, handleClick }) => {
  return (
    <img
      src={RightArrow}
      alt="rightArrow"
      onClick={handleClick}
      style={{
        opacity: isValid ? 1 : 0.8,
        cursor: isValid ? "pointer" : "not-allowed",
        pointerEvents: isValid ? "auto" : "none",
      }}
    />
  );
};

export default EndAdornment;
