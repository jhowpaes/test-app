import React from "react";
import { ViewStyle } from "react-native";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import {
  TouchableOpacityBox,
  Text,
  Box,
  Icon,
  TextProps,
  BoxProps,
  TouchableOpacityBoxProps,
} from "@components";
import { useAppSafeArea } from "@hooks";

import { AppTabParamsList } from "./AppTab";
import { mapScreenToProps } from "./mapScreenToProps";

export function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { bottom } = useAppSafeArea();
  return (
    <Box {...$boxWrapper} style={{ paddingBottom: bottom }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const tabItem = mapScreenToProps[route.name as keyof AppTabParamsList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            {...$itemWrapper}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Icon
              name={tabItem.icon.name}
              size={28}
              color={isFocused ? "backgroundContrast" : "gray2"}
            />
            {isFocused && (
              <Box
                width={7}
                height={7}
                backgroundColor="backgroundContrast"
                mt="s12"
                borderRadius="s8"
              />
            )}
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}

const $boxWrapper: BoxProps = {
  backgroundColor: "background",
  paddingTop: "s12",
  flexDirection: "row",
  borderWidth: 1,
  borderColor: "gray4",
};

const $itemWrapper: TouchableOpacityBoxProps = {
  flex: 1,
  activeOpacity: 1,
  alignItems: "center",
  accessibilityRole: "button",
};

const $label: TextProps = {
  preset: "paragraphCaption",
  bold: true,
  textTransform: "uppercase",
};
