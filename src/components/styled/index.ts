import { AppBar, Box, styled, Typography, Button } from "@mui/material";

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
  [theme.breakpoints.up(600)]: {
    display: "none",
  },
}));
