import { Box, Container, Toolbar } from "@mui/material";
import { useMemo, useState } from "react";
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
import { useAppDispatch } from "../../store";
import { setModalStatus } from "../../store/slices/appSlice";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const dispatch = useAppDispatch();

  const { email, onChange, isValid, handleSubmit } = useRegisterEmail();

  const onHandleRegister = () => dispatch(setModalStatus(true));

  const tabs = useMemo(
    () => [
      { name: "Home", onClick: () => {} },
      {
        name: "SDK",
        onClick: () => dispatch(setModalStatus(true)),
      },
      { name: "Community", onClick: () => dispatch(setModalStatus(true)) },
    ],
    []
  );
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

            <SyledButton variant="contained" onClick={onHandleRegister}>
              {" "}
              Register
            </SyledButton>
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
          <SyledButton
            variant="contained"
            style={{ margin: "10px 15px" }}
            onClick={onHandleRegister}
          >
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
      </Container>
    </StyledNavBar>
  );
};

export default Navbar;
