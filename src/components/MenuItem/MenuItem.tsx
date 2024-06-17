import React from "react";
import { Box, TouchableOpacityBox, TouchableOpacityBoxProps } from "../Box/Box";
import { Icon, IconProps } from "../Icon/Icon";
import { Text } from "../Text/Text";

export interface MenuItemProps extends TouchableOpacityBoxProps {
  title: string;
  subtitle?: string;
  graphic?: boolean;
  iconName: IconProps["name"];
}

export function MenuItem({
  title,
  subtitle,
  graphic,
  iconName,
  ...touchableOpacityBoxProps
}: MenuItemProps) {
  return (
    <TouchableOpacityBox
      marginHorizontal="s24"
      marginVertical="s16"
      {...touchableOpacityBoxProps}
    >
      <Box
        flexDirection="row"
        alignItems={subtitle ? "flex-start" : "center"}
        justifyContent="space-between"
      >
        <Box
          flexDirection="row"
          alignItems={subtitle ? "flex-start" : "center"}
          gap="s24"
        >
          <Icon name={iconName} size={32} />
          <Box>
            <Text preset="paragraphLarge" semiBold>
              {title}
            </Text>
            {graphic && (
              <Box paddingVertical="s10">
                <Box
                  height={8}
                  width="90%"
                  borderRadius="s8"
                  backgroundColor="gray2"
                >
                  <Box
                    height={8}
                    width="75%"
                    borderRadius="s8"
                    backgroundColor="primary"
                  />
                </Box>
              </Box>
            )}
            {subtitle && (
              <Text preset="paragraphCaption" color="gray3">
                {subtitle}
              </Text>
            )}
          </Box>
        </Box>
        <Icon name="caretRight" color="gray2" />
      </Box>
    </TouchableOpacityBox>
  );
}
