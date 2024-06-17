import Realm from "realm";
import { Chat, Message } from "@services";
import { chatApi } from "./chatApi";

async function getChat(realm: Realm): Promise<Chat[]> {
  const chats = realm.objects<Chat>("Chat");
  return Array.from(chats);
}

async function getMessages(
  realm: Realm,
  chatId: Realm.BSON.ObjectId
): Promise<Message[]> {
  const messages = realm
    .objects<Message>("Message")
    .filtered("chatId == $0", chatId);
  return Array.from(messages);
}

function addUserMessage(
  realm: Realm,
  message: string,
  chatId: Realm.BSON.ObjectId
) {
  realm.write(() => {
    realm.create<Message>("Message", {
      _id: new Realm.BSON.ObjectId(),
      message: message,
      sender: "user",
      chatId,
      createdAt: new Date(),
    });
  });

  return {
    message,
    chatId,
  };
}

async function addBotMessage(
  realm: Realm,
  message: string,
  chatId: Realm.BSON.ObjectId
) {
  const responseMessage = await chatApi.fetchChatGPT(message);

  realm.write(() => {
    realm.create<Message>("Message", {
      _id: new Realm.BSON.ObjectId(),
      message: responseMessage,
      sender: "bot",
      chatId,
      createdAt: new Date(),
    });
  });

  return {
    message: "bot message created.",
  };
}

export const chatService = {
  addUserMessage,
  addBotMessage,
  getMessages,
  getChat,
};
