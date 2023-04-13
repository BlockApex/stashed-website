import {
  AppBar,
  Box,
  styled,
  Typography,
  Button,
  InputBase,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

export const LandingPageWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const StyledNavBar = styled(AppBar)(() => ({
  width: "100%",
  height: "65px",
  background: "rgba(255, 255, 255, 0.9)",
  borderBottom: "0.5px solid #B2B2B2",
  boxShadow: "0px -0.4762px 0px rgba(90, 90, 90, 0.3)",
  backdropFilter: "blur(25.8889px)",
  padding: "0px",
}));

export const LogoImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: 30,
    height: 30,
  },
}));

export const LogoTitle = styled(Typography)(({ theme }) => ({
  color: "#0D0D0D",
  fontWeight: "bold",
  fontSize: "32px",
  lineHeight: "32px",
  textDecoration: "none",
  marginLeft: "5px",
  letterSpacing: "-0.02em",
  [theme.breakpoints.down("sm")]: {
    display: "flex",

    marginLeft: "3px",
    fontSize: "17px",
    fontWeight: "bolder",
  },
})) as typeof Typography;

export const TabBox = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100%",
  alignItems: "center",
  borderRight: " 0.5px solid #B2B2B2",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    borderRight: "none",
    alignItems: "flex-start",
    marginTop: "0px",
  },
}));

export const SingleTabText = styled("p")(({ theme }) => ({
  color: "#0D0D0D",
  fontWeight: "400",
  fontSize: "14x",

  letterSpacing: "-0.02em",
  margin: "1rem 2rem",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    margin: "1rem 1rem",
  },
}));

export const SyledButton = styled(Button)(() => ({
  background: "#00E599",
  width: "100px",
  height: "45px",
  textTransform: "none",
  color: "#0D0D0D",
  marginLeft: "20px",
  boxShadow: "none",
  fontSize: "14px",
  fontWeight: 400,
  cursor: "pointer",
  ":hover": {
    background: "#00E599",
    boxShadow: "none",
  },
}));

export const TogglerBox = styled(Box)(({ theme }) => ({
  background: "#0D0D0D",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "3px",
  borderRadius: "3px",
  marginLeft: "auto",
  cursor: "pointer",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const MobileTabBox = styled("div", {
  shouldForwardProp: (prop) => prop !== "toggle",
})<{ toggle: boolean }>(({ theme, toggle }) => ({
  height: toggle ? "230px" : "0px",

  width: "100%",
  left: "0px",
  position: "absolute",
  transition: "all 0.3s",
  top: "65px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  boxSizing: "border-box",
  background: "white",
  [theme.breakpoints.up(600)]: {
    display: "none",
  },
}));

export const HeroWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  padding: "20px 150px",
  flexDirection: "column",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 80px",
  },
  [theme.breakpoints.down(1082)]: {
    padding: "20px 40px",
  },
  [theme.breakpoints.down(962)]: {
    padding: "20px 10px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "10px",
  },
}));

export const BannerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const BannerLeftBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginRight: "40px",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "30px",
    marginRight: "0px",
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: "0px",
    marginRight: "10px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const HeroTitle = styled(Typography)<{ textAlign?: string }>(
  ({ theme, textAlign }) => ({
    color: "#0D0D0D",
    fontWeight: "860",
    fontSize: "100px",
    lineHeight: "115%",
    textTransform: "uppercase",
    letterSpacing: "-0.02em",
    display: "flex",
    [theme.breakpoints.down("lg")]: {
      fontSize: "70px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "55px",
    },
    [theme.breakpoints.down(680)]: {
      fontSize: "50px",
    },
    [theme.breakpoints.down(640)]: {
      fontSize: "42px",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: textAlign || "center",
    },
  })
) as typeof Typography;

