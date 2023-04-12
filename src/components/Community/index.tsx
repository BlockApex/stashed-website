import { Divider } from "@mui/material";

import {
  CommunitySectionBody,
  CommunitySectionLeftBox,
  CommunitySectionRightBox,
  CommunitySectionWrapper,
  HeroTitle,
} from "../styled";

const CommunitySection = () => {
  return (
    <CommunitySectionWrapper>
      <HeroTitle>
        Join our
        <br /> Community
      </HeroTitle>
      <CommunitySectionBody>
        <CommunitySectionLeftBox>a</CommunitySectionLeftBox>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ margin: "0px 20px", border: "1px solid #B2B2B2" }}
        />
        <CommunitySectionRightBox>s</CommunitySectionRightBox>
      </CommunitySectionBody>
    </CommunitySectionWrapper>
  );
};

export default CommunitySection;
