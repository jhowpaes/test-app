import { Realm } from "@realm/react";
import { Message } from "./MessageSchema";

export type Chat = {
  _id: Realm.BSON.ObjectId;
  title: string;
  messages?: Realm.List<Message>;
  createdAt?: Date;
};

export const ChatSchema: Realm.ObjectSchema = {
  name: "Chat",
  primaryKey: "_id",
  properties: {
    _id: "objectId",
    title: "string",
    messages: "Message[]",
    createdAt: "date",
  },
};
