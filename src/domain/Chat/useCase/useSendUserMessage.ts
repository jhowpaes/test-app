import Realm from "realm";
import { useMutation } from "@tanstack/react-query";
import { MutationOptions } from "../../../infra";
import { PayloadUserMessage, SendMessage } from "../chatTypes";
import { queryClient, useRealm } from "@services";
import { chatService } from "../chatServices";

interface Variables {
  message: string;
  chatId: Realm.BSON.ObjectId;
}

export function useSendUserMessage(
  options?: MutationOptions<PayloadUserMessage>
) {
  const realm = useRealm();

  const mutation = useMutation<PayloadUserMessage, Error, Variables>({
    mutationFn: ({ message, chatId }) =>
      chatService.addUserMessage(realm, message, chatId),
    retry: false,
    onError: (error) => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries();
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
  });

  return {
    isLoading: mutation.isPending,
    sendUserMessage: (variables: Variables) => mutation.mutate(variables),
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
}
