export type SendMessage = {
  message: string;
};

export type PayloadUserMessage = {
  message: string;
  chatId: Realm.BSON.ObjectId;
};
