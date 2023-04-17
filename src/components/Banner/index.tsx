import { FC } from "react";

import { BannerProps as PROPS } from "../../interfaces";
import { BannerHeader, BannerLeftBox, BannerImage } from "../styled";

const Banner: FC<PROPS> = ({
  imageSrc,
  Title,
  subTitle,

  children,
  isSlider,
}) => {
  return (
    <BannerHeader style={{ background: "none" }}>
      <BannerLeftBox isSlider={isSlider}>
        <>{Title}</>

        <>{subTitle}</>
        {children}
      </BannerLeftBox>

      <BannerImage src={imageSrc} alt="BannerImage" width={200} height={200} />
    </BannerHeader>
  );
};

export default Banner;
