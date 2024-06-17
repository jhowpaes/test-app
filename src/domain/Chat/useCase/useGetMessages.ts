import Realm from "realm";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../../infra";
import { chatService } from "../chatServices";
import { useRealm } from "@services";

export const useGetMessages = (chatId: Realm.BSON.ObjectId) => {
  const realm = useRealm();
  const { data, isError, isLoading } = useQuery({
    queryKey: [QueryKeys.getMessages],
    queryFn: () => chatService.getMessages(realm, chatId),
    staleTime: 1000 * 30, // 30 seconds
    enabled: !!chatId,
  });

  return {
    messages: data,
    isError,
    isLoading,
  };
};
