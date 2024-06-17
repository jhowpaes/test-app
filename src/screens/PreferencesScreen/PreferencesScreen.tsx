import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, MenuItem, MenuItemProps, Screen, Text } from "@components";

export function PreferencesScreen() {
  const navigation = useNavigation();

  const items: MenuItemProps[] = [
    {
      title: "Account Information",
      iconName: "userFill",
      subtitle: "Change your Account information",
      onPress: () => navigation.navigate("AccountInformationScreen"),
    },
    {
      title: "Password",
      iconName: "eyeOn",
      subtitle: "Change your Password",
    },
    {
      title: "Payment Methods",
      iconName: "question",
      subtitle: "Add Your Credit / Credit Cards",
    },
    {
      title: "Invite your Friends",
      iconName: "pencilSimple",
      subtitle: "Get $3 For Each Invitation!",
      onPress: () => navigation.navigate("InviteFriendsScreen"),
    },
    {
      title: "Theme Color",
      iconName: "gear",
      subtitle: "Change Your Theme Color",
    },
  ];

  return (
    <Screen header={{ title: "Preferences", canGoBack: true }}>
      <Box mt="s40">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </Box>
    </Screen>
  );
}
