import { Box } from "@mui/material";
import { FC } from "react";

import { PlatformList as PROPS } from "../../interfaces";
import { LogoTitle, SubTitle } from "../styled";

const PlatformList: FC<PROPS> = ({ platformList, heading }) => {
  return (
    <Box display="flex" flexDirection="column" mr={5}>
      <LogoTitle
        variant="h4"
        noWrap
        color="white"
        sx={{ fontSize: { md: "30px" }, marginLeft: "0px" }}
        mb={2}
      >
        {heading}
      </LogoTitle>
      {platformList.map((platform, key) => {
        return (
          <SubTitle key={key} style={{ color: "#ffff" }}>
            {platform.name}
          </SubTitle>
        );
      })}
    </Box>
  );
};

export default PlatformList;
