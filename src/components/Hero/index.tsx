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
import {
  ButtonsWrapper,
  CommunityList,
  HeroFooter,
  HeroFooterTitle,
  HeroHeader,
  HeroImage,
  HeroLeftBox,
  HeroSubTitle,
  HeroTitle,
  HeroWrapper,
} from "../styled";

const communityList = [Dao, Gaming, Mantle, Market, Capital];

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroHeader>
        <HeroLeftBox>
          <HeroTitle>
            START <br /> YOUR STASH
          </HeroTitle>
          <HeroSubTitle>
            One app for everything crypto.
            <br />
            Join, store, earn & explore
          </HeroSubTitle>
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
        </HeroLeftBox>

        <HeroImage src={isMobile ? HeroMObile : HeroDesktop} alt="HeroImage" />
      </HeroHeader>
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
