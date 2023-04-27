import { Snackbar } from "@mui/material";
import {
  CommunitySection,
  Faqs,
  Footer,
  Hero,
  NavBar,
  RegisterationModal,
  Slider,
  Video,
} from "../../components";
import { LandingPageWrapper } from "../../components/styled";
import { useAppDispatch, useAppSelector } from "../../store";
import { setSnackBarStatus } from "../../store/slices/appSlice";

const Landing = () => {
  const { snackbar } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  return (
    <LandingPageWrapper>
      <NavBar />
      <Hero />
      <Video />
      <Slider />
      <CommunitySection />
      <Faqs />
      <Footer />
      <RegisterationModal />
      <Snackbar
        open={snackbar}
        autoHideDuration={2000}
        message="Your email has been registered"
        onClose={() => dispatch(setSnackBarStatus(false))}
      />
    </LandingPageWrapper>
  );
};

export default Landing;
