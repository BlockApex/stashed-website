import {
  CommunitySection,
  Hero,
  NavBar,
  Slider,
  Video,
} from "../../components";
import { LandingPageWrapper } from "../../components/styled";

const Landing = () => {
  return (
    <LandingPageWrapper>
      <NavBar />
      <Hero />
      <Video />
      <Slider />
      <CommunitySection />
    </LandingPageWrapper>
  );
};

export default Landing;
