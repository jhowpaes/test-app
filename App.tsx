import "react-native-get-random-values";

import { useCallback } from "react";
import { Box } from "@components";
import { Routes } from "@routes";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "@shopify/restyle";
import { theme } from "@theme";
import { QueryClientProvider } from "@tanstack/react-query";
import { RealmProvider, queryClient } from "@services";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-BoldItalic": require("./src/assets/fonts/Poppins-BoldItalic.ttf"),
    "Poppins-Italic": require("./src/assets/fonts/Poppins-Italic.ttf"),
    "Poppins-Medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-MediumItalic": require("./src/assets/fonts/Poppins-MediumItalic.ttf"),
    "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Box flex={1} onLayout={onLayoutRootView}>
      <RealmProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </QueryClientProvider>
      </RealmProvider>
    </Box>
  );
}
