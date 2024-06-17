import React from "react";

import { ActivityIndicator } from "../ActivityIndicator/ActivityIndicator";

import { buttonPresets } from "./buttonPresets";
import { Icon, IconProps } from "../Icon/Icon";
import { Text } from "../Text/Text";
import { Box, TouchableOpacityBox, TouchableOpacityBoxProps } from "../Box/Box";

export type ButtonPreset = "primary" | "outline";

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
  icon?: IconProps;
}

export function Button({
  title,
  loading,
  preset = "primary",
  disabled = false,
  icon,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? "disabled" : "default"];
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      height={55}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}
    >
      {loading ? (
        <ActivityIndicator color={buttonPreset.content.color} />
      ) : (
        <Box gap="s7" flexDirection="row">
          <Text
            color={buttonPreset.content.color}
            preset={buttonPreset.content.preset}
            bold
          >
            {title}
          </Text>
          {icon && (
            <Icon
              name={icon.name}
              color={buttonPreset.content.color}
              size={icon.size}
            />
          )}
        </Box>
      )}
    </TouchableOpacityBox>
  );
}
