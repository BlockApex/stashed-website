import { isMobile } from "react-device-detect";

import {
  Capital,
  Dao,
  Gaming,
  HeroDesktop,
  HeroMObile,
  Mantle,
  Market,
} from "../../assets";
import AppleAndGoogleStoreButton from "../AppleAndGoogleStoreButton";
import Banner from "../Banner";
import {
  CommunityList,
  HeroFooter,
  HeroFooterTitle,
  HeroTitle,
  HeroWrapper,
  BannerSubTitle,
} from "../styled";

const communityList = [Dao, Gaming, Mantle, Market, Capital];

const Hero = () => {
  return (
    <HeroWrapper>
      <Banner
        Title={
          <HeroTitle>
            {"START "}
            <br /> {"YOUR STASH"}
          </HeroTitle>
        }
        subTitle={
          <BannerSubTitle size={20}>
            One app for everything crypto.
            <br />
            Join, store, earn & explore
          </BannerSubTitle>
        }
        isSlider={false}
        imageSrc={isMobile ? HeroMObile : HeroDesktop}
      >
        <AppleAndGoogleStoreButton />
      </Banner>

      <HeroFooter>
        <HeroFooterTitle> BACKED BY</HeroFooterTitle>
        <CommunityList>
          {communityList.map((src, key) => (
            <img
              src={src}
              alt={`CommunityListImage `}
              key={key}
              style={{ margin: "10px" }}
              className="cursor"
            />
          ))}
        </CommunityList>
      </HeroFooter>
    </HeroWrapper>
  );
};

export default Hero;
