import { Box, Container, Snackbar, Toolbar } from "@mui/material";
import { useState } from "react";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

import { Logo } from "../../assets";
import {
  HeroFooterTitle,
  LogoImage,
  LogoTitle,
  MobileTabBox,
  NavBarSearchBoxWrapper,
  StyledInputBase,
  StyledNavBar,
  SyledButton,
  TogglerBox,
} from "../styled";
import TabBoxComponent from "../TabBoxComponent";
import { useRegisterEmail } from "../../hooks/useRegisterEmail";
import EndAdornment from "../EndAdornment";

const tabs = ["Home", "SDK", "Community"];
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const { email, onChange, isValid, handleSubmit, snackbar, closeSnackBar } =
    useRegisterEmail();

  return (
    <StyledNavBar position="sticky">
      <Container maxWidth="xl" sx={{ height: "100%", position: "relative" }}>
        <Toolbar
          disableGutters
          sx={{
            height: "100%",
          }}
        >
          <LogoImage src={Logo} alt="Name Logo" width={40} height={40} />
          <LogoTitle variant="h1" noWrap>
            Stashed
          </LogoTitle>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            <TabBoxComponent tabs={tabs} />

            <SyledButton variant="contained"> Register</SyledButton>
          </Box>
          <TogglerBox onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <CloseIcon className="greenColor" />
            ) : (
              <MenuIcon className="greenColor" />
            )}
          </TogglerBox>
        </Toolbar>
        <MobileTabBox toggle={toggle}>
          <SyledButton variant="contained" style={{ margin: "10px 15px" }}>
            Register
          </SyledButton>
          <TabBoxComponent tabs={tabs} />
          <NavBarSearchBoxWrapper>
            <HeroFooterTitle> Stay Updated</HeroFooterTitle>
            <StyledInputBase
              placeholder="Enter your email"
              endAdornment={
                <EndAdornment isValid={isValid} handleClick={handleSubmit} />
              }
              value={email}
              input={email}
              isValid={isValid}
              onChange={onChange}
            />
          </NavBarSearchBoxWrapper>
        </MobileTabBox>
        <Snackbar
          open={snackbar}
          autoHideDuration={2000}
          message="Your email has been registered"
          onClose={closeSnackBar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
      </Container>
    </StyledNavBar>
  );
};

export default Navbar;
