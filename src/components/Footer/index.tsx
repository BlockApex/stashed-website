import { useMemo } from "react";
import { Box } from "@mui/material";

import { Logo } from "../../assets";
import AppleAndGoogleStoreButton from "../AppleAndGoogleStoreButton";
import PlatformList from "../PlatformList";
import {
  FooterHeading,
  FooterLeftBox,
  FooterRightBox,
  FooterWrapper,
  LogoImage,
  LogoTitle,
  SubTitle,
} from "../styled";

const Footer = () => {
  const communityPlatformList = useMemo(
    () => [
      {
        name: "Discord",
        link: "",
      },
      {
        name: "Telegram",
        link: "",
      },
      {
        name: "Twitter",
        link: "",
      },
      {
        name: "Medium",
        link: "",
      },
    ],
    []
  );

  const resourcesPlatformList = useMemo(
    () => [
      { name: "Litepaper", link: "" },
      { name: "Docs", link: "" },
    ],
    []
  );
  return (
    <FooterWrapper>
      <FooterLeftBox>
        {" "}
        <FooterHeading style={{ padding: "0px" }}>
          JOIN <br /> STASHED
        </FooterHeading>
        <AppleAndGoogleStoreButton />
      </FooterLeftBox>
      <FooterRightBox>
        <Box display="flex" alignItems="center" mb={0}>
          <LogoImage src={Logo} alt="Name Logo" width={40} height={40} />

          <LogoTitle variant="h1" noWrap color="white">
            Stashed
          </LogoTitle>
        </Box>
        <Box
          display="flex"
          flexDirection={{
            xs: "row",
            sm: "column",
            md: "row",
            lg: "row",
          }}
          marginBottom={{ md: 5, xs: 2 }}
          marginTop={{ md: 5, xs: 2 }}
        >
          <PlatformList
            heading="COMMUNITY"
            platformList={communityPlatformList}
          />
          <PlatformList
            heading="RESOURCES"
            platformList={resourcesPlatformList}
          />
        </Box>
        <SubTitle color="#fff">
          Copyright © 2023, STASHED &nbsp; • &nbsp; Privacy Policy &nbsp; •
          &nbsp; Terms & Conditions
        </SubTitle>
      </FooterRightBox>
    </FooterWrapper>
  );
};

export default Footer;
