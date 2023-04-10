import { PaletteMode } from "@mui/material";

export interface ThemeProps {
  children: React.ReactNode;
}

export type AppReduxState = {
  colorTheme: PaletteMode;
};
