import { FC } from "react";

import { TitleAndSubTitleProps as PROPS } from "../../interfaces";
import { SubTitle, Title, TitleAndSubTitleWrapper } from "../styled";

const TitleAndSubTitle: FC<PROPS> = ({ title, subTitle }) => {
  return (
    <TitleAndSubTitleWrapper>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </TitleAndSubTitleWrapper>
  );
};

export default TitleAndSubTitle;
