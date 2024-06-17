/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Box, BoxProps, PressableBox } from "../Box/Box";
import { useAppSafeArea, useAppTheme } from "../../hooks";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";
import { KeyboardAvoidingView, Platform } from "react-native";
import {
  ScrollViewContainer,
  ViewContainer,
} from "./components/ScreenContainer";
import { Header, HeaderProps } from "./components/ScreenHeader";

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  header?: HeaderProps;
  scrollable?: boolean;
}

export function Screen({
  children,
  header,
  scrollable,
  ...boxProps
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const { colors } = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Container backgroundColor={colors.background}>
        <Box style={{ paddingBottom: bottom }} {...boxProps}>
          {header && (
            <Header
              title={header.title}
              options={header.options}
              canGoBack={header.canGoBack}
            />
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