export const BannerSubTitle = styled("p")<{
  size: number;
  color?: string;
}>(({ theme, size, color }) => ({
  color: color || "#0D0D0D",
  fontWeight: 400,
  fontSize: `${size}px`,
  fontFamily: "SF Pro",
  margin: "5px 0px 0px 0px",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

export const ButtonsWrapper = styled("div")(() => ({
  marginTop: "20px",
}));

export const BannerImage = styled("img")(({ theme }) => ({
  width: "440px",
  height: "600px",
  marginTop: "30px",
  [theme.breakpoints.down("lg")]: {
    width: "400px",
  },
  [theme.breakpoints.down("md")]: {
    width: "290px",
    height: "400px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "250px ",
    marginTop: "0px",
    height: "300px",
  },
  [theme.breakpoints.down(640)]: {
    width: "240px",
  },
}));

export const HeroFooter = styled("div")(({ theme }) => ({
  marginTop: "20px",
}));

export const HeroFooterTitle = styled("p")(() => ({
  fontSize: "30px",
  fontWeight: "bolder",
  margin: "0px",
}));

export const CommunityList = styled("div")(() => ({
  display: "flex",
  marginTop: "10px",
  justifyContent: "space-between",
  overflowX: "auto",
}));

export const VideoWrapper = styled("div")(() => ({
  width: "100%",
  overflow: "hidden",
  // position: "absolute",
  top: "0",
  left: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const BannerWrapper = styled("div")<{
  background: string;
}>(({ theme, background }) => ({
  display: "flex",
  padding: "20px 150px",
  flexDirection: "column",
  background,
  marginTop: "0px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 120px",
  },
  [theme.breakpoints.down(1082)]: {
    padding: "20px 90px",
  },
  [theme.breakpoints.down(962)]: {
    padding: "20px 80px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "10px 60px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
}));

export const SliderTitle = styled("p")<{ color?: string }>(
  ({ theme, color }) => ({
    color: color || "#0D0D0D",

    fontSize: "60px",
    fontWeight: 860,
    margin: "0px",
    letterSpacing: "-0.02em",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: "30px",
    },
  })
);

export const CommunitySectionWrapper = styled("div")(({ theme }) => ({
  // border: "2px solid red",

  padding: "40px 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "30px 50px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "30px 30px",
  },
}));

export const CommunitySectionBody = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  marginTop: "15px",
  // border: "2px solid yellow",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const CommunitySectionLeftBox = styled("div")(({ theme }) => ({
  width: "35%",
  // border: "2px solid green",
  [theme.breakpoints.down("md")]: {
    width: "45%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginBottom: "20px",
  },
}));
export const CommunitySectionRightBox = styled("div")(({ theme }) => ({
  width: "45%",
  // border: "2px solid blue",
  [theme.breakpoints.down("md")]: {
    width: "55%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: "20px",
  },
}));

export const TitleAndSubTitleWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const Title = styled("p")(() => ({
  margin: "0px",
  fontSize: "22px",
  fontWeight: 860,
  textTransform: "capitalize",
}));

export const SubTitle = styled("p")(() => ({
  margin: "0px",
  fontSize: "15px",
  fontWeight: 400,
  lineHeight: "25px",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  width: "100%",
  borderRadius: "6px",
  border: "1px solid #b2b2b2",
  padding: "5px 10px",
  fontSize: "14px",
  // fontFamily: "",
  fontWeight: "500",
  marginTop: "6px",

  "& .MuiInputBase-input": {
    width: "100%",
    // fontFamily: "",
    color: "#000",
    padding: "0px",
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#0D0D0D",
    fontSize: "14px",
    fontWeight: "400",
  },
  [theme.breakpoints.down(779)]: {
    marginTop: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "10px",
  },
}));

export const FaqsWrapper = styled("div")(() => ({
  // border: "2px solid red",
  padding: "20px 0px",
  width: "100%",
  overflow: "hidden",
}));

export const Heading = styled("p")(({ theme }) => ({
  fontSize: "65px",
  fontWeight: 860,
  lineHeight: "86px",

  padding: "0px 80px",
  margin: "10px",

  [theme.breakpoints.down("lg")]: {
    padding: "0px 50px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0px 30px",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "0px",
    fontSize: "40px",
  },
}));

export const AccordionStyled = styled(Accordion)(({ theme }) => ({
  overflow: "hidden",
  "&:not(:last-child)": {
    borderBottom: 0,
    marginBottom: 1,
  },
  "&:before": {
    display: "none",
  },

  borderTop: "1px solid #B2B2B2",
  "&.MuiAccordion-root": {
    padding: "10px 40px",
    marginBottom: "0px",
    [theme.breakpoints.down("sm")]: {
      padding: "5px 10px",
    },
  },
}));

export const AccordionSummaryStyled = styled(AccordionSummary)(({ theme }) => ({
  padding: "5px 35px ",
  // border: "2px solid red",
  "& .MuiAccordionSummary-content": {
    margin: 0,
  },
  [theme.breakpoints.down("sm")]: {
    padding: "5px 10px",
  },
}));

export const AccordionDetailsStyled = styled(AccordionDetails)(() => ({
  background: "#ccfaeb",
  borderRadius: "3px",
  padding: "25px",
  marginTop: "10px",
  // opacity: 0.2,
}));
