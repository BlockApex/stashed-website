import { Box, Divider } from "@mui/material";
import { useMemo } from "react";
import { Discord, Medium, RightArrow, Telegram, Twitter } from "../../assets";

import { TitleAndSubTitle } from "../index";

import {
  CommunitySectionBody,
  CommunitySectionLeftBox,
  CommunitySectionRightBox,
  CommunitySectionWrapper,
  HeroTitle,
  StyledInputBase,
} from "../styled";

const EndAdornment = () => {
  return <img src={RightArrow} alt="rightArrow" className="cursor" />;
};

const CommunitySection = () => {
  const CommunityPlatformLogos = useMemo(
    () => [Twitter, Discord, Telegram, Medium],
    []
  );

  return (
    <CommunitySectionWrapper>
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
          <StyledInputBase
            placeholder="Enter your email"
            endAdornment={<EndAdornment />}
          />
        </CommunitySectionLeftBox>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ margin: "0px 35px", border: "1px solid #B2B2B2" }}
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
