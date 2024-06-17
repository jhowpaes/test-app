import { Realm } from "@realm/react";

export type Message = {
  _id: Realm.BSON.ObjectId;
  chatId: Realm.BSON.ObjectId;
  message: string;
  sender: "user" | "bot";
  createdAt?: Date;
};

export const MessageSchema: Realm.ObjectSchema = {
  name: "Message",
  primaryKey: "_id",
  properties: {
    _id: "objectId",
    chatId: "objectId",
    message: "string",
    sender: "string",
    createdAt: "date",
  },
};
