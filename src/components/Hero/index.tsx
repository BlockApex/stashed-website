import { useMemo } from "react";
import { Capital, Dao, Gaming, HeroMobile, Mantle, Market } from "../../assets";
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

const Hero = () => {
  const communityList = useMemo(
    () => [
      { src: Dao, link: "https://daomaker.com/" },
      { src: Gaming, link: "https://polkastarter.gg/" },
      { src: Mantle, link: "https://www.mantle.xyz/" },
      { src: Market, link: "https://marketacross.com/" },
      { src: Capital, link: "https://sl2.capital/" },
    ],
    []
  );

  return (
    <HeroWrapper>
      <Banner
        Title={
          <HeroTitle>
            {"START"}
            <br /> {"YOUR STASH"}
          </HeroTitle>
        }
        subTitle={
          <BannerSubTitle size={20} isHeroSection={true}>
            One app for everything crypto.
            <br />
            Join, store, earn & explore
          </BannerSubTitle>
        }
        isSlider={false}
        imageSrc={HeroMobile}
      >
        <AppleAndGoogleStoreButton />
      </Banner>

      <HeroFooter>
        <HeroFooterTitle> BACKED BY</HeroFooterTitle>
        <CommunityList>
          {communityList.map((community, key) => (
            <img
              src={community.src}
              alt={`CommunityListImage `}
              key={key}
              style={{ margin: "10px" }}
              className="cursor"
              onClick={() => window.open(community.link)}
            />
          ))}
        </CommunityList>
      </HeroFooter>
    </HeroWrapper>
  );
};

export default Hero;
