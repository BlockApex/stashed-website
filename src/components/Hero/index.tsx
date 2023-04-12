import { isMobile } from "react-device-detect";

import {
  AppStore,
  Capital,
  Dao,
  Gaming,
  GoogleStore,
  HeroDesktop,
  HeroMObile,
  Mantle,
  Market,
} from "../../assets";
import Banner from "../Banner";
import {
  ButtonsWrapper,
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
        imageSrc={isMobile ? HeroMObile : HeroDesktop}
      >
        <ButtonsWrapper>
          <img
            src={AppStore}
            alt="appStoreButton"
            width={125}
            height={50}
            className="cursor"
          />
          <img
            src={GoogleStore}
            alt="googleStoreButton"
            width={125}
            height={50}
            className="cursor googleStoreButton"
          />{" "}
        </ButtonsWrapper>
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
