import React, { useState } from "react";
import { Image } from "react-native";
import * as Clipboard from "expo-clipboard";
import { Box, Icon, Screen, Text, TouchableOpacityBox } from "@components";
import Illustration from "../../assets/imgs/Illustration.png";

export function InviteFriendsScreen() {
  const [copyInvite, setCopyInvite] = useState("BrainAiPartnerMR");

  async function copyToClipboard() {
    await Clipboard.setStringAsync(copyInvite);
  }

  return (
    <Screen header={{ title: "Invite Friends", canGoBack: true }}>
      <Box alignItems="center" marginVertical="s40">
        <Image
          source={Illustration}
          style={{
            width: 167,
            height: 245,
          }}
        />

        <Box alignItems="center" width={250}>
          <Text preset="headingMedium">Refer A Friend</Text>

          <Text color="primary" textAlign="center">
            Share Your Promo Code & Get $3 For Each Friend
          </Text>
        </Box>
      </Box>

      <TouchableOpacityBox
        height={74}
        backgroundColor="gray4"
        borderRadius="s16"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingHorizontal="s24"
        borderWidth={1}
        borderColor="gray7"
        marginHorizontal="s24"
        onPress={copyToClipboard}
      >
        <Text semiBold>{copyInvite}</Text>
        <Icon name="copySimple" color="gray7" />
      </TouchableOpacityBox>
    </Screen>
  );
}
