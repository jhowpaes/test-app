import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Realm from "realm";
import { SendSchema, sendSchema } from "./chatSchema";
import { Chat, Message, useRealm } from "@services";
import { AppScreenProps } from "@routes";
import {
  Box,
  ChatBubble,
  FormTextInput,
  Icon,
  Screen,
  Text,
  TouchableOpacityBox,
} from "@components";
import { FlatList, ListRenderItemInfo, ScrollView } from "react-native";
import { useSendUserMessage, useSendBotMessage, useGetMessages } from "@domain";

export function ChatScreen({ route }: AppScreenProps<"ChatScreen">) {
  const realm = useRealm();
  const { chatId } = route.params;
  const [currentChatId, setCurrentChatId] =
    useState<Realm.BSON.ObjectId | null>(chatId);

  const { messages, isLoading } = useGetMessages(currentChatId);

  const { control, formState, handleSubmit, reset } = useForm<SendSchema>({
    resolver: zodResolver(sendSchema),
    mode: "onChange",
    defaultValues: {
      message: "",
    },
  });

  const { sendBotMessage } = useSendBotMessage({
    onSuccess: ({ message }) => {
      console.log("bot message: ", message);
    },
  });

  const { sendUserMessage } = useSendUserMessage({
    onSuccess: ({ message, chatId }) => {
      reset();
      sendBotMessage({ message, chatId });
      console.log("return: ", message);
    },
  });

  function submitMessage({ message }: SendSchema) {
    realm.write(() => {
      if (!currentChatId) {
        const chat = realm.create<Chat>("Chat", {
          _id: new Realm.BSON.ObjectId(),
          title: message,
          createdAt: new Date(),
        });
        console.log("chat: ", chat);
        setCurrentChatId(chat._id);
        sendUserMessage({ message, chatId: chat._id });
      } else {
        sendUserMessage({ message, chatId: currentChatId });
      }
    });
  }

  function renderMessage({ item }: ListRenderItemInfo<Message>) {
    return (
      <ChatBubble
        key={item._id.toHexString()}
        message={item.message}
        sender={item.sender}
      />
    );
  }

  return (
    <Screen
      flex={1}
      header={{
        title: "Health",
        options: { name: "options", color: "gray2" },
        canGoBack: true,
      }}
    >
      <Box flex={1} marginHorizontal="s24">
        <FlatList data={messages} renderItem={renderMessage} />

        <Box width="100%" position="absolute" bottom={0}>
          <FormTextInput
            control={control}
            name="message"
            placeholder="send message"
            RightComponent={
              <TouchableOpacityBox onPress={handleSubmit(submitMessage)}>
                <Icon name="paperPlaneFill" color="gray4" />
              </TouchableOpacityBox>
            }
          />
        </Box>
      </Box>
    </Screen>
  );
}
