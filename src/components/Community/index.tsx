import { Box, ClickAwayListener, Divider } from "@mui/material";
import { useMemo, useRef } from "react";
import { isMobile } from "react-device-detect";

import {
  Discord,
  Medium,
  NFT,
  NftDesktop,
  Telegram,
  Twitter,
} from "../../assets";
import { useRegisterEmail } from "../../hooks/useRegisterEmail";

import { EndAdornment, TitleAndSubTitle } from "../index";

import {
  CommunitySectionBody,
  CommunitySectionLeftBox,
  CommunitySectionRightBox,
  CommunitySectionWrapper,
  HeroTitle,
  StyledInputBase,
} from "../styled";

const CommunitySection = () => {
  const CommunityPlatformLogos = useMemo(
    () => [Twitter, Discord, Telegram, Medium],
    []
  );

  const ref = useRef();

  const { email, onChange, isValid, handleSubmit } = useRegisterEmail();

  return (
    <CommunitySectionWrapper>
      <img
        src={isMobile ? NFT : NftDesktop}
        alt="nft"
        className={`${isMobile ? "nftMobile" : "nftDesktop"}`}
      />

      <HeroTitle textAlign={"start"}>
        Join our
        <br /> Community
      </HeroTitle>
      <CommunitySectionBody>
        <CommunitySectionLeftBox>
          <TitleAndSubTitle
            title="Don’t miss out!"
            subTitle="Sign up to our newsletter to stay up to date with everything Stashed."
          />

          <ClickAwayListener
            onClickAway={() => {
              // @ts-ignore
              ref.current?.blur();
            }}
          >
            <StyledInputBase
              placeholder="Enter your email"
              ref={ref}
              endAdornment={
                <EndAdornment isValid={isValid} handleClick={handleSubmit} />
              }
              onChange={onChange}
              value={email}
              input={email}
              isValid={isValid}
              autoComplete="off"
              // autoFocus={false}
            />
          </ClickAwayListener>
        </CommunitySectionLeftBox>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ margin: { sm: "0px 35px" }, border: "1px solid #B2B2B2" }}
        />
        <CommunitySectionRightBox>
          <TitleAndSubTitle
            title="Join the conversation!"
            subTitle="Find our amazing community on Discord, & follow us on Twitter, Telegram & Medium so you never miss an update."
          />
          <Box sx={{ display: "flex", marginTop: { xs: 1 } }}>
            {CommunityPlatformLogos.map((logo, key) => {
              return (
                <img
                  src={logo}
                  key={key}
                  alt={`${key}`}
                  style={{ margin: "5px" }}
                  className="cursor"
                />
              );
            })}
          </Box>
        </CommunitySectionRightBox>
      </CommunitySectionBody>
    </CommunitySectionWrapper>
  );
};

export default CommunitySection;
