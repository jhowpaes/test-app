import { ThemeColors } from "../../theme/theme";
import { TouchableOpacityBoxProps } from "../Box/Box";
import { TextProps } from "../Text/Text";

import { ButtonPreset } from "./Button";

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: {
    color: ThemeColors;
    preset: TextProps["preset"];
  };
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: "buttonPrimary",
      },
      content: {
        color: "primaryContrast",
        preset: "paragraphMedium",
      },
    },
    disabled: {
      container: {
        backgroundColor: "gray4",
      },
      content: {
        color: "gray2",
        preset: "paragraphMedium",
      },
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: "primary",
      },
      content: {
        color: "primary",
        preset: "paragraphMedium",
      },
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: "gray2",
      },
      content: {
        color: "gray2",
        preset: "paragraphMedium",
      },
    },
  },
};
