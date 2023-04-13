import {
  CommunitySection,
  Faqs,
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
      <Faqs />
    </LandingPageWrapper>
  );
};

export default Landing;
