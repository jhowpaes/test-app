import React from "react";
import { Box, Icon, Screen, Text, TouchableOpacityBox } from "@components";
import { AppScreenProps } from "@routes";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useGetChat } from "@domain";
import { Chat } from "@services";

export function HomeScreen({ navigation }: AppScreenProps<"TabNavigation">) {
  const { chats } = useGetChat();

  function navigationToChat(chatId: Realm.BSON.ObjectId | null) {
    navigation.navigate("ChatScreen", { chatId: chatId });
  }

  function renderChatItem({ item }: ListRenderItemInfo<Chat>) {
    return (
      <TouchableOpacityBox
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        marginHorizontal="s24"
        backgroundColor="gray5"
        marginBottom="s10"
        borderRadius="s8"
        paddingHorizontal="s10"
        height={50}
        onPress={() => navigationToChat(item._id.toHexString())}
      >
        <Text preset="paragraphCaption" color="gray2">
          {item.title}
        </Text>
        <Icon name="caretRight" color="gray2" />
      </TouchableOpacityBox>
    );
  }

  function renderEmpty() {
    return (
      <Box mt="s24" marginHorizontal="s24" alignItems="center">
        <Text>no chat started</Text>
      </Box>
    );
  }

  return (
    <Screen
      header={{
        title: "Home",
        options: {
          name: "chat",
          color: "gray7",
          size: 30,
          onPress: () => navigationToChat(null),
        },
      }}
    >
      <FlatList
        data={chats}
        renderItem={renderChatItem}
        ListEmptyComponent={renderEmpty}
      />
    </Screen>
  );
}
