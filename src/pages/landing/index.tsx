import { Hero, NavBar, Slider, Video } from "../../components";
import { LandingPageWrapper } from "../../components/styled";

const Landing = () => {
  return (
    <LandingPageWrapper>
      <NavBar />
      <Hero />
      <Video />
      <Slider />
    </LandingPageWrapper>
  );
};

export default Landing;
