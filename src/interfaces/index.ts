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
  isSlider: boolean;
};

export type TitleAndSubTitleProps = {
  title: string;
  subTitle: string;
};

export type PlatformList = {
  heading: string;
  platformList: {
    name: string;
    link: string;
  }[];
};

export type AppleAndGoogleStoreButton = {
  flexDirection?: string;
};

export type EndAdornmentProps = {
  isValid: boolean;
  handleClick: () => void;
};
