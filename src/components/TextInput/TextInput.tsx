import React, { useRef } from "react";
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from "react-native";

import { ThemeColors } from "@theme";

import { useAppTheme } from "../../hooks/useAppTheme";
import { Box, BoxProps } from "../Box/Box";
import { $fontFamily, $fontSizes, Text } from "../Text/Text";

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  errorMessage?: string;
  borderColor?: ThemeColors | null;
  RightComponent?: React.ReactElement;
  boxProps?: BoxProps;
}

export function TextInput({
  label,
  errorMessage,
  borderColor,
  RightComponent,
  boxProps,
  ...rnTextInputProps
}: TextInputProps) {
  const { colors } = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    borderWidth: errorMessage ? 2 : 1,
    borderColor: !borderColor
      ? errorMessage
        ? "error"
        : "gray4"
      : borderColor,
    flexDirection: "row",
    padding: "s16",
    borderRadius: "s4",
  };

  function focusInput() {
    inputRef.current?.focus();
  }
  return (
    <Box {...boxProps} backgroundColor="grayWhite" position="relative">
      <Pressable onPress={focusInput}>
        {label && (
          <Text preset="paragraphMedium" color="gray1" mb="s7">
            {label}
          </Text>
        )}
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            {...rnTextInputProps}
          />
          {RightComponent && (
            <Box justifyContent="center" ml="s16">
              {RightComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text preset="paragraphCaption" color="error" bold>
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
