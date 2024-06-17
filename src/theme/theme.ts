import { ViewStyle } from "react-native";

import { createTheme } from "@shopify/restyle";

const palette = {
  grayPrimary: "#757474",
  bluePrimaryLight: "#90B8E9",
  greenSuccess: "#1F9104",
  greenSuccessLight: "#D8FFEC",
  redError: "#EA3838",
  redErrorLight: "#FBECEC",

  grayBlack: "#23262F",
  gray1: "#3D3D3D",
  gray2: "#9E9E9E",
  gray3: "#737373",
  gray4: "#DADADA",
  gray5: "#F7F8FA",
  gray6: "#E7EBF9",
  gray7: "#141718",
  grayWhite: "#FFFFFF",
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.grayPrimary,
    primaryContrast: palette.grayWhite,

    buttonPrimary: palette.gray7,

    background: palette.grayWhite,
    backgroundContrast: palette.gray7,

    error: palette.redError,
    errorLight: palette.redErrorLight,

    success: palette.greenSuccess,
    successLight: palette.greenSuccessLight,
  },
  spacing: {
    s4: 4,
    s7: 7,
    s8: 8,
    s10: 10,
    s12: 12,
    s16: 16,
    s24: 24,
    s32: 32,
    s40: 40,
    s100: 100,
  },
  borderRadii: {
    s4: 4,
    s8: 8,
    s16: 16,
    s25: 25,
    s36: 36,
  },
  textVariants: {
    defaults: {},
  },
});

export const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowColor: "#000000",
  shadowOpacity: 0.1,
  shadowRadius: 7,
  shadowOffset: { width: 0, height: -3 },
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme["colors"];
