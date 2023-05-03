import React, { useEffect, useState } from "react";
import { useMemo, useRef } from "react";
import { isMobile } from "react-device-detect";
import { useInView } from "react-intersection-observer";
import { RemoveScroll } from "react-remove-scroll";
import Slider from "react-slick";
import {
  HomePic,
  SendPage,
  GamesAndApps,
  Earn,
  UltimateMarketPlace,
} from "../../assets";
import Banner from "../Banner";
import {
  BannerWrapper,
  SliderTitle,
  BannerSubTitle,
  TextUnderLine,
} from "../styled";

const white = "#fff";
const black = "#0D0D0D";

function SlideShow() {
  const settings = {
    dots: true,
    infinite: false,

    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    // autoplay: true,
    speed: 500,
    // autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: " 20%",
    adaptiveHeight: true,
    beforeChange: (current: any, next: any) => {
      setCurrent(next);
      console.log({ current, next });
      if ((current === 1 || current===0) && next === 0 ) {
        setShow(false);
      }
    },
    afterChange: (current: any) => {
      if (current === slides.length - 1) {
        setShow(false);
      }
    },
  };

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
      },
    ],
    []
  );

  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(0);

  const slider = useRef(null);
  const {
    ref: ref1,
    entry,
    inView,
  } = useInView({
    /* Optional options */
    threshold: [1],
    initialInView: false,
  });

  // const handleMouseDown = () => setShow(true);

  const handleMouseUp = () => {
    setShow(false);
  };

  const handleWheel = (e: any) => {
    if (e.deltaY > 0) {
      // @ts-ignore
      slider.current.slickNext();
    } else {
      // @ts-ignore
      slider.current.slickPrev();
      if (current === 0) {
        setShow(false);
      }
      console.log(current);
    }
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  useEffect(() => {
    if (entry?.isIntersecting) {
      setShow(true);
    }
  }, [entry, inView]);

  return (
    <div
      // onMouseEnter={handleMouseDown}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
      ref={ref1}
    >
      <RemoveScroll removeScrollBar={false} enabled={false}>
        <Slider {...settings} ref={slider}>
          {slides.map((slideContent, key) => {
            return (
              <div key={key}>
                <BannerWrapper background={slideContent.background}>
                  <Banner
                    Title={slideContent.title}
                    subTitle={slideContent.subTitle}
                    imageSrc={slideContent.image}
                    isSlider={true}
                  />
                </BannerWrapper>
              </div>
            );
          })}
        </Slider>
      </RemoveScroll>
    </div>
  );
}

export default SlideShow;
