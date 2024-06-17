import Realm from "realm";
import { useMutation } from "@tanstack/react-query";
import { MutationOptions } from "../../../infra";
import { SendMessage } from "../chatTypes";
import { queryClient, useRealm } from "@services";
import { chatService } from "../chatServices";

interface Variables {
  message: string;
  chatId: Realm.BSON.ObjectId;
}

export function useSendBotMessage(options?: MutationOptions<SendMessage>) {
  const realm = useRealm();

  const mutation = useMutation<SendMessage, Error, Variables>({
    mutationFn: ({ message, chatId }) =>
      chatService.addBotMessage(realm, message, chatId),
    retry: false,
    onError: (error) => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: (responseMessage) => {
      queryClient.invalidateQueries();
      if (options?.onSuccess) {
        options.onSuccess(responseMessage);
      }
    },
  });

  return {
    isLoading: mutation.isPending,
    sendBotMessage: (variables: Variables) => mutation.mutate(variables),
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
}
