import { PaletteMode } from "@mui/material";
import { ReactElement } from "react";

export interface ThemeProps {
  children: React.ReactNode;
}

export type AppReduxState = {
  colorTheme: PaletteMode;
};

export type TabBoxComponentProps = {
  tabs: string[];
};

export type BannerProps = {
  Title: ReactElement;
  subTitle: ReactElement;
  imageSrc: string;
  children?: React.ReactElement;
};
