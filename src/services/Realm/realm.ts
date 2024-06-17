import { Realm, createRealmContext } from "@realm/react";
import { ChatSchema } from "./models/ChatSchema";
import { MessageSchema } from "./models/MessageSchema";

export const realmConfig: Realm.Configuration = {
  schema: [ChatSchema, MessageSchema],
  schemaVersion: 1,
};

export const { RealmProvider, useRealm, useQuery } =
  createRealmContext(realmConfig);
