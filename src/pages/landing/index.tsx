import {
  CommunitySection,
  Faqs,
  Footer,
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
      <Footer />
    </LandingPageWrapper>
  );
};

export default Landing;
