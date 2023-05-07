import { useMemo, useRef } from "react";
import { isMobile } from "react-device-detect";

import {
  HomePic,
  SendPage,
  GamesAndApps,
  Earn,
  UltimateMarketPlace,
} from "../../assets";
import Banner from "../Banner";
import SliderDots from "../SliderDots";
import {
  BannerWrapper,
  SliderTitle,
  BannerSubTitle,
  TextUnderLine,
} from "../styled";

const white = "#fff";
const black = "#0D0D0D";

function SlideShow() {
  const home = useRef(null);
  const earn = useRef(null);
  const send = useRef(null);
  const marketPlace = useRef(null);
  const gamesAndApp = useRef(null);

  const SectionReference = useMemo(
    () => [
      { ref: home, activeColor: "#000" },
      { ref: earn, activeColor: "#00E599" },
      { ref: send, activeColor: "#000" },
      { ref: marketPlace, activeColor: "#00E599" },
      { ref: gamesAndApp, activeColor: "#000" },
    ],
    []
  );

  const slides = useMemo(
    () => [
      {
        title: (
          <SliderTitle>
            {"YOUR"} <TextUnderLine>HOME</TextUnderLine>
            <br /> {"FOR CRYPTO"}
          </SliderTitle>
        ),
        subTitle: (
          <BannerSubTitle size={isMobile ? 14 : 20}>
            {" "}
            Stashed makes crypto seamless with social logins & a display that’s
            easy for everyone to understand. You can also pay for transactions
            easily by using $STSH for gas on every chain!{" "}
          </BannerSubTitle>
        ),
        image: HomePic,
        background: white,
        ref: home,
      },
      {
        title: (
          <SliderTitle color={white}>
            <TextUnderLine> EARN </TextUnderLine> WHILE <br /> YOU’RE IDLE
          </SliderTitle>
        ),
        subTitle: (
          <BannerSubTitle color={white} size={isMobile ? 14 : 20}>
            Make passive gains with curated staking and lending programs on
            Stashed. Refer your friends + earn forever rewards & get cashback on
            every transaction with Stashed!{" "}
          </BannerSubTitle>
        ),
        image: Earn,
        background: black,
        ref: earn,
      },
      {
        title: (
          <SliderTitle>
            <TextUnderLine color="#fff"> SEND & SWAP</TextUnderLine> <br /> IN
            ONE STOP
          </SliderTitle>
        ),
        subTitle: (
          <BannerSubTitle size={isMobile ? 14 : 20}>
            Sending and receiving crypto is now grandma-friendly, with memorable
            Stashed usernames. Buy, sell & swap crypto for the best prices, +
            cashout with a click!{" "}
          </BannerSubTitle>
        ),
        image: SendPage,
        background: "#00E599",
        ref: send,
      },
      {
        title: (
          <SliderTitle color={white} style={{ marginBottom: "10px" }}>
            THE ULTIMATE <br /> <TextUnderLine>MARKETPLACE</TextUnderLine>
          </SliderTitle>
        ),
        subTitle: (
          <BannerSubTitle size={isMobile ? 14 : 20} color={white}>
            The best place for trading NFTs - Stashed aggregates all major NFT
            marketplaces so you can easily browse, add to cart, & checkout with
            crypto + cash! {" "}
          </BannerSubTitle>
        ),
        image: UltimateMarketPlace,
        background: black,
        ref: marketPlace,
      },
      {
        title: (
          <SliderTitle>
            <TextUnderLine> GAMES & APPS</TextUnderLine>
            <br /> SUPERSTORE
          </SliderTitle>
        ),
        subTitle: (
          <BannerSubTitle size={isMobile ? 14 : 20}>
            With the Stashed App Store, you can play new games, discover dApps,
            track coins, find projects + explore Web3 with the push of a button.
            Start your journey now! {" "}
          </BannerSubTitle>
        ),
        image: GamesAndApps,
        background: white,
        ref: gamesAndApp,
      },
    ],
    []
  );

  return (
    <div>
      {slides.map((slideContent, key) => {
        return (
          <div
            key={key}
            ref={slideContent.ref}
            style={{ position: "relative" }}
          >
            <BannerWrapper background={slideContent.background}>
              <Banner
                Title={slideContent.title}
                subTitle={slideContent.subTitle}
                imageSrc={slideContent.image}
                isSlider={true}
              />
            </BannerWrapper>
            <SliderDots
              SectionReference={SectionReference}
              currentIndex={key}
            />
          </div>
        );
      })}
    </div>
  );
}

export default SlideShow;
