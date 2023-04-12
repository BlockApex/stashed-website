import { FC } from "react";

import { BannerProps as PROPS } from "../../interfaces";
import { BannerHeader, BannerLeftBox, BannerImage } from "../styled";

const Banner: FC<PROPS> = ({
  imageSrc,
  Title,
  subTitle,

  children,
}) => {
  return (
    <BannerHeader style={{ background: "none" }}>
      <BannerLeftBox>
        <>{Title}</>

        <>{subTitle}</>
        {children}
      </BannerLeftBox>

      <BannerImage src={imageSrc} alt="BannerImage" width={200} height={200} />
    </BannerHeader>
  );
};

export default Banner;
