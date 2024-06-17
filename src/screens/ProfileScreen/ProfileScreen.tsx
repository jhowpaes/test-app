import React from "react";
import { Avatar, Box, MenuItem, MenuItemProps, Screen } from "@components";
import { useNavigation } from "@react-navigation/native";

export function ProfileScreen() {
  const navigation = useNavigation();

  const items: MenuItemProps[] = [
    {
      title: "Preferences",
      iconName: "gear",
      onPress: () => navigation.navigate("PreferencesScreen"),
    },
    {
      title: "Account Security",
      iconName: "lock",
      subtitle: "Excellent",
      graphic: true,
    },
    {
      title: "Customer Support",
      iconName: "question",
    },
    {
      title: "Logout",
      iconName: "signOut",
    },
  ];

  return (
    <Screen header={{ title: "Profile" }}>
      <Avatar />

      <Box mt="s40">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </Box>
    </Screen>
  );
}
